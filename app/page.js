export const metadata = {
  title: 'LuraLoop | Enterprise AI Automation & White-Label Infrastructure',
  description: 'Deploy role-specific AI employees, multi-agent infrastructure, and automated business workflows under a secure, white-label enterprise partner delivery model.',
  alternates: { canonical: 'https://luraloop.vercel.app' },
  openGraph: {
    title: 'LuraLoop | Enterprise AI Automation & White-Label Infrastructure',
    description: 'Deploy role-specific AI employees, multi-agent infrastructure, and automated business workflows under a secure, white-label enterprise partner delivery model.',
    url: 'https://luraloop.vercel.app',
    siteName: 'LuraLoop',
    images: [{ url: 'https://luraloop.vercel.app/og-default.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LuraLoop | Enterprise AI Automation & White-Label Infrastructure',
    description: 'Deploy role-specific AI employees, multi-agent infrastructure, and automated business workflows under a secure, white-label enterprise partner delivery model.',
    images: ['https://luraloop.vercel.app/og-default.jpg'],
  },
};

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
