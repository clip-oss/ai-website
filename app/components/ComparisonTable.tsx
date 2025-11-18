'use client'

import { motion } from 'framer-motion'
import { Check, X, Zap } from 'lucide-react'
import Button from './Button'

export default function ComparisonTable() {
  const comparisons = [
    {
      feature: 'Monthly Cost',
      traditional: '$3,000 - $5,000',
      answering: '$500 - $1,500',
      receptai: '$697',
    },
    {
      feature: 'Availability',
      traditional: '40-50 hours/week',
      answering: '24/7',
      receptai: '24/7/365',
    },
    {
      feature: 'Call Capacity',
      traditional: '1 call at a time',
      answering: 'Limited',
      receptai: 'Unlimited simultaneous',
    },
    {
      feature: 'Appointment Booking',
      traditional: 'Manual',
      answering: 'Transfer to you',
      receptai: 'Automatic + Calendar Sync',
    },
    {
      feature: 'SMS Confirmations',
      traditional: 'None',
      answering: 'None',
      receptai: 'Automatic',
    },
    {
      feature: 'CRM Integration',
      traditional: 'Manual entry',
      answering: 'None',
      receptai: 'Real-time sync',
    },
    {
      feature: 'Call Analytics',
      traditional: 'None',
      answering: 'Basic',
      receptai: 'Advanced AI insights',
    },
    {
      feature: 'Setup Time',
      traditional: '2-4 weeks hiring',
      answering: '1-2 weeks',
      receptai: '7 days',
    },
    {
      feature: 'Scalability',
      traditional: 'Hire more staff',
      answering: 'Pay more',
      receptai: 'Instant, no extra cost',
    },
  ]

  return (
    <section className="py-12 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
            How ReceptAI
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Compares
            </span>
          </h2>
          <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
            See why thousands of businesses are switching to AI
          </p>
        </motion.div>

        {/* Mobile: Simplified View - Show only key comparisons */}
        <div className="lg:hidden space-y-4">
          {comparisons.slice(0, 5).map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200"
            >
              <h3 className="font-bold text-gray-900 mb-3 text-sm">{row.feature}</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">Traditional:</span>
                  <span className="text-gray-900 font-medium">{row.traditional}</span>
                </div>
                <div className="flex items-center justify-between bg-gradient-to-r from-green-50 to-emerald-50 p-2 rounded-lg border border-green-200 text-xs">
                  <span className="text-gray-900 font-semibold">ReceptAI:</span>
                  <div className="flex items-center gap-1">
                    <Check className="w-3 h-3 text-green-600" />
                    <span className="text-gray-900 font-bold">{row.receptai}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Mobile CTA */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 text-center">
            <p className="text-xl font-bold text-gray-900 mb-2">
              Save <span className="text-green-600">$50K+</span> annually
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Capture 100% of calls, never miss revenue
            </p>
            <Button
              variant="primary"
              size="lg"
              href="https://calendly.com/galateanulorenzo/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              Start Saving Today
            </Button>
          </div>
        </div>

        {/* Desktop: Full Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block overflow-hidden rounded-3xl shadow-2xl bg-white"
        >
          {/* Table Header */}
          <div className="grid gap-6 p-8 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200" style={{ gridTemplateColumns: '1.8fr 1fr 1fr 1.5fr' }}>
            <div className="text-sm font-semibold text-gray-600"></div>
            <div className="text-center px-2">
              <p className="text-sm font-semibold text-gray-600 mb-1">Traditional</p>
              <p className="text-xs text-gray-500">Receptionist</p>
            </div>
            <div className="text-center px-2">
              <p className="text-sm font-semibold text-gray-600 mb-1">Answering</p>
              <p className="text-xs text-gray-500">Service</p>
            </div>
            <div className="text-center relative px-2">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-full whitespace-nowrap">
                <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                  <Zap className="w-3 h-3" />
                  BEST VALUE
                </div>
              </div>
              <p className="text-base font-bold text-primary mb-1">ReceptAI</p>
              <p className="text-xs text-gray-600">AI Solution</p>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {comparisons.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="grid gap-6 p-6 hover:bg-blue-50/30 transition-colors duration-300"
                style={{ gridTemplateColumns: '1.8fr 1fr 1fr 1.5fr' }}
              >
                <div className="font-semibold text-gray-900 flex items-center">
                  {row.feature}
                </div>
                <div className="text-center text-sm text-gray-600 flex items-center justify-center px-2">
                  {row.traditional}
                </div>
                <div className="text-center text-sm text-gray-600 flex items-center justify-center px-2">
                  {row.answering}
                </div>
                <div className="flex items-center justify-center px-2">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-lg border border-green-200 whitespace-nowrap">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-900">{row.receptai}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Table Footer - CTA */}
          <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-t border-gray-200">
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900 mb-2">
                Save over <span className="text-green-600">$50,000</span> annually
              </p>
              <p className="text-gray-600 mb-6">
                Plus: Capture 100% of calls, never miss revenue, scale instantly
              </p>
              <Button
                variant="primary"
                size="xl"
                href="https://calendly.com/galateanulorenzo/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Saving Today
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="hidden lg:grid md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
            <p className="text-4xl font-bold text-primary mb-2">10x</p>
            <p className="text-gray-600">More efficient than traditional</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
            <p className="text-4xl font-bold text-green-600 mb-2">$150K+</p>
            <p className="text-gray-600">Average annual savings</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white shadow-lg">
            <p className="text-4xl font-bold text-purple-600 mb-2">100%</p>
            <p className="text-gray-600">Call capture rate</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
