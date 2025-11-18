'use client'

import { motion } from 'framer-motion'
import { Calendar, Wrench, Rocket } from 'lucide-react'
import Button from './Button'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: Calendar,
      title: 'Book Free Consultation',
      description: '15-minute call to understand your business needs and customize your AI system.',
      timeline: 'Day 1',
      color: 'from-blue-500 to-blue-600',
    },
    {
      number: '02',
      icon: Wrench,
      title: 'We Build Your System',
      description: 'Our team configures your AI, trains it on your business, and integrates with your calendar and tools.',
      timeline: 'Days 2-6',
      color: 'from-purple-500 to-purple-600',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Go Live & Save Money',
      description: 'Your AI goes live and starts capturing calls immediately. ROI within the first week.',
      timeline: 'Day 7',
      color: 'from-green-500 to-green-600',
    },
  ]

  return (
    <section id="how-it-works" className="py-12 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration - HIDDEN ON MOBILE */}
      <div className="hidden lg:block absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
            From Setup to Success
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              in 7 Days
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line - HIDDEN ON MOBILE */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2" />

          {/* Steps */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative z-10">
                  {/* Large Number Background - HIDDEN ON MOBILE */}
                  <div className="hidden lg:block absolute top-0 right-0 text-9xl font-bold text-gray-100 opacity-50 leading-none">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-14 lg:w-20 h-14 lg:h-20 bg-gradient-to-br ${step.color} rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 relative z-10`}>
                    <step.icon className="w-7 lg:w-10 h-7 lg:h-10 text-white" strokeWidth={2} />
                  </div>

                  {/* Timeline Badge */}
                  <div className="inline-block px-3 lg:px-4 py-1 lg:py-2 bg-gray-100 rounded-full mb-3 lg:mb-4">
                    <p className="text-xs lg:text-sm font-semibold text-gray-700">{step.timeline}</p>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-4 relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-lg leading-relaxed relative z-10">
                    {step.description}
                  </p>
                </div>

                {/* Connection Dot - HIDDEN ON MOBILE */}
                <div className={`hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br ${step.color} rounded-full border-4 border-white shadow-lg z-20`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA - HIDDEN ON MOBILE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="hidden lg:block text-center mt-16"
        >
          <Button variant="primary" size="xl">
            Start Your 7-Day Journey
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
