'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    companySize: '',
    message: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link with form data
    const subject = encodeURIComponent(`Enterprise Inquiry from ${formData.company}`)
    const body = encodeURIComponent(`
Name: ${formData.fullName}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone || 'Not provided'}
Company Size: ${formData.companySize}

Message:
${formData.message}
    `.trim())

    const mailtoLink = `mailto:lorenzo@receptai.co?subject=${subject}&body=${body}`
    window.location.href = mailtoLink

    // Show success message
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      onClose()
      setFormData({
        fullName: '',
        email: '',
        company: '',
        phone: '',
        companySize: '',
        message: ''
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-primary to-secondary p-6 rounded-t-3xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Contact Sales</h2>
                    <p className="text-white/90 mt-1">Let's discuss your enterprise needs</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              {/* Success Message */}
              {showSuccess && (
                <div className="mx-6 mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <p className="text-green-800 font-semibold text-center">
                    ✓ Message Sent! We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Work Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your Company Inc."
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Company Size */}
                <div>
                  <label htmlFor="companySize" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Size *
                  </label>
                  <select
                    id="companySize"
                    name="companySize"
                    required
                    value={formData.companySize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors bg-white"
                  >
                    <option value="">Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="10-50">10-50 employees</option>
                    <option value="50-100">50-100 employees</option>
                    <option value="100-500">100-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>

                <p className="text-sm text-gray-500 text-center">
                  We typically respond within 24 hours
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
