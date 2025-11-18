'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp, Phone, Star, Users, DollarSign, Smile, ChevronLeft, ChevronRight } from 'lucide-react'
import { Quote } from 'lucide-react'

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: "ReceptAI has transformed our business. We went from missing 15-20 calls a week to capturing 100%. In the first month alone, we booked $47,000 in new appointments we would have lost. Best investment we've ever made.",
      metrics: [
        { icon: TrendingUp, text: '$150K+ additional revenue annually', color: 'text-green-600' },
        { icon: Phone, text: '100% call capture rate', color: 'text-blue-600' },
        { icon: Star, text: '5-star Google rating increase', color: 'text-yellow-600' },
      ],
      business: 'Phoenix HVAC Pro',
      location: 'Phoenix, AZ',
      owner: 'Michael Chen',
      role: 'Owner',
      initials: 'MC',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      quote: "As a dental clinic, every missed call is a missed patient. Since implementing ReceptAI, we've booked 300+ appointments automatically and our front desk team can actually focus on in-office patients. Game changer.",
      metrics: [
        { icon: Users, text: '300+ appointments booked monthly', color: 'text-purple-600' },
        { icon: DollarSign, text: '60% reduction in staffing costs', color: 'text-green-600' },
        { icon: Smile, text: 'Happier staff, better patient experience', color: 'text-pink-600' },
      ],
      business: 'Smile Dental Miami',
      location: 'Miami, FL',
      owner: 'Dr. Sarah Martinez',
      role: 'Owner',
      initials: 'SM',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      quote: "I was skeptical about AI answering our calls, but the voice is so natural that clients can't tell the difference. It's like having a professional receptionist who never takes a break, never gets sick, and costs a fraction of the price.",
      metrics: [
        { icon: DollarSign, text: '$3,200/month saved on receptionist', color: 'text-green-600' },
        { icon: Phone, text: 'After-hours bookings up 400%', color: 'text-blue-600' },
        { icon: TrendingUp, text: 'Scaled to 3 locations seamlessly', color: 'text-purple-600' },
      ],
      business: 'Luxe Salon Group',
      location: 'Los Angeles, CA',
      owner: 'Jessica Williams',
      role: 'CEO',
      initials: 'JW',
      gradient: 'from-pink-500 to-orange-600',
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-12 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
            Trusted By Businesses
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Across America
            </span>
          </h2>
          <p className="text-base lg:text-xl text-gray-600">
            Real results from real businesses
          </p>
        </motion.div>

        {/* Mobile: Carousel */}
        <div className="lg:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-3" />

              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                "{testimonials[currentIndex].quote}"
              </p>

              {/* Metrics */}
              <div className="space-y-2 mb-6">
                {testimonials[currentIndex].metrics.map((metric, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                    <metric.icon className={`w-4 h-4 ${metric.color} flex-shrink-0`} />
                    <span className="text-xs font-medium text-gray-700">{metric.text}</span>
                  </div>
                ))}
              </div>

              {/* Business Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                {/* Avatar */}
                <div className={`w-12 h-12 bg-gradient-to-br ${testimonials[currentIndex].gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-sm">{testimonials[currentIndex].initials}</span>
                </div>

                {/* Info */}
                <div>
                  <p className="font-bold text-gray-900 text-sm">{testimonials[currentIndex].owner}</p>
                  <p className="text-xs text-gray-600">{testimonials[currentIndex].role}</p>
                  <p className="text-xs font-semibold text-primary">{testimonials[currentIndex].business}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-primary/20 mb-4" />

                {/* Quote */}
                <p className="text-gray-700 text-lg leading-relaxed mb-8 flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Metrics */}
                <div className="space-y-3 mb-8">
                  {testimonial.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <metric.icon className={`w-5 h-5 ${metric.color} flex-shrink-0`} />
                      <span className="text-sm font-medium text-gray-700">{metric.text}</span>
                    </div>
                  ))}
                </div>

                {/* Business Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                  {/* Avatar */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                  </div>

                  {/* Info */}
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.owner}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm font-semibold text-primary">{testimonial.business}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
