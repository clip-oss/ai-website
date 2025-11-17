'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, CreditCard, Lock, RotateCcw, Phone } from 'lucide-react'
import Button from './Button'

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  const tiers = [
    {
      name: 'Starter',
      monthlyPrice: 697,
      annualPrice: 558,
      description: 'Small businesses, 1-10 employees',
      features: [
        'AI Phone Receptionist',
        '1 Phone Number',
        '500 Minutes Included',
        'Google Calendar Integration',
        'SMS Confirmations',
        'Email Support',
        'Call Recording',
        'Basic Analytics',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Professional',
      monthlyPrice: 997,
      annualPrice: 798,
      description: 'Growing businesses, 10-50 employees',
      features: [
        'Everything in Starter',
        '2 Phone Numbers',
        '1,000 Minutes Included',
        'AI Website Chatbot',
        'Advanced CRM Integration',
        'Custom Voice Training',
        'Priority Support',
        'Advanced Analytics',
        'Multi-location Support',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      monthlyPrice: 1497,
      annualPrice: 1198,
      description: 'Large operations, 50+ employees',
      features: [
        'Everything in Professional',
        'Unlimited Phone Numbers',
        '2,000 Minutes Included',
        'All Automation Services',
        'White-Label Option',
        'Dedicated Account Manager',
        'Custom Integrations',
        '24/7 Priority Support',
        'API Access',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ]

  const trustBadges = [
    { icon: CreditCard, text: 'No Credit Card Required' },
    { icon: Lock, text: 'Bank-Level Security' },
    { icon: RotateCcw, text: '30-Day Money-Back' },
    { icon: Phone, text: 'Cancel Anytime' },
  ]

  return (
    <section id="pricing" className="py-32 bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            No hidden fees. Cancel anytime. Money-back guarantee.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <span className={`text-lg font-semibold ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
              isAnnual ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-gray-300'
            }`}
          >
            <motion.div
              className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md"
              animate={{ x: isAnnual ? 32 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`text-lg font-semibold ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            Annual
            <span className="ml-2 text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full">
              Save 20%
            </span>
          </span>
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative ${tier.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ MOST POPULAR
                  </div>
                </div>
              )}

              <div className={`bg-white rounded-3xl p-8 h-full flex flex-col ${
                tier.popular
                  ? 'border-2 border-primary shadow-2xl shadow-primary/20'
                  : 'border border-gray-200 shadow-lg'
              } hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}>
                {/* Tier Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-6">{tier.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-gray-900">
                      ${isAnnual ? tier.annualPrice : tier.monthlyPrice}
                    </span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-green-600 font-semibold mt-1">
                      Save ${(tier.monthlyPrice - tier.annualPrice) * 12}/year
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 ${tier.popular ? 'text-primary' : 'text-gray-600'} flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant={tier.popular ? 'primary' : 'ghost'}
                  size="lg"
                  className={`w-full ${!tier.popular ? 'bg-white border-2 border-gray-300 text-gray-900 hover:border-gray-900' : ''}`}
                >
                  {tier.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center justify-center gap-3 text-gray-600">
              <badge.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{badge.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
