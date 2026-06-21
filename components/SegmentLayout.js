'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Database, ShieldCheck, Zap, Activity, Grid } from 'lucide-react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function SegmentLayout({
  title,
  definition,
  whatItDoes,
  whereItFits,
  systems,
  deliveryModel,
  security,
  ctaText
}) {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      <Navbar />

      {/* Hero / Definition */}
      <section className="pt-32 pb-16 px-6 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="section-tag mx-auto mb-6">
              <Zap size={10} />
              Platform Module
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-white/50 font-medium leading-relaxed max-w-3xl mx-auto">
              {definition}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What It Does (Grid) */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <Activity size={18} className="text-orange-500" />
            <h2 className="text-2xl font-bold tracking-tight">Functional Breakdown</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatItDoes.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 border border-white/5 hover:border-white/15 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5">
                  {item.icon || <Grid size={16} className="text-orange-400" />}
                </div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Where It Fits & Systems It Connects With */}
      <section className="py-20 px-6 bg-[#0D0D0D] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Where It Fits */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Database size={18} className="text-orange-500" /> Structural Positioning
            </h2>
            <div className="p-6 rounded-2xl border border-white/5 bg-[#111111]">
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {whereItFits}
              </p>
              <div className="space-y-3">
                {systems.map((sys, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-white/70">
                    <CheckCircle size={14} className="text-emerald-500" />
                    <span>{sys}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* White-Label Delivery Model */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Zap size={18} className="text-orange-500" /> White-Label Delivery
            </h2>
            <div className="p-6 rounded-2xl border border-orange-500/10 bg-orange-500/5">
              <p className="text-white/60 text-sm leading-relaxed">
                {deliveryModel}
              </p>
              <button className="mt-6 text-sm font-semibold text-orange-400 flex items-center gap-2 hover:text-orange-300 transition-colors">
                View Partner SLA <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security & Control */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ShieldCheck size={32} className="text-emerald-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-4">Zero-Retention Security Model</h2>
          <p className="text-white/40 text-sm leading-relaxed mb-8">
            {security}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['SOC 2 Type II', 'HIPAA Compliant', 'GDPR Ready', 'End-to-End Encryption'].map(badge => (
              <span key={badge} className="px-3 py-1.5 rounded border border-white/10 text-xs font-semibold text-white/50 tracking-wider uppercase">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Element */}
      <section className="py-24 px-6 border-t border-white/5 bg-gradient-to-b from-[#0B0B0B] to-[#111111] text-center">
        <h2 className="text-3xl font-bold mb-6">{ctaText || "Deploy This Module Today"}</h2>
        <p className="text-white/40 text-sm mb-8 max-w-lg mx-auto">
          Contact our enterprise engineering team to get a technical sandbox environment provisioned for your organization.
        </p>
        <button 
          className="btn-primary" 
          onClick={() => {
            const event = new CustomEvent('openAuthModal', { detail: { mode: 'signup' } })
            window.dispatchEvent(event)
          }}
        >
          Provision Workspace <ArrowRight size={16} />
        </button>
      </section>

      <Footer />
    </main>
  )
}
