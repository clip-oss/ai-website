'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, MessageCircle, Check, ArrowRight } from 'lucide-react'
import Button from '../../components/Button'

export default function WebsiteChatbotPage() {
  const benefits = [
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
  ]

  const useCases = [
    'E-commerce Stores',
    'SaaS Companies',
    'Service Businesses',
    'Educational Institutions',
    'Healthcare Providers',
    'B2B Companies',
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
              <MessageCircle className="w-10 h-10 text-white" strokeWidth={2} />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
                AI Website Chatbot
              </h1>
              <p className="text-2xl text-white/90">Convert More Visitors Into Customers</p>
            </div>
          </div>
          <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
            Engage every website visitor instantly. Our AI chatbot qualifies leads, answers questions, and books appointments - all while you sleep.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Our AI Website Chatbot?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Check className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full p-1 flex-shrink-0 mt-0.5" />
                  <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-3xl p-8 border border-purple-200 mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Perfect For These Industries
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {useCases.map((useCase, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-sm font-semibold text-gray-900">{useCase}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-purple-500 mb-16"
        >
          <div className="text-center mb-8">
            <p className="text-gray-600 mb-2">Starting at</p>
            <p className="text-5xl font-bold text-gray-900 mb-4">$497<span className="text-2xl text-gray-600">/month</span></p>
            <p className="text-gray-600">30-day money-back guarantee</p>
          </div>
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-gray-700">
              <Check className="w-5 h-5 text-green-600" />
              <span>Instant response to visitors</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Check className="w-5 h-5 text-green-600" />
              <span>Lead qualification</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Check className="w-5 h-5 text-green-600" />
              <span>CRM integration</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Check className="w-5 h-5 text-green-600" />
              <span>Multi-language support</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Check className="w-5 h-5 text-green-600" />
              <span>Custom training on your data</span>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Convert More Website Visitors?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="xl"
              href="https://calendly.com/galateanulorenzo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              Book Free Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="secondary"
              size="xl"
              href="https://wa.me/37378093320?text=Hi!%20I'm%20interested%20in%20the%20AI%20Website%20Chatbot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white hover:bg-[#20BA5A] border-0"
            >
              Chat on WhatsApp
            </Button>
          </div>
          <p className="text-gray-600 mt-6">
            No credit card required • Quick setup • 30-day money-back guarantee
          </p>
        </motion.div>
      </div>
    </main>
  )
}
