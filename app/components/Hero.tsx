'use client'

import { motion } from 'framer-motion'
import { Check, Play, Phone, Calendar, MessageSquare, CheckCircle2, Sparkles } from 'lucide-react'
import Button from './Button'

interface HeroProps {
  onWatchDemo: () => void
}

export default function Hero({ onWatchDemo }: HeroProps) {
  // Generate floating particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 4,
  }))

  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Animated Background with slower transitions */}
      <div className="absolute inset-0 overflow-hidden hidden lg:block">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-secondary/20 to-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [-20, -60, -20],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          {/* Headline - 20% larger with drop shadow */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-9xl font-bold mb-4 lg:mb-6 leading-[1.1]"
            style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
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
            className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 lg:mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            AI receptionist that works 24/7. Book appointments automatically.
            <br className="hidden md:block" />
            <span className="font-semibold text-gray-900">Save $100K+ annually.</span> Setup in 7 days.
          </motion.p>

          {/* CTAs - Enhanced with glow */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-12 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(37, 99, 235, 0.3)',
                  '0 0 40px rgba(139, 92, 246, 0.5)',
                  '0 0 20px rgba(37, 99, 235, 0.3)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="rounded-xl"
            >
              <motion.a
                href="https://calendly.com/galateanulorenzo/30min"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 lg:px-12 py-4 lg:py-5 text-lg lg:text-xl font-semibold rounded-xl bg-gradient-to-r from-primary to-secondary text-white shadow-2xl hover:shadow-primary/50 transition-all duration-300 inline-block text-center"
              >
                Book Free Demo
              </motion.a>
            </motion.div>

            <motion.button
              onClick={onWatchDemo}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden lg:flex px-10 py-5 text-xl font-semibold rounded-xl bg-white/80 backdrop-blur-md text-gray-900 border-2 border-white/40 hover:bg-white hover:border-gray-300 transition-all duration-300 items-center justify-center gap-2 shadow-lg"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap gap-4 lg:gap-6 justify-center lg:justify-start text-xs lg:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-gray-600">
              <Check className="w-4 lg:w-5 h-4 lg:h-5 text-green-500" />
              <span>24/7 Availability</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Check className="w-4 lg:w-5 h-4 lg:h-5 text-green-500" />
              <span>7-Day Setup</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Check className="w-4 lg:w-5 h-4 lg:h-5 text-green-500" />
              <span>30-Day Money Back</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Visual - Enhanced - HIDDEN ON MOBILE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative hidden lg:block"
        >
          {/* Glow effect around phone */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />

          {/* Main Phone Mockup */}
          <div className="relative z-10 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-700">
            <div className="space-y-4">
              {/* Incoming Call */}
              <motion.div
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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
                animate={{ scale: [1, 1.01, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-white text-sm font-medium">AI Processing...</p>
                </div>
                <p className="text-gray-300 text-sm">
                  "Hi! I'd like to book an appointment for HVAC service next Tuesday."
                </p>
              </motion.div>

              {/* Booking Confirmed - POP MORE */}
              <motion.div
                className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-2xl p-4 border-2 border-green-400/60 shadow-lg shadow-green-500/20"
                animate={{
                  y: [0, -5, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    <Calendar className="w-10 h-10 text-green-300" />
                  </motion.div>
                  <div>
                    <p className="text-white font-bold flex items-center gap-2">
                      Booking Confirmed
                      <CheckCircle2 className="w-5 h-5 text-green-300" />
                    </p>
                    <p className="text-green-200 text-sm font-semibold">Tuesday, 2:00 PM</p>
                  </div>
                </div>
              </motion.div>

              {/* SMS Sent - POP MORE */}
              <motion.div
                className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md rounded-2xl p-4 border-2 border-blue-400/60 shadow-lg shadow-blue-500/20"
                animate={{
                  y: [0, -5, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    <MessageSquare className="w-10 h-10 text-blue-300" />
                  </motion.div>
                  <div>
                    <p className="text-white font-bold">SMS Confirmation Sent</p>
                    <p className="text-blue-200 text-sm font-semibold">To: (555) 123-4567</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Floating Elements - Enhanced */}
          <motion.div
            className="absolute -top-6 -right-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl p-4 shadow-2xl"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="absolute top-1 right-1 w-4 h-4 text-white/80" />
            <p className="text-white font-bold text-2xl">24/7</p>
            <p className="text-white/90 text-sm">Always On</p>
          </motion.div>

          <motion.div
            className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-4 shadow-2xl"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -5, 0, 5, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 2.5, ease: "easeInOut" }}
          >
            <Sparkles className="absolute top-1 right-1 w-4 h-4 text-white/80" />
            <p className="text-white font-bold text-2xl">$150K+</p>
            <p className="text-white/90 text-sm">Avg. Saved</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - HIDDEN ON MOBILE */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
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
