'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-white/90">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-lg max-w-none"
        >
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms of Service ("Terms") govern your access to and use of ReceptAI's services, including our AI phone receptionist, website chatbot, workflow automation, and lead generation services (collectively, the "Services").
            </p>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our Services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Description</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ReceptAI provides AI-powered business automation services, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li><strong>AI Phone Receptionist:</strong> 24/7 automated call answering, appointment booking, and customer service</li>
              <li><strong>AI Website Chatbot:</strong> Intelligent visitor engagement and lead qualification</li>
              <li><strong>Workflow Automation:</strong> Business process automation and integration</li>
              <li><strong>Lead Generation:</strong> Automated lead capture, qualification, and nurturing</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Account Registration and Security</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Account Creation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              To use our Services, you must:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and promptly update your account information</li>
              <li>Be at least 18 years of age</li>
              <li>Have the legal authority to enter into these Terms</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Account Security</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized access or security breach</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing and Payment</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Subscription Plans</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer various subscription plans with different features and pricing:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Starter: From $697/month</li>
              <li>Professional: From $997/month</li>
              <li>Enterprise: Custom pricing</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Payment Terms</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Payments are billed monthly or annually in advance</li>
              <li>All fees are non-refundable except as required by law or stated in our refund policy</li>
              <li>We accept major credit cards and other payment methods as displayed</li>
              <li>You authorize us to charge your payment method for all fees incurred</li>
              <li>Annual subscriptions receive a 20% discount compared to monthly billing</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Price Changes</h3>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to change our pricing at any time. Price changes will be communicated with at least 30 days' notice and will apply at the start of your next billing cycle.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Money-Back Guarantee</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer a 30-day money-back guarantee for new customers:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>You may request a full refund within 30 days of your initial purchase</li>
              <li>The guarantee applies only to your first subscription</li>
              <li>To request a refund, contact us at lorenzo@receptai.co</li>
              <li>Refunds are processed within 5-10 business days</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Usage and Limitations</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Fair Use Policy</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Services are subject to fair use limitations:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Monthly minute allocations vary by plan (500, 1000, or 2000 minutes included)</li>
              <li>Overage charges apply for usage beyond included minutes</li>
              <li>Excessive or abusive use may result in service suspension</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Prohibited Uses</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may not use our Services to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon intellectual property rights</li>
              <li>Transmit harmful, fraudulent, or deceptive content</li>
              <li>Spam, harass, or abuse others</li>
              <li>Reverse engineer or attempt to extract our AI models</li>
              <li>Use the Services for illegal telemarketing or robocalling</li>
              <li>Interfere with or disrupt the Services</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cancellation and Termination</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Your Right to Cancel</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may cancel your subscription at any time:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Cancellation takes effect at the end of your current billing period</li>
              <li>You will continue to have access until the end of the paid period</li>
              <li>No refunds for partial months (except during the 30-day guarantee period)</li>
              <li>Your data will be retained for 90 days after cancellation</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Our Right to Terminate</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may suspend or terminate your access if:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>You violate these Terms</li>
              <li>Your payment fails or account is past due</li>
              <li>You engage in fraudulent or illegal activity</li>
              <li>We are required to do so by law</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All rights, title, and interest in the Services, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Software, AI models, and technology</li>
              <li>Trademarks, logos, and brand assets</li>
              <li>Content, documentation, and materials</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              remain the exclusive property of ReceptAI. You are granted a limited, non-exclusive, non-transferable license to use the Services solely for your business purposes.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Your Content</h3>
            <p className="text-gray-700 leading-relaxed">
              You retain ownership of your data and content. By using our Services, you grant us a license to use your content solely to provide and improve our Services, including training our AI models.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Warranties and Disclaimers</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Service Availability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we strive for 99.9% uptime:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>We do not guarantee uninterrupted or error-free service</li>
              <li>Maintenance windows may be scheduled with advance notice</li>
              <li>We are not liable for service interruptions beyond our control</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">AI Accuracy</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our AI Services are designed to be highly accurate but:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>We cannot guarantee 100% accuracy in all conversations</li>
              <li>You are responsible for reviewing and monitoring AI interactions</li>
              <li>Critical decisions should be reviewed by human staff</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Disclaimer</h3>
            <p className="text-gray-700 leading-relaxed uppercase">
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed uppercase mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, RECEPTAI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
            <p className="text-gray-700 leading-relaxed uppercase">
              OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify and hold harmless ReceptAI from any claims, damages, losses, liabilities, and expenses arising from your use of the Services, violation of these Terms, or infringement of any third-party rights.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Informal Resolution</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Before filing a claim, you agree to contact us to seek informal resolution of the dispute.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Arbitration</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Any disputes not resolved informally shall be settled by binding arbitration in accordance with the rules of the American Arbitration Association.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Class Action Waiver</h3>
            <p className="text-gray-700 leading-relaxed">
              You agree to bring claims only in your individual capacity and not as part of any class or representative action.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may modify these Terms at any time. Material changes will be communicated:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>By email to your registered email address</li>
              <li>By posting on our website with updated date</li>
              <li>At least 30 days before taking effect</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Continued use of the Services after changes take effect constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Miscellaneous</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Entire Agreement</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms, along with our Privacy Policy, constitute the entire agreement between you and ReceptAI.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Severability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If any provision is found unenforceable, the remaining provisions will remain in effect.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">No Waiver</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our failure to enforce any right or provision does not constitute a waiver of that right.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Assignment</h3>
            <p className="text-gray-700 leading-relaxed">
              You may not assign these Terms without our consent. We may assign our rights and obligations at any time.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <p className="text-gray-900 font-semibold mb-2">ReceptAI</p>
              <p className="text-gray-700">Email: lorenzo@receptai.co</p>
              <p className="text-gray-700">
                WhatsApp:{' '}
                <a
                  href="https://wa.me/37378093320?text=Hi!%20I%20have%20a%20question%20about%20your%20Terms%20of%20Service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  +373 78 093 320
                </a>
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  )
}
