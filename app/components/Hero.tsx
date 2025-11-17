'use client'

import { motion } from 'framer-motion'
import { Check, Play, Phone, Calendar, MessageSquare, CheckCircle2 } from 'lucide-react'
import Button from './Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-secondary/20 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
              Never Miss Another
            </span>
            <br />
            <span className="text-gray-900">Customer Call</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            AI receptionist that works 24/7. Book appointments automatically.
            <br className="hidden md:block" />
            <span className="font-semibold text-gray-900">Save $100K+ annually.</span> Setup in 7 days.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button variant="primary" size="xl">
              Book Free Demo
            </Button>
            <Button variant="secondary" size="xl">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-gray-600">
              <Check className="w-5 h-5 text-green-500" />
              <span>2,500+ Calls Answered</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Check className="w-5 h-5 text-green-500" />
              <span>15+ Happy Businesses</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Check className="w-5 h-5 text-green-500" />
              <span>99.9% Uptime</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative"
        >
          {/* Main Phone Mockup */}
          <div className="relative z-10 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-700">
            <div className="space-y-4">
              {/* Incoming Call */}
              <motion.div
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Incoming Call</p>
                  <p className="text-gray-300 text-sm">New customer inquiry</p>
                </div>
              </motion.div>

              {/* AI Processing */}
              <motion.div
                className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-4 border border-primary/30"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-white text-sm font-medium">AI Processing...</p>
                </div>
                <p className="text-gray-300 text-sm">
                  "Hi! I'd like to book an appointment for HVAC service next Tuesday."
                </p>
              </motion.div>

              {/* Booking Confirmed */}
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-green-500/50"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <Calendar className="w-10 h-10 text-green-400" />
                  <div>
                    <p className="text-white font-semibold flex items-center gap-2">
                      Booking Confirmed
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                    </p>
                    <p className="text-gray-300 text-sm">Tuesday, 2:00 PM</p>
                  </div>
                </div>
              </motion.div>

              {/* SMS Sent */}
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-blue-500/50"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-10 h-10 text-blue-400" />
                  <div>
                    <p className="text-white font-semibold">SMS Confirmation Sent</p>
                    <p className="text-gray-300 text-sm">To: (555) 123-4567</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute -top-6 -right-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl p-4 shadow-xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <p className="text-white font-bold text-2xl">24/7</p>
            <p className="text-white/90 text-sm">Always On</p>
          </motion.div>

          <motion.div
            className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-4 shadow-xl"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          >
            <p className="text-white font-bold text-2xl">$150K+</p>
            <p className="text-white/90 text-sm">Avg. Saved</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}
