'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Activity, Users, ArrowUpRight, Microscope } from 'lucide-react'

const metrics = [
  { value: '99.9%', label: 'Pipeline Uptime', sub: 'Across South Indian enterprise nodes' },
  { value: '10K+', label: 'Monthly Interactions', sub: 'Processed with zero data persistence' },
  { value: '48hr', label: 'Deployment SLA', sub: 'From contract to live workflow' },
  { value: '2x', label: 'Operational Efficiency', sub: 'Average gain across Healthcare pilots' },
]

const partnerTypes = [
  { label: 'Healthcare Networks', tier: 'Tier 1 Pilot' },
  { label: 'EdTech Platforms', tier: 'Growth Partner' },
  { label: 'Real Estate Groups', tier: 'Enterprise Node' },
  { label: 'IT Consultancies', tier: 'White-Label' },
  { label: 'E-Commerce Brands', tier: 'Automation Partner' },
  { label: 'B2B SaaS Companies', tier: 'API Integration' },
]

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255,107,0,0.05) 0%, transparent 60%)' }}
      />
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-tag justify-center"
          >
            <Activity size={10} />
            Pilot Execution Metrics
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title text-center"
          >
            Enterprise Proof <span className="gradient-text">at Scale</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 mt-4 text-sm max-w-md mx-auto"
          >
            Live performance benchmarks from active enterprise deployment nodes across South Indian technology centers including Kochi, Chennai, and Hyderabad.
          </motion.p>
        </div>

        {/* Metric Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 text-center card-hover"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">
                <span className="gradient-text">{m.value}</span>
              </div>
              <p className="text-white/70 text-sm font-semibold mb-1">{m.label}</p>
              <p className="text-white/30 text-xs leading-tight">{m.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Partner Type Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <p className="text-center text-white/25 text-xs font-semibold uppercase tracking-widest mb-6">
            Active Enterprise Partner Categories
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {partnerTypes.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="glass rounded-xl p-4 text-center border border-white/5 hover:border-orange-500/20 transition-colors duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-orange-500/8 border border-orange-500/15 flex items-center justify-center mx-auto mb-3">
                  <Users size={14} className="text-orange-400/70" />
                </div>
                <p className="text-white/70 text-xs font-semibold leading-tight mb-1">{p.label}</p>
                <p className="text-orange-400/50 text-[9px] font-medium uppercase tracking-wide">{p.tier}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Founder & Lab Footprint */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border border-white/6 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between"
        >
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: 'rgba(255,107,0,0.1)', border: '1px solid rgba(255,107,0,0.2)' }}
            >
              <Microscope size={20} className="text-orange-400" />
            </div>
            <div>
              <p className="text-white/80 text-sm font-semibold mb-1">LuraLoop R&D Lab</p>
              <p className="text-white/35 text-xs leading-relaxed max-w-lg">
                Our internal research lab continuously monitors frontier AI model releases from OpenAI, Anthropic, and Google DeepMind — engineering upstream architectural enhancements into our partner white-label nodes on an hourly basis.
              </p>
            </div>
          </div>
          <a
            href="#footer"
            id="social-proof-rd-link"
            onClick={e => { e.preventDefault(); document.getElementById('footer-rd-trigger')?.click() }}
            className="shrink-0 flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors group"
          >
            <TrendingUp size={14} />
            View R&D Intelligence Hub
            <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
