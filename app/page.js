// Server Component — assembles all sections.
// Each section component has 'use client' where Framer Motion is needed.
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Industries from '@/components/Industries'
import WhyLuraLoop from '@/components/WhyLuraLoop'
import Architecture from '@/components/Architecture'
import Marketplace from '@/components/Marketplace'
import Security from '@/components/Security'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import AboutModal from '@/components/AboutModal'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      <Navbar />
      <Hero />
      <Industries />
      <WhyLuraLoop />
      <Architecture />
      <Marketplace />
      <Security />
      <CTA />
      <Footer />
      <AboutModal />
    </main>
  )
}
