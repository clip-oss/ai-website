'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  const whatsappNumber = '37378093320'
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in ReceptAI")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 lg:hidden"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl">
        <MessageCircle className="w-7 h-7 text-white" fill="white" />
      </div>
      {/* Pulse animation */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75" />
    </motion.a>
  )
}
