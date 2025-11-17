'use client'

import { motion } from 'framer-motion'
import { PhoneOff, Users, Moon } from 'lucide-react'
import Card from './Card'

export default function ProblemSection() {
  const problems = [
    {
      icon: PhoneOff,
      title: '15-20 Calls Per Week',
      description: 'Every missed call is a lost customer. At $500-2,000 per service call, you\'re losing $150K+ annually.',
      stat: '$150K+ LOST',
      color: 'from-red-500 to-rose-600',
      shadowColor: 'shadow-red-500/50',
    },
    {
      icon: Users,
      title: 'Hours Wasted Daily',
      description: 'Your receptionist is drowning in calls, bookings, and paperwork. Paying $3K-5K/month for constant stress.',
      stat: '$50K+ IN COSTS',
      color: 'from-orange-500 to-amber-600',
      shadowColor: 'shadow-orange-500/50',
    },
    {
      icon: Moon,
      title: 'Zero Coverage',
      description: 'Nights, weekends, holidays - your competitors are capturing the customers you\'re missing.',
      stat: '24/7 BLEEDING',
      color: 'from-purple-500 to-violet-600',
      shadowColor: 'shadow-purple-500/50',
    },
  ]

  return (
    <section className="py-32 bg-gradient-to-br from-dark via-dark-lighter to-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            How Much Money Are You
            <br />
            <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Actually Losing?
            </span>
          </h2>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group"
            >
              <div className={`bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-2xl ${problem.shadowColor} hover:-translate-y-2`}>
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${problem.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <problem.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{problem.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {problem.description}
                </p>

                {/* Stat */}
                <div className={`inline-block px-6 py-3 bg-gradient-to-r ${problem.color} rounded-xl`}>
                  <p className="text-white font-bold text-xl">{problem.stat}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-2xl text-gray-300">
            That's over <span className="text-white font-bold">$200,000</span> walking out the door every single year.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
