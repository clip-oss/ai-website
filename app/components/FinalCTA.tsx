'use client'

import { motion } from 'framer-motion'
import { Check, MessageCircle, Clock } from 'lucide-react'
import Button from './Button'

export default function FinalCTA() {
  const trustIndicators = [
    { icon: Check, text: 'No Credit Card Required' },
    { icon: Clock, text: '7-Day Setup' },
    { icon: Check, text: '30-Day Money Back' },
    { icon: Check, text: 'Cancel Anytime' },
  ]

  return (
    <section className="relative py-16 lg:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary animate-gradient" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      {/* Floating Particles - HIDDEN ON MOBILE */}
      <div className="hidden lg:block absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 lg:mb-6 leading-tight">
            Stop Losing $100K+
            <br />
            Every Year
          </h2>

          {/* Subheadline */}
          <p className="text-base md:text-xl lg:text-2xl text-white/90 mb-8 lg:mb-12 leading-relaxed">
            Join 15+ businesses already using AI to capture every customer call.
            <br className="hidden lg:block" />
            <span className="font-semibold">Setup in 7 days. See ROI in week one.</span>
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center mb-8 lg:mb-12"
          >
            <Button
              variant="secondary"
              size="xl"
              className="bg-white text-primary hover:bg-white hover:scale-105 border-0"
              href="https://calendly.com/galateanulorenzo/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Free Demo
            </Button>
            <Button
              variant="secondary"
              size="xl"
              className="group"
              href="https://wa.me/37378093320?text=Hi!%20I'm%20interested%20in%20ReceptAI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Chat on WhatsApp
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 lg:gap-6"
          >
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center gap-2 text-white/90">
                <indicator.icon className="w-4 lg:w-5 h-4 lg:h-5" />
                <span className="text-xs lg:text-base font-medium">{indicator.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
