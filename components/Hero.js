'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ShieldCheck, Puzzle, Bot, Zap, Users, Building2, GitBranch, Database, User } from 'lucide-react'

const trustBadges = [
  { icon: ShieldCheck, label: 'Zero Data Retention' },
  { icon: Puzzle, label: 'Non-Disruptive Integration' },
  { icon: Bot, label: 'White-Label AI Agents' },
  { icon: ShieldCheck, label: 'Enterprise Security Controls' },
]

// Right-side architecture flow nodes
const archFlow = [
  { label: 'Users / Staff / Customers', Icon: User, sub: 'Any channel — WhatsApp, web, portal, voice' },
  { label: 'AI Agents', Icon: Bot, sub: 'Intelligent processing & decision layer', highlight: true },
  { label: 'Workflow Orchestration', Icon: GitBranch, sub: 'Automated routing & task delegation' },
  { label: 'Department Operations', Icon: Users, sub: 'Internal teams notified & updated in real-time' },
  { label: 'Existing Client Systems', Icon: Database, sub: 'HMS · ERP · CRM · LMS — zero disruption' },
]

function ArchitectureFlow() {
  return (
    <div className="flex flex-col gap-0 w-full">
      {archFlow.map((node, i) => (
        <div key={i} className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.35 }}
            className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-lg transition-all duration-200 ${
              node.highlight
                ? 'border border-orange-500/20 bg-orange-500/[0.05]'
                : 'border border-zinc-800/60 bg-transparent'
            }`}
            style={node.highlight ? { boxShadow: '0 0 24px rgba(255,107,0,0.06)' } : {}}
          >
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
              style={node.highlight
                ? { background: 'rgba(255,107,0,0.12)', border: '1px solid rgba(255,107,0,0.25)' }
                : { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <node.Icon size={13} className={node.highlight ? 'text-orange-400' : 'text-zinc-500'} />
            </div>
            <div>
              <p className={`text-[11px] font-semibold leading-tight ${node.highlight ? 'text-orange-300/90' : 'text-zinc-400'}`}>
                {node.label}
              </p>
              <p className="text-zinc-600 text-[9px] leading-tight mt-0.5">{node.sub}</p>
            </div>
          </motion.div>

          {/* Connector */}
          {i < archFlow.length - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 + i * 0.1 }}
              className="flex flex-col items-center py-px"
            >
              <div className="w-px h-3 bg-gradient-to-b from-orange-500/30 to-orange-500/10" />
              <div className="w-1 h-1 rounded-full bg-orange-500/40" />
              <div className="w-px h-3 bg-gradient-to-b from-orange-500/10 to-transparent" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function Hero() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const scale = useTransform(scrollY, [0, 400], [1, 0.96])

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-36 pb-24 md:pt-44 md:pb-28 overflow-hidden">
      <motion.div style={{ opacity, scale }} className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none transform-gpu">
        <div className="relative w-full h-full max-w-6xl max-h-[80vh] opacity-15 mix-blend-screen">
          <Image src="/hero-bg.jpg" alt="" fill priority sizes="100vw" quality={80} className="object-contain object-center" />
        </div>
        <div className="absolute inset-0 bg-[#030712]/55" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 100% 0%, rgba(234,88,12,0.05) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(30,58,138,0.2) 0%, transparent 50%)' }} />
        <div className="absolute inset-0 grid-overlay" />
      </motion.div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/35 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── Left: Content Column (48% = 5.75/12 ≈ col-span-6) ── */}
          <div className="lg:col-span-6">

            {/* Eyebrow */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.15 }}>
              <span className="section-tag mb-5">
                <Zap size={10} />
                Enterprise Automation Infrastructure
              </span>
            </motion.div>

            {/* Headline — strict 3-line structure */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.25rem] font-bold tracking-tight text-white leading-[1.12] mb-7"
            >
              White-Label Automation <br />
              <span className="gradient-text">Infrastructure</span> for <br />
              Enterprise Delivery Partners
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.33 }}
              className="text-zinc-400 text-[15px] md:text-base leading-relaxed tracking-wide max-w-[380px] mb-8"
            >
              LuraLoop helps agencies, consultants, and system integrators deploy AI agents and workflow automation across regulated industries — without replacing client systems.
            </motion.p>

            {/* Primary + Secondary CTA Row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.42 }}
              className="flex flex-wrap items-center gap-4 mb-6"
            >
              <a href="#cta" id="hero-book-call" className="btn-primary">
                Book Partner Call <ArrowRight size={15} />
              </a>
              <a href="/#architecture" id="hero-view-platform"
                className="btn-secondary">
                View Platform <ArrowRight size={15} className="text-orange-400" />
              </a>
            </motion.div>

            {/* Choose-Your-Path Mini-Chips */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              <a href="/#partners" id="hero-path-agency"
                className="inline-flex items-center gap-2 text-[11px] text-white/35 hover:text-white/70 transition-colors duration-200 group">
                <Users size={11} className="text-orange-500/60 group-hover:text-orange-400" />
                For Agencies &amp; Consultants
                <ArrowRight size={10} className="text-white/15 group-hover:text-orange-400 transition-colors" />
              </a>
              <span className="text-white/10">·</span>
              <a href="/#architecture" id="hero-path-si"
                className="inline-flex items-center gap-2 text-[11px] text-white/35 hover:text-white/70 transition-colors duration-200 group">
                <Building2 size={11} className="text-orange-500/60 group-hover:text-orange-400" />
                For System Integrators
                <ArrowRight size={10} className="text-white/15 group-hover:text-orange-400 transition-colors" />
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.58 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5"
            >
              {trustBadges.map((badge, i) => (
                <div key={i} className="glass rounded-xl px-3 py-2.5 flex items-center gap-2">
                  <badge.icon size={12} className="text-orange-500 shrink-0" />
                  <span className="text-white/45 text-[11px] leading-tight">{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Architecture Panel (52% = col-span-6) ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-6 flex justify-center lg:justify-end lg:mt-6"
          >
            <div className="w-full max-w-[340px] lg:max-w-[360px] rounded-xl border border-white/5 bg-[#111111]/70 backdrop-blur-md p-5 space-y-1">
              <p className="text-white/30 text-[10px] font-semibold uppercase tracking-[0.18em] mb-3 px-0.5">
                Operational Layer Architecture
              </p>
              <ArchitectureFlow />
              <p className="text-white/15 text-[9px] text-center lg:text-left pt-3 px-0.5 leading-relaxed">
                LuraLoop sits between your client&apos;s end users and their existing enterprise systems — processing all intelligence ephemerally with zero data persistence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none" />
    </section>
  )
}
