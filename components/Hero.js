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
    <div className="flex flex-col gap-0 w-full max-w-sm mx-auto lg:mx-0">
      {archFlow.map((node, i) => (
        <div key={i} className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.12, duration: 0.4 }}
            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 ${
              node.highlight
                ? 'border border-orange-500/25 bg-orange-500/6'
                : 'border border-white/6 bg-white/[0.025]'
            }`}
            style={node.highlight ? { boxShadow: '0 0 20px rgba(255,107,0,0.1)' } : {}}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={node.highlight
                ? { background: 'rgba(255,107,0,0.15)', border: '1px solid rgba(255,107,0,0.3)' }
                : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <node.Icon size={14} className={node.highlight ? 'text-orange-400' : 'text-white/35'} />
            </div>
            <div>
              <p className={`text-xs font-semibold leading-tight ${node.highlight ? 'text-orange-300' : 'text-white/70'}`}>
                {node.label}
              </p>
              <p className="text-white/25 text-[10px] leading-tight mt-0.5">{node.sub}</p>
            </div>
          </motion.div>

          {/* Connector */}
          {i < archFlow.length - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 + i * 0.12 }}
              className="flex flex-col items-center py-0.5"
            >
              <div className="w-px h-4 bg-gradient-to-b from-orange-500/30 to-orange-500/10" />
              <div className="w-1 h-1 rounded-full bg-orange-500/40" />
              <div className="w-px h-4 bg-gradient-to-b from-orange-500/10 to-transparent" />
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
    <section id="hero" className="relative min-h-screen flex items-center py-24 md:py-32 overflow-hidden">
      <motion.div style={{ opacity, scale }} className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none transform-gpu">
        <div className="relative w-full h-full max-w-6xl max-h-[80vh] opacity-15 mix-blend-screen">
          <Image src="/hero-bg.jpg" alt="" fill priority quality={80} className="object-contain object-center" />
        </div>
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 55% 50% at 70% 50%, rgba(255,107,0,0.07) 0%, transparent 60%)' }} />
        <div className="absolute inset-0 grid-overlay" />
      </motion.div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/35 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Copy */}
          <div>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
              <span className="section-tag">
                <Zap size={10} />
                Enterprise Automation Infrastructure
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.62, delay: 0.24 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight md:leading-none mb-6"
            >
              <span className="text-white">White-Label Automation</span> <br className="hidden md:block" />
              <span className="text-zinc-400">Infrastructure for</span> <br className="hidden md:block" />
              <span className="text-white">Enterprise Delivery Partners</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: 0.33 }}
              className="text-zinc-400 text-base md:text-lg leading-relaxed tracking-wide mb-10 max-w-xl"
            >
              LuraLoop helps agencies, consultants, and system integrators deploy AI agents and workflow automation across regulated industries — without replacing client systems.
            </motion.p>

            {/* Dual-Path Tracks */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.52, delay: 0.41 }}
              className="flex flex-col sm:flex-row gap-3 mb-9"
            >
              <a href="/#partners" id="hero-path-agency"
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/7 bg-white/[0.025] hover:border-orange-500/30 hover:bg-orange-500/4 transition-all duration-200 group">
                <div className="w-8 h-8 rounded-lg bg-orange-500/9 border border-orange-500/16 flex items-center justify-center shrink-0">
                  <Users size={13} className="text-orange-400" />
                </div>
                <div>
                  <p className="text-white/72 text-xs font-semibold group-hover:text-white transition-colors">For Agencies &amp; Consultants</p>
                  <p className="text-white/22 text-[10px]">Resell automation under your brand</p>
                </div>
                <ArrowRight size={11} className="text-white/12 group-hover:text-orange-400 ml-auto transition-colors" />
              </a>
              <a href="/#architecture" id="hero-path-si"
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/7 bg-white/[0.025] hover:border-orange-500/30 hover:bg-orange-500/4 transition-all duration-200 group">
                <div className="w-8 h-8 rounded-lg bg-orange-500/9 border border-orange-500/16 flex items-center justify-center shrink-0">
                  <Building2 size={13} className="text-orange-400" />
                </div>
                <div>
                  <p className="text-white/72 text-xs font-semibold group-hover:text-white transition-colors">For System Integrators</p>
                  <p className="text-white/22 text-[10px]">Add AI to enterprise delivery stacks</p>
                </div>
                <ArrowRight size={11} className="text-white/12 group-hover:text-orange-400 ml-auto transition-colors" />
              </a>
            </motion.div>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.56, delay: 0.48 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a href="#cta" className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold text-sm hover:scale-[1.02] hover:bg-zinc-100 transition-all duration-200 shadow-sm" id="hero-book-call">
                Book Partner Call <ArrowRight size={15} />
              </a>
              <a href="/#industries" className="flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:scale-[1.02] hover:bg-zinc-800 transition-all duration-200" id="hero-view-modules">
                View Industry Modules <ArrowRight size={15} className="text-zinc-400" />
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.56 }}
              className="text-white/22 text-sm font-medium tracking-wide mb-9"
            >
              You source the clients. We engineer the workflows.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.56, delay: 0.62 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {trustBadges.map((badge, i) => (
                <div key={i} className="glass rounded-xl px-3 py-2.5 flex items-center gap-2">
                  <badge.icon size={12} className="text-orange-500 shrink-0" />
                  <span className="text-white/45 text-[11px] leading-tight">{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Architecture Flow */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.32 }}
            className="flex flex-col items-center lg:items-start gap-4"
          >
            <p className="text-white/20 text-[10px] font-semibold uppercase tracking-widest mb-1">
              Operational Layer Architecture
            </p>
            <ArchitectureFlow />
            <p className="text-white/15 text-[10px] text-center lg:text-left mt-1 max-w-xs leading-relaxed">
              LuraLoop sits between your client&apos;s end users and their existing enterprise systems — processing all intelligence ephemerally with zero data persistence.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0B0B] to-transparent pointer-events-none" />
    </section>
  )
}
