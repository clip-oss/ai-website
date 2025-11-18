'use client'

import { motion } from 'framer-motion'
import { Phone, Calendar, MessageSquare, Database, HelpCircle, FileText, Volume2 } from 'lucide-react'
import Button from './Button'

interface AIReceptionistSectionProps {
  onWatchDemo: () => void
}

export default function AIReceptionistSection({ onWatchDemo }: AIReceptionistSectionProps) {
  const features = [
    {
      icon: Phone,
      title: 'Answers Every Call Instantly',
      description: 'Natural conversation, not robotic. Handles multiple calls simultaneously.',
    },
    {
      icon: Calendar,
      title: 'Books Appointments Automatically',
      description: 'Checks your calendar in real-time. Schedules directly. Sends confirmations.',
    },
    {
      icon: MessageSquare,
      title: 'Sends SMS Confirmations',
      description: 'Instant text messages to customers with all details.',
    },
    {
      icon: Database,
      title: 'Integrates With Your Tools',
      description: 'Google Calendar, Outlook, your CRM - seamless connections.',
    },
    {
      icon: HelpCircle,
      title: 'Handles Common Questions',
      description: 'Operating hours, pricing, directions - trained on your business.',
    },
    {
      icon: FileText,
      title: 'Records & Transcribes Everything',
      description: 'Full call recordings, transcripts, analytics dashboard.',
    },
  ]

  return (
    <section className="py-12 lg:py-32 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Meet Your AI
              </span>
              <br />
              <span className="text-gray-900">Receptionist</span>
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 lg:mb-12 leading-relaxed">
              Works 24/7. Never sleeps. Never misses a call.
              <br />
              <span className="font-semibold text-gray-900">Sounds completely human.</span>
            </p>

            {/* Features Grid - Show only 3 on mobile */}
            <div className="space-y-4 lg:space-y-6 mb-6 lg:mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`flex items-start gap-3 lg:gap-4 group ${index > 2 ? 'hidden lg:flex' : ''}`}
                >
                  <div className="w-10 lg:w-12 h-10 lg:h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 lg:w-6 h-5 lg:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm lg:text-base text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Audio Demo - HIDDEN ON MOBILE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="hidden lg:block bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20 mb-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <Volume2 className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-gray-900 mb-1">Hear how natural it sounds</p>
                  <p className="text-sm text-gray-600">Listen to a real AI conversation</p>
                </div>
                <Button variant="primary" size="md" onClick={onWatchDemo}>
                  Play Demo
                </Button>
              </div>
            </motion.div>

            <Button variant="primary" size="xl" className="w-full sm:w-auto" onClick={onWatchDemo}>
              See It In Action
            </Button>
          </motion.div>

          {/* Right Visual - Animated Phone Interface - HIDDEN ON MOBILE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            {/* Main Dashboard */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Live Dashboard</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-600">Active</span>
                </div>
              </div>

              {/* Conversation */}
              <div className="space-y-4 mb-6">
                <motion.div
                  className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-4 border-l-4 border-primary"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <p className="text-sm text-gray-600 mb-1">Customer:</p>
                  <p className="text-gray-900">"I need an HVAC repair ASAP"</p>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-4 border-l-4 border-secondary"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <p className="text-sm text-gray-600 mb-1">AI Receptionist:</p>
                  <p className="text-gray-900">"I'd be happy to help! Let me check our technician availability..."</p>
                </motion.div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-primary">47</p>
                  <p className="text-xs text-gray-600">Calls Today</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-green-600">32</p>
                  <p className="text-xs text-gray-600">Booked</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-purple-600">1.8s</p>
                  <p className="text-xs text-gray-600">Avg Response</p>
                </div>
              </div>
            </div>

            {/* Floating Success Notifications */}
            <motion.div
              className="absolute -top-6 -right-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-4 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="text-white font-bold">$4,850</p>
              <p className="text-white/90 text-sm">Booked Today</p>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-4 shadow-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <p className="text-white font-bold">100%</p>
              <p className="text-white/90 text-sm">Call Capture</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
