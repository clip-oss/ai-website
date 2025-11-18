'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Workflow, Check, ArrowRight } from 'lucide-react'
import Button from '../../components/Button'

export default function WorkflowAutomationPage() {
  const benefits = [
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
  ]

  const useCases = [
    'Professional Services',
    'Marketing Agencies',
    'Accounting Firms',
    'Construction Companies',
    'Consulting Businesses',
    'Manufacturing',
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 py-20">
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
              <Workflow className="w-10 h-10 text-white" strokeWidth={2} />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
                Workflow Automation
              </h1>
              <p className="text-2xl text-white/90">Eliminate Repetitive Tasks Forever</p>
            </div>
          </div>
          <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
            Stop wasting time on manual, repetitive tasks. Automate your workflows and connect all your business tools seamlessly.
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
            Why Choose Our Workflow Automation?
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
                  <Check className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-full p-1 flex-shrink-0 mt-0.5" />
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
          className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-3xl p-8 border border-indigo-200 mb-16"
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
          className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-indigo-500 mb-16"
        >
          <div className="text-center mb-8">
            <p className="text-gray-600 mb-2">Starting at</p>
            <p className="text-5xl font-bold text-gray-900 mb-4">$797<span className="text-2xl text-gray-600">/month</span></p>
            <p className="text-gray-600">30-day money-back guarantee</p>
          </div>
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-gray-700">
              <Check className="w-5 h-5 text-green-600" />
              <span>Custom workflow design</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Check className="w-5 h-5 text-green-600" />
              <span>Tool integrations (1000+)</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Check className="w-5 h-5 text-green-600" />
              <span>Automated invoicing</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Check className="w-5 h-5 text-green-600" />
              <span>Email sequences</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Check className="w-5 h-5 text-green-600" />
              <span>Reporting dashboards</span>
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
            Ready to Automate Your Business?
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
              href="https://wa.me/37378093320?text=Hi!%20I'm%20interested%20in%20Workflow%20Automation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white hover:bg-[#20BA5A] border-0"
            >
              Chat on WhatsApp
            </Button>
          </div>
          <p className="text-gray-600 mt-6">
            No credit card required • Custom setup • 30-day money-back guarantee
          </p>
        </motion.div>
      </div>
    </main>
  )
}
