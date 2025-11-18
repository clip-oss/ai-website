'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Play, Volume2 } from 'lucide-react'
import Button from './Button'

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
  type?: 'video' | 'audio'
}

export default function DemoModal({ isOpen, onClose, type = 'video' }: DemoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>

              {/* Content */}
              <div className="text-center">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {type === 'video' ? (
                    <Play className="w-10 h-10 text-white" fill="white" />
                  ) : (
                    <Volume2 className="w-10 h-10 text-white" />
                  )}
                </div>

                {/* Headline */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Want to see ReceptAI in action?
                </h2>

                {/* Description */}
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Book a quick 15-minute live demo and we'll show you everything:
                </p>

                {/* Benefits */}
                <ul className="text-left space-y-3 mb-8 max-w-md mx-auto">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">See the AI answer real calls in real-time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Watch automatic appointment booking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Get answers to all your questions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">See if ReceptAI is right for your business</span>
                  </li>
                </ul>

                {/* CTA */}
                <Button
                  variant="primary"
                  size="xl"
                  href="https://calendly.com/galateanulorenzo/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  Book Your Live Demo
                </Button>

                <p className="text-sm text-gray-500 mt-4">
                  No credit card required • 15 minutes • Free forever
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
