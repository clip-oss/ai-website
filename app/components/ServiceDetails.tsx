'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, Workflow, TrendingUp, Check, ArrowRight } from 'lucide-react'
import Button from './Button'

export default function ServiceDetails() {
  const serviceDetails = [
    {
      id: 'phone-receptionist',
      icon: Phone,
      title: 'AI Phone Receptionist',
      subtitle: 'Your 24/7 Virtual Front Desk',
      description: 'Never miss another customer call. Our AI receptionist answers every call instantly, books appointments automatically, and integrates seamlessly with your existing systems.',
      benefits: [
        {
          title: 'Always Available',
          description: '24/7/365 availability - never miss a call, even during holidays, weekends, or after hours',
        },
        {
          title: 'Natural Conversations',
          description: 'Advanced AI that sounds completely human, understands context, and handles complex conversations',
        },
        {
          title: 'Automatic Booking',
          description: 'Checks your calendar in real-time, schedules appointments, and sends instant SMS confirmations',
        },
        {
          title: 'Unlimited Capacity',
          description: 'Handle infinite simultaneous calls - no more busy signals or customers waiting on hold',
        },
        {
          title: 'Smart Routing',
          description: 'Intelligently transfers urgent calls to the right person while handling routine inquiries automatically',
        },
        {
          title: 'Complete Analytics',
          description: 'Detailed call recordings, transcripts, and insights to understand your customers better',
        },
      ],
      useCases: [
        'HVAC & Home Services',
        'Medical & Dental Practices',
        'Legal Firms',
        'Real Estate Agencies',
        'Salons & Spas',
        'Restaurants',
      ],
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      id: 'website-chatbot',
      icon: MessageCircle,
      title: 'AI Website Chatbot',
      subtitle: 'Convert More Visitors Into Customers',
      description: 'Engage every website visitor instantly. Our AI chatbot qualifies leads, answers questions, and books appointments - all while you sleep.',
      benefits: [
        {
          title: 'Instant Engagement',
          description: 'Greet visitors the moment they land on your site with personalized, contextual messages',
        },
        {
          title: 'Lead Qualification',
          description: 'Automatically qualifies leads based on your criteria and routes hot prospects to your sales team',
        },
        {
          title: 'Multi-Language',
          description: 'Communicates fluently in over 50 languages to serve your global audience',
        },
        {
          title: 'Custom Training',
          description: 'Trained specifically on your business, products, services, and FAQs for accurate responses',
        },
        {
          title: 'CRM Integration',
          description: 'Automatically syncs conversations, leads, and data to your CRM in real-time',
        },
        {
          title: 'Appointment Booking',
          description: 'Books appointments directly from your website and syncs with your calendar',
        },
      ],
      useCases: [
        'E-commerce Stores',
        'SaaS Companies',
        'Service Businesses',
        'Educational Institutions',
        'Healthcare Providers',
        'B2B Companies',
      ],
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      id: 'workflow-automation',
      icon: Workflow,
      title: 'Workflow Automation',
      subtitle: 'Eliminate Repetitive Tasks Forever',
      description: 'Stop wasting time on manual, repetitive tasks. Automate your workflows and connect all your business tools seamlessly.',
      benefits: [
        {
          title: 'Custom Workflows',
          description: 'Build automated workflows tailored to your exact business processes and requirements',
        },
        {
          title: '1000+ Integrations',
          description: 'Connect with all your existing tools - CRM, email, calendar, payment processors, and more',
        },
        {
          title: 'Automated Invoicing',
          description: 'Generate and send invoices automatically when work is completed or milestones are reached',
        },
        {
          title: 'Smart Data Entry',
          description: 'Automatically capture, organize, and sync data across all your systems',
        },
        {
          title: 'Email Automation',
          description: 'Trigger personalized email sequences based on customer actions and behaviors',
        },
        {
          title: 'Real-Time Reporting',
          description: 'Automated dashboards and reports delivered to your inbox on your schedule',
        },
      ],
      useCases: [
        'Professional Services',
        'Marketing Agencies',
        'Accounting Firms',
        'Construction Companies',
        'Consulting Businesses',
        'Manufacturing',
      ],
      gradient: 'from-indigo-500 to-indigo-600',
    },
    {
      id: 'lead-generation',
      icon: TrendingUp,
      title: 'Lead Generation',
      subtitle: 'Generate 300+ Qualified Leads Monthly',
      description: 'Automate your entire lead generation process. Capture, qualify, nurture, and convert leads on autopilot.',
      benefits: [
        {
          title: 'Multi-Channel Capture',
          description: 'Capture leads from website, social media, email, phone, and more - all in one system',
        },
        {
          title: 'Auto Qualification',
          description: 'Automatically score and qualify leads based on behavior, demographics, and engagement',
        },
        {
          title: 'Intelligent Nurturing',
          description: 'Personalized follow-up sequences that adapt based on lead behavior and responses',
        },
        {
          title: 'CRM Sync',
          description: 'Seamlessly syncs all lead data, interactions, and notes to your CRM in real-time',
        },
        {
          title: 'Performance Analytics',
          description: 'Track conversion rates, ROI, and lead quality with detailed analytics dashboards',
        },
        {
          title: 'A/B Testing',
          description: 'Automatically test different messages, offers, and sequences to optimize conversion',
        },
      ],
      useCases: [
        'Real Estate',
        'Insurance Agencies',
        'Financial Services',
        'B2B Sales Teams',
        'Franchise Businesses',
        'Home Improvement',
      ],
      gradient: 'from-green-500 to-green-600',
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {serviceDetails.map((service, index) => (
          <motion.div
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${index !== 0 ? 'mt-32' : ''}`}
          >
            {/* Service Header */}
            <div className="text-center mb-16">
              <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <service.icon className="w-10 h-10 text-white" strokeWidth={2} />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                {service.title}
              </h2>
              <p className="text-2xl text-gray-600 mb-6">{service.subtitle}</p>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {service.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Check className={`w-6 h-6 bg-gradient-to-br ${service.gradient} text-white rounded-full p-1 flex-shrink-0 mt-0.5`} />
                    <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Use Cases */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Perfect For These Industries
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {service.useCases.map((useCase, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <p className="text-sm font-semibold text-gray-900">{useCase}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-center mt-12"
            >
              <Button
                variant="primary"
                size="xl"
                href="https://calendly.com/galateanulorenzo/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                Get Started with {service.title}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
