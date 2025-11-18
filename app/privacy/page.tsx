'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
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
            Privacy Policy
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ReceptAI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered receptionist and automation services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Information We Collect</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Register for our services</li>
              <li>Contact us for support or inquiries</li>
              <li>Book a demo or consultation</li>
              <li>Subscribe to our newsletter or marketing communications</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Name and contact information (email address, phone number, business address)</li>
              <li>Business information (company name, industry, size)</li>
              <li>Account credentials</li>
              <li>Payment and billing information</li>
              <li>Calendar and scheduling information</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Call and Communication Data</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you use our AI phone receptionist service, we collect and process:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Call recordings and transcriptions</li>
              <li>Phone numbers (caller and recipient)</li>
              <li>Call duration, time, and date</li>
              <li>SMS messages and confirmations</li>
              <li>Chat conversations and messages</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We automatically collect certain information when you visit, use, or navigate our website and services:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Device and browser information</li>
              <li>IP address and location data</li>
              <li>Usage data and analytics</li>
              <li>Cookies and tracking technologies</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>To provide, maintain, and improve our AI receptionist services</li>
              <li>To process and manage appointments and bookings</li>
              <li>To send SMS confirmations and notifications</li>
              <li>To train and improve our AI models for better service quality</li>
              <li>To process payments and billing</li>
              <li>To communicate with you about your account and services</li>
              <li>To provide customer support and respond to inquiries</li>
              <li>To send marketing and promotional communications (with your consent)</li>
              <li>To analyze usage patterns and improve user experience</li>
              <li>To comply with legal obligations and enforce our terms</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may share your information in the following circumstances:
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Service Providers</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We work with third-party service providers to help us deliver our services, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Cloud hosting and infrastructure providers</li>
              <li>Payment processors</li>
              <li>Calendar and scheduling platforms (Google Calendar, Outlook)</li>
              <li>CRM systems</li>
              <li>Analytics and monitoring services</li>
              <li>Communication platforms (SMS, email)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Business Transfers</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">Legal Requirements</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may disclose your information if required by law or in response to valid legal processes, such as:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Court orders or subpoenas</li>
              <li>Government or regulatory requests</li>
              <li>Protection of our legal rights</li>
              <li>Prevention of fraud or security threats</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and assessments</li>
              <li>Access controls and authentication</li>
              <li>Secure data centers and infrastructure</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your information for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Provide our services to you</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Improve our AI models and service quality</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Call recordings and transcriptions are typically retained for 90 days unless otherwise required by law or requested by you.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Objection:</strong> Object to certain processing activities</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To exercise these rights, please contact us at lorenzo@receptai.co
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <p className="text-gray-900 font-semibold mb-2">ReceptAI</p>
              <p className="text-gray-700">Email: lorenzo@receptai.co</p>
              <p className="text-gray-700">
                WhatsApp:{' '}
                <a
                  href="https://wa.me/37378093320?text=Hi!%20I%20have%20a%20question%20about%20your%20Privacy%20Policy"
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
