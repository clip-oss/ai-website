'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  onClick?: () => void
  href?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  href
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2'

  const variants = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-2xl hover:shadow-primary/50 hover:scale-105',
    secondary: 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 hover:border-white/40',
    ghost: 'text-gray-600 hover:text-primary hover:bg-primary/5'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  }

  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </Component>
  )
}
