'use client'

import { useState } from 'react'
import { ChevronDown, Linkedin, Twitter, Facebook, MessageCircle, Mail } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const footerLinks = {
    services: [
      { name: 'AI Phone Receptionist', href: '/services/phone-receptionist' },
      { name: 'AI Website Chatbot', href: '/services/website-chatbot' },
      { name: 'Workflow Automation', href: '/services/workflow-automation' },
      { name: 'Lead Generation', href: '/services/lead-generation' },
      { name: 'View All Services', href: '/#services' },
    ],
    company: [
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Book Demo', href: 'https://calendly.com/galateanulorenzo/30min', external: true },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  }

  const socialLinks = [
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Facebook, href: '#', label: 'Facebook' },
  ]

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {/* Main Footer Content */}

        {/* Mobile: Accordion Layout */}
        <div className="lg:hidden space-y-4 mb-8">
          {/* Brand */}
          <div className="pb-4 border-b border-white/10">
            <Logo className="mb-3" />
            <p className="text-gray-400 text-sm mb-4">
              Never Miss a Call Again
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <a
                href="https://wa.me/37378093320?text=Hi!%20I'm%20interested%20in%20ReceptAI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +373 78 093 320</span>
              </a>
              <a
                href="mailto:lorenzo@receptai.co"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>lorenzo@receptai.co</span>
              </a>
            </div>

            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Accordion */}
          <div className="border-b border-white/10 pb-4">
            <button
              onClick={() => toggleSection('services')}
              className="w-full flex items-center justify-between text-left"
            >
              <h4 className="font-bold text-base">Services</h4>
              <ChevronDown className={`w-5 h-5 transition-transform ${openSection === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'services' && (
              <ul className="mt-3 space-y-2 pl-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Company Accordion */}
          <div className="border-b border-white/10 pb-4">
            <button
              onClick={() => toggleSection('company')}
              className="w-full flex items-center justify-between text-left"
            >
              <h4 className="font-bold text-base">Company</h4>
              <ChevronDown className={`w-5 h-5 transition-transform ${openSection === 'company' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'company' && (
              <ul className="mt-3 space-y-2 pl-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Legal Accordion */}
          <div className="pb-4">
            <button
              onClick={() => toggleSection('legal')}
              className="w-full flex items-center justify-between text-left"
            >
              <h4 className="font-bold text-base">Legal</h4>
              <ChevronDown className={`w-5 h-5 transition-transform ${openSection === 'legal' ? 'rotate-180' : ''}`} />
            </button>
            {openSection === 'legal' && (
              <ul className="mt-3 space-y-2 pl-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden lg:grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Logo className="mb-4" />
            <p className="text-gray-400 mb-6">
              Never Miss a Call Again
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href="https://wa.me/37378093320?text=Hi!%20I'm%20interested%20in%20ReceptAI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +373 78 093 320</span>
              </a>
              <a
                href="mailto:lorenzo@receptai.co"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>lorenzo@receptai.co</span>
              </a>
            </div>

            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 lg:pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 lg:gap-4">
            <p className="text-gray-400 text-xs lg:text-sm">
              © 2024 ReceptAI. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-xs lg:text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>

            <p className="text-gray-400 text-xs lg:text-sm">
              Made with ❤️ for service businesses
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
