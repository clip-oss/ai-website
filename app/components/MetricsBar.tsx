'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { BarChart3, DollarSign, Star, Zap } from 'lucide-react'

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const animation = animate(count, value, { duration: 2 })
    return animation.stop
  }, [count, value])

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toLocaleString() + suffix
      }
    })
    return () => unsubscribe()
  }, [rounded, suffix])

  return <span ref={ref}>0{suffix}</span>
}

export default function MetricsBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-8 bg-white/50 backdrop-blur-lg border-y border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                <Counter value={2847} />
              </p>
              <p className="text-sm text-gray-600">Calls today</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                $<Counter value={2.1} />M
              </p>
              <p className="text-sm text-gray-600">Revenue this month</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                <Counter value={4.9} suffix="/5" />
              </p>
              <p className="text-sm text-gray-600">Average rating</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                <Counter value={1.2} suffix="s" />
              </p>
              <p className="text-sm text-gray-600">Response time</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
