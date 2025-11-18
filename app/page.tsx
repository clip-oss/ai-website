'use client'

import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import AIReceptionistSection from './components/AIReceptionistSection'
import ServicesGrid from './components/ServicesGrid'
import ComparisonTable from './components/ComparisonTable'
import HowItWorks from './components/HowItWorks'
import PricingSection from './components/PricingSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import DemoModal from './components/DemoModal'

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero onWatchDemo={() => setIsDemoModalOpen(true)} />
      <ProblemSection />
      <AIReceptionistSection onWatchDemo={() => setIsDemoModalOpen(true)} />
      <ServicesGrid />
      <ComparisonTable />
      <HowItWorks />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
      <Footer />

      {/* Floating WhatsApp Button (mobile only) */}
      <FloatingWhatsApp />

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </main>
  )
}
