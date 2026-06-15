import Navbar from '@/components/Navbar'
import Blog from '@/components/Blog'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import AboutModal from '@/components/AboutModal'

export const metadata = {
  title: 'The LuraLoop Engine — Inside AI Automation | Blog',
  description: 'Technical breakdowns, architecture deep-dives, and enterprise AI workflow case studies from the LuraLoop engineering team.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white flex flex-col">
      <Navbar />
      
      {/* Blog Container — Blog.js handles its own padding */}
      <div className="flex-1 pt-20">
        <Blog />
      </div>

      <CTA />
      <Footer />
      <AboutModal />
    </main>
  )
}
