'use client'

import { motion } from 'framer-motion'
import { Check, Phone, Flame, Clock } from 'lucide-react'
import Button from './Button'

export default function FinalCTA() {
  const trustIndicators = [
    { icon: Check, text: 'No Credit Card Required' },
    { icon: Clock, text: '7-Day Setup' },
    { icon: Check, text: '30-Day Money Back' },
    { icon: Check, text: 'Cancel Anytime' },
  ]

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary animate-gradient" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      {/* Floating Particles */}
      <div className="absolute inset-0">
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
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Stop Losing $100K+
            <br />
            Every Year
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Join 15+ businesses already using AI to capture every customer call.
            <br />
            <span className="font-semibold">Setup in 7 days. See ROI in week one.</span>
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
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
            <Button variant="secondary" size="xl" className="group" href="tel:+15551234567">
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Call Now: (555) 123-4567
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center gap-2 text-white/90">
                <indicator.icon className="w-5 h-5" />
                <span className="font-medium">{indicator.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Small Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 text-white/80 text-sm"
          >
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-orange-300" />
              <span>3 businesses signed up today</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-300" />
              <span>Average setup time: 5.2 days</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
