'use client'

import { useState } from 'react'
import { Activity, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const RdModal = dynamic(() => import('./RdModal'), { ssr: false })

export default function PlatformCapabilities() {
  const [showRd, setShowRd] = useState(false)

  return (
    <section id="platform" className="py-24 bg-transparent border-y border-white/5 relative overflow-hidden flex justify-center items-center">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(234,88,12,0.04) 0%, transparent 35%)' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/10 to-transparent" />
      
      <div className="max-w-2xl mx-auto px-6 relative z-10 w-full flex justify-center">
        <motion.button
          onClick={() => setShowRd(true)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group text-left w-full max-w-lg rounded-2xl border border-white/10 bg-[#141414] p-8 transition-all duration-300 hover:border-orange-500/30 hover:bg-[#181818] hover:shadow-[0_0_30px_rgba(255,107,0,0.05)] cursor-pointer flex flex-col items-center text-center relative overflow-hidden"
        >
          {/* Subtle gradient glow inside the card on hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex-shrink-0 rounded-xl border border-white/8 bg-white/4 p-4 mb-5 group-hover:scale-110 group-hover:border-orange-500/20 transition-all duration-300">
              <Activity className="text-orange-500" size={24} />
            </div>
            
            <span className="inline-block rounded border border-orange-500/20 bg-orange-500/10 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-orange-400 mb-4">
              Live Intelligence Hub
            </span>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
              R&amp;D Intelligence Hub
            </h2>
            
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Real-time ecosystem monitoring and dynamic integration architecture for deploying advanced reasoning agents across the enterprise. Explore the frontier platforms powering LuraLoop.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {['GPT-5', 'Claude', 'Gemini', 'Llama', 'DeepSeek'].map((model) => (
                <span key={model} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
                  {model}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-2 text-sm font-semibold text-white/50 group-hover:text-orange-400 transition-colors">
              <span>Explore Architecture &amp; Index</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.button>
      </div>

      {showRd && <RdModal onClose={() => setShowRd(false)} />}
    </section>
  )
}
