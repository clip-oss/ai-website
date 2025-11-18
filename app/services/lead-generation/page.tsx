'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, Check, ArrowRight } from 'lucide-react'
import Button from '../../components/Button'

export default function LeadGenerationPage() {
  const benefits = [
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
  ]

  const useCases = [
    'Real Estate',
    'Insurance Agencies',
    'Financial Services',
    'B2B Sales Teams',
    'Franchise Businesses',
    'Home Improvement',
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 py-20">
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
              <TrendingUp className="w-10 h-10 text-white" strokeWidth={2} />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
                Lead Generation
              </h1>
              <p className="text-2xl text-white/90">Generate 300+ Qualified Leads Monthly</p>
            </div>
          </div>
          <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
            Automate your entire lead generation process. Capture, qualify, nurture, and convert leads on autopilot.
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
            Why Choose Our Lead Generation System?
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
                  <Check className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full p-1 flex-shrink-0 mt-0.5" />
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
          className="bg-gradient-to-r from-green-50 to-green-100 rounded-3xl p-8 border border-green-200 mb-16"
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
          className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-green-500 mb-16"
        >
          <div className="text-center mb-8">
            <p className="text-gray-600 mb-2">Starting at</p>
            <p className="text-5xl font-bold text-gray-900 mb-4">$997<span className="text-2xl text-gray-600">/month</span></p>
            <p className="text-gray-600">Generate 300+ qualified leads monthly • 30-day money-back guarantee</p>
          </div>
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-gray-700">
              <Check className="w-5 h-5 text-green-600" />
              <span>Multi-channel lead capture</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Check className="w-5 h-5 text-green-600" />
              <span>Auto qualification & scoring</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Check className="w-5 h-5 text-green-600" />
              <span>Intelligent follow-up sequences</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Check className="w-5 h-5 text-green-600" />
              <span>CRM synchronization</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Check className="w-5 h-5 text-green-600" />
              <span>Performance analytics</span>
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
            Ready to Generate More Qualified Leads?
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
              href="https://wa.me/37378093320?text=Hi!%20I'm%20interested%20in%20Lead%20Generation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white hover:bg-[#20BA5A] border-0"
            >
              Chat on WhatsApp
            </Button>
          </div>
          <p className="text-gray-600 mt-6">
            No credit card required • 14-day setup • 30-day money-back guarantee
          </p>
        </motion.div>
      </div>
    </main>
  )
}
