import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Activity } from 'lucide-react'

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center p-6 mt-20 text-center">
        <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
          <Activity size={24} className="text-orange-500" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4 capitalize">
          partner model
        </h1>
        <p className="text-white/40 max-w-md mx-auto">
          This structural node is currently under active development. Our engineering team is finalizing the integration topology.
        </p>
      </div>
      <Footer />
    </main>
  )
}