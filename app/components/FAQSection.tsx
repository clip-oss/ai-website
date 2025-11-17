'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Will it sound robotic or fake?',
      answer: 'Not at all. ReceptAI uses advanced voice AI that sounds completely natural. Most customers can\'t tell they\'re speaking with AI. We can even customize the voice, accent, and personality to match your brand.',
    },
    {
      question: 'How fast can we get started?',
      answer: 'Setup takes 7 days from consultation to going live. We handle everything - you just need one 15-minute call with us to get started.',
    },
    {
      question: 'What if the AI doesn\'t understand my customers?',
      answer: 'We train your AI specifically on your business - services, pricing, common questions, industry terminology. It gets smarter over time. Plus, it can seamlessly transfer complex calls to your team.',
    },
    {
      question: 'Can it handle emergencies or urgent calls?',
      answer: 'Absolutely. You can configure priority routing rules. Emergency calls can be flagged and immediately forwarded to your on-call team with SMS alerts.',
    },
    {
      question: 'What if I\'m not satisfied?',
      answer: 'We offer a 30-day money-back guarantee. If you\'re not happy for any reason, we\'ll refund you completely. No questions asked.',
    },
    {
      question: 'Do I need special equipment or phone systems?',
      answer: 'No. ReceptAI works with your existing phone number. We handle all the technical setup. You just keep your current number and everything works seamlessly.',
    },
    {
      question: 'Can it integrate with my current systems?',
      answer: 'Yes. We integrate with 1000+ tools including Google Calendar, Outlook, Salesforce, HubSpot, Zoho, and most major CRMs. Custom integrations available for Enterprise plans.',
    },
    {
      question: 'How much does each call cost?',
      answer: 'All plans include generous minutes (500-2,000/month depending on tier). Additional minutes are just $0.10 each. Most clients never exceed their included minutes.',
    },
  ]

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Common
            </span>{' '}
            Questions
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-gray-50 hover:bg-gray-100 rounded-2xl p-6 transition-all duration-300 text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 flex-1">
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-white" />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 text-lg leading-relaxed mt-4 pt-4 border-t border-gray-200">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
