'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, ShieldCheck, Zap, Activity, Grid } from 'lucide-react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function SegmentLayout({
  title,
  definition,
  capabilities,
  systemsConnected,
  deliveryModel,
  security,
  ctaText
}) {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      <Navbar />

      {/* ── Hero Definition ── */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-24 px-6 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,255,255,0.02) 0%, transparent 60%)' }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-5">Platform Module</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
              {title}
            </h1>
            <p className="text-base md:text-lg text-zinc-400 leading-relaxed tracking-wide max-w-2xl mx-auto">
              {definition}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Core Capabilities (Grid) ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-10">Core Capabilities</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl border border-white/5 bg-[#111111] p-7 hover:border-white/10 transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/6 flex items-center justify-center mb-5">
                  <Grid size={15} className="text-zinc-500" />
                </div>
                <h3 className="text-white font-semibold text-[15px] mb-2.5">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Systems Connected + White-Label ── */}
      <section className="py-24 px-6 bg-[#0A0A0A] border-y border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Systems Connected */}
          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-6">Systems It Connects With</p>
            <div className="rounded-xl border border-white/5 bg-[#111111] p-7">
              <div className="space-y-4">
                {systemsConnected.map((sys, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={14} className="text-zinc-500 shrink-0" />
                    <span className="text-zinc-300 text-sm">{sys}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* White-Label Delivery */}
          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-6">White-Label Delivery Model</p>
            <div className="rounded-xl border border-white/5 bg-[#111111] p-7">
              <p className="text-zinc-400 text-sm leading-relaxed">
                {deliveryModel}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Security & Control ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ShieldCheck size={28} className="text-zinc-500 mx-auto mb-5" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-4">Security & Control</p>
          <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            {security}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['SOC 2 Type II', 'HIPAA Compliant', 'GDPR Ready', 'End-to-End Encryption'].map(badge => (
              <span key={badge} className="px-3.5 py-1.5 rounded-lg border border-white/6 bg-white/[0.02] text-[11px] font-semibold text-zinc-500 tracking-wider uppercase">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 border-t border-white/5 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">{ctaText || 'Get Started'}</h2>
          <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
            Contact our enterprise engineering team to provision a technical sandbox environment for your organization.
          </p>
          <button
            className="inline-flex items-center gap-2 bg-white text-black px-7 py-3 rounded-lg font-semibold text-sm hover:scale-[1.02] hover:bg-zinc-100 transition-all duration-200"
            onClick={() => {
              const event = new CustomEvent('openAuthModal', { detail: { mode: 'signup' } })
              window.dispatchEvent(event)
            }}
          >
            {ctaText || 'Get Started'} <ArrowRight size={15} />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
