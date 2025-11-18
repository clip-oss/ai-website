'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, Workflow, TrendingUp, Check } from 'lucide-react'
import Button from './Button'

export default function ServicesGrid() {
  const services = [
    {
      icon: Phone,
      title: 'AI Phone Receptionist',
      description: '24/7 call answering, appointment booking, SMS confirmations. Never miss a customer again.',
      features: [
        'Unlimited call handling',
        'Natural voice conversations',
        'Calendar integration',
        'SMS & email automation',
        'Call analytics & recording',
      ],
      price: 'From $697/month',
      featured: true,
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      learnMoreLink: '/services/phone-receptionist',
    },
    {
      icon: MessageCircle,
      title: 'AI Website Chatbot',
      description: 'Engage visitors 24/7. Qualify leads automatically. Answer questions instantly. Convert more visitors to customers.',
      features: [
        'Instant response to visitors',
        'Lead qualification',
        'CRM integration',
        'Multi-language support',
        'Custom training on your data',
      ],
      price: 'From $497/month',
      featured: false,
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100',
      learnMoreLink: '/services/website-chatbot',
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Eliminate repetitive tasks. Connect all your tools. Automate invoicing, reporting, data entry, and more.',
      features: [
        'Custom workflow design',
        'Tool integrations (1000+)',
        'Automated invoicing',
        'Email sequences',
        'Reporting dashboards',
      ],
      price: 'From $797/month',
      featured: false,
      gradient: 'from-indigo-500 to-indigo-600',
      bgGradient: 'from-indigo-50 to-indigo-100',
      learnMoreLink: '/services/workflow-automation',
    },
    {
      icon: TrendingUp,
      title: 'Lead Generation',
      description: 'Automate your lead capture, qualification, and follow-up. Generate 300+ qualified leads monthly on autopilot.',
      features: [
        'Multi-channel lead capture',
        'Auto qualification & scoring',
        'Intelligent follow-up sequences',
        'CRM synchronization',
        'Performance analytics',
      ],
      price: 'From $997/month',
      featured: false,
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100',
      learnMoreLink: '/services/lead-generation',
    },
  ]

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Complete Business
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Automation Suite
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond just phone calls - automate your entire operation
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative group ${service.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className={`bg-gradient-to-br ${service.bgGradient} rounded-3xl p-8 border-2 ${service.featured ? 'border-primary shadow-2xl shadow-primary/20' : 'border-transparent'} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col`}>
                {service.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ FEATURED SERVICE
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6 flex-grow">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 ${service.featured ? 'text-primary' : 'text-gray-600'} flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="mt-auto pt-6 border-t border-gray-300">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Starting at</p>
                      <p className="text-2xl font-bold text-gray-900">{service.price}</p>
                    </div>
                  </div>
                  <Button
                    variant={service.featured ? 'primary' : 'ghost'}
                    size="lg"
                    className={`w-full ${!service.featured ? 'bg-white border-2 border-gray-300 text-gray-900 hover:border-gray-900' : ''}`}
                    href={service.featured ? 'https://calendly.com/galateanulorenzo/30min' : service.learnMoreLink}
                    target={service.featured ? '_blank' : undefined}
                    rel={service.featured ? 'noopener noreferrer' : undefined}
                  >
                    {service.featured ? 'Get Started' : 'Learn More'}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
