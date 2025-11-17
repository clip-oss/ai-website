'use client'

import { Phone, Sparkles } from 'lucide-react'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Phone className="w-8 h-8 text-primary" strokeWidth={2} />
        <Sparkles className="w-4 h-4 text-secondary absolute -top-1 -right-1 animate-pulse" />
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        ReceptAI
      </span>
    </div>
  )
}
