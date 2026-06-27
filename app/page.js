// Server Component — assembles all sections.
// Each section component has 'use client' where Framer Motion is needed.
import Hero from '@/components/Hero'
import Architecture from '@/components/Architecture'
import ForPartners from '@/components/ForPartners'
import PlatformCapabilities from '@/components/PlatformCapabilities'
import DeliveryModel from '@/components/DeliveryModel'
import Security from '@/components/Security'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import AboutModal from '@/components/AboutModal'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      <Hero />
      <Architecture />
      <ForPartners />
      <PlatformCapabilities />
      <DeliveryModel />
      <Security />
      <CTA />
      <Footer />
      <AboutModal />
    </main>
  )
}
