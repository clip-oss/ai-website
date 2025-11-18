'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { BarChart3, DollarSign, Star, Zap } from 'lucide-react'

function Counter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => {
    if (suffix === '/5') {
      return latest.toFixed(1)
    }
    if (prefix === '$' && suffix === 'M') {
      return latest.toFixed(1)
    }
    if (suffix === 's') {
      return latest.toFixed(1)
    }
    return Math.round(latest).toLocaleString()
  })
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const animation = animate(count, value, { duration: 2.5, ease: "easeOut" })
    return animation.stop
  }, [count, value])

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + latest + suffix
      }
    })
    return () => unsubscribe()
  }, [rounded, suffix, prefix])

  return <span ref={ref}>{prefix}0{suffix}</span>
}

export default function MetricsBar() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const metrics = [
    {
      icon: BarChart3,
      value: 2847,
      label: 'Calls answered today',
      color: 'from-blue-500 to-blue-600',
      prefix: '',
      suffix: '',
    },
    {
      icon: DollarSign,
      value: 2.1,
      label: 'Revenue captured this month',
      color: 'from-green-500 to-emerald-600',
      prefix: '$',
      suffix: 'M',
    },
    {
      icon: Star,
      value: 4.9,
      label: 'Average rating',
      color: 'from-yellow-500 to-orange-600',
      prefix: '',
      suffix: '/5',
    },
    {
      icon: Zap,
      value: 1.2,
      label: 'Average response time',
      color: 'from-purple-500 to-pink-600',
      prefix: '',
      suffix: 's',
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`${
        isSticky ? 'fixed top-20 left-0 right-0 z-40 shadow-2xl' : 'relative'
      } py-6 bg-white/70 backdrop-blur-xl border-y border-gray-200 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/50 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                className={`w-14 h-14 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{
                  boxShadow: [
                    '0 4px 6px rgba(0, 0, 0, 0.1)',
                    '0 8px 15px rgba(0, 0, 0, 0.2)',
                    '0 4px 6px rgba(0, 0, 0, 0.1)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <metric.icon className="w-7 h-7 text-white" />
              </motion.div>
              <div>
                <motion.p
                  className="text-2xl md:text-3xl font-bold text-gray-900"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  <Counter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                </motion.p>
                <p className="text-xs md:text-sm text-gray-600 font-medium">{metric.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
