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
      // Only enable sticky on desktop (1024px+)
      if (window.innerWidth >= 1024) {
        setIsSticky(window.scrollY > 100)
      } else {
        setIsSticky(false)
      }
    }

    handleScroll() // Check on mount
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const metrics = [
    {
      icon: BarChart3,
      value: 2847,
      label: 'Calls today',
      color: 'from-blue-500 to-blue-600',
      prefix: '',
      suffix: '',
    },
    {
      icon: DollarSign,
      value: 2.1,
      label: 'Revenue this month',
      color: 'from-green-500 to-emerald-600',
      prefix: '$',
      suffix: 'M',
    },
    {
      icon: Star,
      value: 4.9,
      label: 'Avg rating',
      color: 'from-yellow-500 to-orange-600',
      prefix: '',
      suffix: '/5',
    },
    {
      icon: Zap,
      value: 1.2,
      label: 'Response time',
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
      className={`
        ${isSticky ? 'lg:fixed lg:top-20 lg:left-0 lg:right-0 lg:z-40 lg:shadow-2xl' : 'relative'}
        py-3 lg:py-6
        bg-white/70 backdrop-blur-xl
        border-y border-gray-200
        transition-all duration-300
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 lg:gap-4 p-2 lg:p-3 rounded-xl hover:bg-white/50 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                className={`w-10 h-10 lg:w-14 lg:h-14 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
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
                <metric.icon className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
              </motion.div>
              <div className="min-w-0 flex-1">
                <motion.p
                  className="text-lg lg:text-2xl xl:text-3xl font-bold text-gray-900 leading-tight"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  <Counter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                </motion.p>
                <p className="text-[10px] lg:text-xs xl:text-sm text-gray-600 font-medium leading-tight">{metric.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
