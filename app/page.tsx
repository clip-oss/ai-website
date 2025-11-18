import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MetricsBar from './components/MetricsBar'
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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MetricsBar />
      <ProblemSection />
      <AIReceptionistSection />
      <ServicesGrid />
      <ComparisonTable />
      <HowItWorks />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
