'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glass?: boolean
}

export default function Card({ children, className, hover = true, glass = false }: CardProps) {
  const baseStyles = 'rounded-2xl p-8'
  const glassStyles = glass ? 'bg-white/10 backdrop-blur-md border border-white/20' : 'bg-white shadow-lg'
  const hoverStyles = hover ? 'hover:shadow-2xl hover:-translate-y-2' : ''

  return (
    <motion.div
      className={cn(baseStyles, glassStyles, hoverStyles, 'transition-all duration-300', className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
