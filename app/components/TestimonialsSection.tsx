'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Phone, Star, Users, DollarSign, Smile } from 'lucide-react'
import { Quote } from 'lucide-react'

export default function TestimonialsSection() {
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

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Trusted By Businesses
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Across America
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Real results from real businesses
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
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
