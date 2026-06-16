'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Lock, UserCheck, ExternalLink, Server, Database } from 'lucide-react'

const trustCards = [
  {
    icon: Lock,
    title: 'Zero-Retention Architecture',
    desc: 'Client and end-user data is processed ephemerally and never persisted to disk or any external database.',
    deployModel: 'Stateless compute model — each request processed independently with no session memory carried forward.',
    retention: 'All data cleared on session termination. No telemetry, no logs, no residual data footprint on LuraLoop infrastructure.',
  },
  {
    icon: Zap,
    title: 'System-Aligned Processing',
    desc: 'LuraLoop augments existing HMS, ERP, CRM, and LMS environments via secure API adapters — no rip-and-replace required.',
    deployModel: 'Hybrid isolation layer — compute runs on dedicated regional nodes with full client system separation.',
    retention: 'All data exchanged with client systems in real-time via encrypted API calls. LuraLoop retains no copies.',
  },
  {
    icon: UserCheck,
    title: 'Role-Aware Access Isolation',
    desc: 'Every agent deployment operates within strictly defined permission scopes mapped to the client\'s existing access governance model.',
    deployModel: 'Zero Trust Architecture — every API call and data access independently authenticated and scoped per request.',
    retention: 'No cross-tenant data paths. Each partner deployment operates in complete isolation from other client environments.',
  },
  {
    icon: ShieldCheck,
    title: 'Client Data Ownership',
    desc: 'The partner agency and their end client retain 100% ownership of all workflow data, model outputs, and interaction records.',
    deployModel: 'Private cloud and on-premise execution node deployments available for regulated industries requiring full data sovereignty.',
    retention: 'LuraLoop never claims rights to client data. Architecture designed for HIPAA-aligned and GDPR-conscious environments.',
  },
]

const compliance = [
  {
    label: 'HIPAA-Aligned Design',
    detail: 'Healthcare data flows processed under ephemeral architecture designed for HIPAA-conscious environments. No PHI stored at rest.',
  },
  {
    label: 'GDPR-Conscious Workflows',
    detail: 'Built to support right-to-erasure requirements. Zero personal data retained after session termination.',
  },
  {
    label: 'SOC 2 Aligned Controls',
    detail: 'Operational security controls structured in alignment with SOC 2 Type II trust principles.',
  },
  {
    label: 'ISO 27001 Framework',
    detail: 'Information security management practices aligned with ISO 27001 principles across all data handling processes.',
  },
  {
    label: 'Zero Trust Architecture',
    detail: 'Every agent action and API call independently verified and scoped in real-time. No implicit trust at any layer.',
  },
]

function ShieldSVG() {
  return (
    <div role="img" aria-label="Security shield" className="relative flex items-center justify-center">
      {[220, 180, 140].map((size, i) => (
        <div key={i} className="absolute rounded-full" style={{
          width: size, height: size,
          background: `radial-gradient(circle, rgba(255,107,0,${0.03 + i * 0.015}) 0%, transparent 70%)`,
          border: `1px solid rgba(255,107,0,${0.05 + i * 0.03})`,
          animation: `shieldPulse ${3 + i * 0.5}s ease-in-out infinite`,
          animationDelay: `${i * 0.5}s`,
        }} />
      ))}
      <svg width="110" height="130" viewBox="0 0 120 140" fill="none" className="shield-glow relative z-10">
        <path d="M60 8L16 26V62C16 92 36 118 60 128C84 118 104 92 104 62V26L60 8Z" fill="url(#sg)" stroke="url(#ss)" strokeWidth="2" />
        <defs>
          <linearGradient id="sg" x1="60" y1="8" x2="60" y2="128" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(255,107,0,0.25)" />
            <stop offset="100%" stopColor="rgba(255,107,0,0.04)" />
          </linearGradient>
          <linearGradient id="ss" x1="60" y1="8" x2="60" y2="128" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF6B00" />
            <stop offset="100%" stopColor="rgba(255,107,0,0.15)" />
          </linearGradient>
        </defs>
        <rect x="48" y="52" width="24" height="18" rx="3" fill="rgba(255,107,0,0.25)" stroke="rgba(255,107,0,0.5)" strokeWidth="1.5" />
        <path d="M54 52V46C54 42.7 56.7 40 60 40C63.3 40 66 42.7 66 46V52" stroke="rgba(255,107,0,0.65)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="60" cy="61" r="3" fill="#FF6B00" />
      </svg>
    </div>
  )
}

export default function Security() {
  return (
    <section id="security" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(255,107,0,0.025) 50%, transparent 100%)' }} />
      <div className="absolute inset-0 grid-overlay opacity-25 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="section-tag justify-center">
            Security &amp; Data Governance
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-title text-center">
            Built on <span className="gradient-text">Zero-Retention</span> Principles
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-white/35 mt-4 text-sm max-w-lg mx-auto leading-relaxed">
            Enterprise-grade security controls at every layer. Your clients&apos; data is processed in real-time and never persisted — making LuraLoop safe to deploy across regulated industries.
          </motion.p>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-16">
          <motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.75 }} className="shrink-0">
            <ShieldSVG />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
            {trustCards.map((card, i) => (
              <motion.div
                key={i}
                id={`security-${card.title.toLowerCase().replace(/\s+/g, '-')}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ delay: i * 0.09, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 flex flex-col gap-4 card-hover"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(255,107,0,0.09)', border: '1px solid rgba(255,107,0,0.2)', boxShadow: '0 0 12px rgba(255,107,0,0.12)' }}>
                    <card.icon size={16} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{card.title}</h3>
                    <p className="text-white/38 text-xs leading-relaxed">{card.desc}</p>
                  </div>
                </div>
                <div className="space-y-1.5 pt-1 border-t border-white/5">
                  <div className="flex items-start gap-2">
                    <Server size={9} className="text-orange-500/50 mt-0.5 shrink-0" />
                    <p className="text-white/25 text-[10px] leading-relaxed">{card.deployModel}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Database size={9} className="text-orange-500/50 mt-0.5 shrink-0" />
                    <p className="text-white/25 text-[10px] leading-relaxed">{card.retention}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Compliance Cards */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
          {compliance.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.06 }}
              className="glass rounded-xl p-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                <span className="text-white/65 text-xs font-semibold">{item.label}</span>
              </div>
              <p className="text-white/28 text-[10px] leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Center CTA */}
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="flex justify-center">
          <a href="mailto:luraloop.official@gmail.com?subject=Trust Center &amp; Data Governance Request" id="trust-center-link"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-orange-500/22 bg-orange-500/7 text-orange-400 text-sm font-medium hover:border-orange-500/45 hover:bg-orange-500/10 transition-all duration-200">
            <ShieldCheck size={13} />
            Request LuraLoop Data Governance Documentation
            <ExternalLink size={11} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
