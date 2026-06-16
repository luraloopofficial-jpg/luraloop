// Server Component — assembles all sections.
// Each section component has 'use client' where Framer Motion is needed.
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ForPartners from '@/components/ForPartners'
import Industries from '@/components/Industries'
import Architecture from '@/components/Architecture'
import DeliveryModel from '@/components/DeliveryModel'
import Security from '@/components/Security'
import SocialProof from '@/components/SocialProof'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import AboutModal from '@/components/AboutModal'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      <Navbar />
      <Hero />
      <TrustBar />
      <ForPartners />
      <Industries />
      <Architecture />
      <DeliveryModel />
      <Security />
      <SocialProof />
      <FAQ />
      <CTA />
      <Footer />
      <AboutModal />
    </main>
  )
}
