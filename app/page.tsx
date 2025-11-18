'use client'

import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MetricsBar from './components/MetricsBar'
import ProblemSection from './components/ProblemSection'
import AIReceptionistSection from './components/AIReceptionistSection'
import ServicesGrid from './components/ServicesGrid'
import ServiceDetails from './components/ServiceDetails'
import ComparisonTable from './components/ComparisonTable'
import HowItWorks from './components/HowItWorks'
import PricingSection from './components/PricingSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ContactFormModal from './components/ContactFormModal'
import DemoModal from './components/DemoModal'

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero onWatchDemo={() => setIsDemoModalOpen(true)} />
      <MetricsBar />
      <ProblemSection />
      <AIReceptionistSection onWatchDemo={() => setIsDemoModalOpen(true)} />
      <ServicesGrid />
      <ServiceDetails />
      <ComparisonTable />
      <HowItWorks />
      <PricingSection onContactSales={() => setIsContactModalOpen(true)} />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
      <Footer />

      {/* Floating WhatsApp Button (mobile only) */}
      <FloatingWhatsApp />

      {/* Modals */}
      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </main>
  )
}
