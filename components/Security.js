'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Lock, UserCheck } from 'lucide-react'

const highlights = [
  {
    icon: ShieldCheck,
    title: 'No Permanent Storage',
    desc: 'Data is never written to disk or retained in any database. Pure ephemeral processing.',
  },
  {
    icon: Zap,
    title: 'Real-Time Processing',
    desc: 'All AI operations happen in-flight. Responses delivered instantly, data gone immediately.',
  },
  {
    icon: Lock,
    title: 'End-To-End Security',
    desc: 'Military-grade TLS 1.3 encryption from user to response. Zero interception surface.',
  },
  {
    icon: UserCheck,
    title: '100% Data Ownership',
    desc: 'You own your data, your workflows, your outcomes. We are just the intelligence layer.',
  },
]

const compliance = ['HIPAA Compliant', 'GDPR Ready', 'SOC 2 Type II', 'ISO 27001', 'Zero Trust Architecture']

function ShieldSVG() {
  return (
    <div className="relative flex items-center justify-center" aria-label="Security shield illustration">
      {[220, 180, 140].map((size, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: size,
            height: size,
            background: `radial-gradient(circle, rgba(255,107,0,${0.04 + i * 0.02}) 0%, transparent 70%)`,
            border: `1px solid rgba(255,107,0,${0.06 + i * 0.04})`,
            animation: `shieldPulse ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
      <svg width="120" height="140" viewBox="0 0 120 140" fill="none" className="shield-glow relative z-10">
        <path
          d="M60 8L16 26V62C16 92 36 118 60 128C84 118 104 92 104 62V26L60 8Z"
          fill="url(#shieldGrad)"
          stroke="url(#shieldStroke)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient id="shieldGrad" x1="60" y1="8" x2="60" y2="128" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(255,107,0,0.3)" />
            <stop offset="100%" stopColor="rgba(255,107,0,0.05)" />
          </linearGradient>
          <linearGradient id="shieldStroke" x1="60" y1="8" x2="60" y2="128" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF6B00" />
            <stop offset="100%" stopColor="rgba(255,107,0,0.2)" />
          </linearGradient>
        </defs>
        <rect x="48" y="52" width="24" height="18" rx="3" fill="rgba(255,107,0,0.3)" stroke="rgba(255,107,0,0.6)" strokeWidth="1.5" />
        <path d="M54 52V46C54 42.7 56.7 40 60 40C63.3 40 66 42.7 66 46V52" stroke="rgba(255,107,0,0.7)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="60" cy="61" r="3" fill="#FF6B00" />
      </svg>
    </div>
  )
}

export default function Security() {
  return (
    <section id="security" className="py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(255,107,0,0.03) 50%, transparent 100%)' }}
      />
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-tag justify-center"
          >
            Security &amp; Privacy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title text-center"
          >
            Your Data. <span className="gradient-text">Your Control.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 mt-4 text-sm max-w-md mx-auto"
          >
            We built LuraLoop on a zero-trust, zero-retention foundation — because your trust is our product.
          </motion.p>
        </div>

        {/* Layout — stacked on mobile, side-by-side on lg */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="shrink-0"
          >
            <ShieldSVG />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                id={`security-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="glass rounded-2xl p-6 flex items-start gap-4 card-hover"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(255,107,0,0.1)', border: '1px solid rgba(255,107,0,0.25)', boxShadow: '0 0 15px rgba(255,107,0,0.15)' }}
                >
                  <item.icon size={18} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1.5">{item.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Compliance badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mt-14"
        >
          {compliance.map((badge, i) => (
            <div key={i} className="glass rounded-full px-4 py-2 text-xs text-white/50 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
