'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ShieldCheck, Zap, Puzzle, Bot } from 'lucide-react'

const trustBadges = [
  { icon: ShieldCheck, label: 'Zero Data Retention' },
  { icon: ShieldCheck, label: 'Enterprise Security' },
  { icon: Puzzle, label: 'Works With Existing Systems' },
  { icon: Bot, label: 'Scalable AI Agents' },
]

const nodes = [
  { label: 'AI Agents', icon: '🤖' },
  { label: 'Automation', icon: '⚡' },
  { label: 'Analytics', icon: '📊' },
  { label: 'Security', icon: '🛡️' },
  { label: 'Systems', icon: '🔗' },
]

function AiCore() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Background glow */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="w-72 h-72 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,107,0,0.12) 0%, transparent 70%)' }}
        />
      </div>

      {/* Outer animated ring */}
      <div className="absolute w-80 h-80 rounded-full border border-orange-500/20 animate-spin-slow" />

      {/* Orbit nodes */}
      {nodes.map((node, i) => (
        <div key={i} className={`orbit-node-${i + 1}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.15, duration: 0.4 }}
            whileHover={{ scale: 1.3 }}
            className="w-10 h-10 rounded-xl glass-orange flex items-center justify-center cursor-pointer"
          >
            <span className="text-sm leading-none">{node.icon}</span>
          </motion.div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] text-orange-400/70 font-medium">
            {node.label}
          </div>
        </div>
      ))}

        {/* Central Core Cube with official chatbot-logo.svg */}
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-10 transform-gpu"
        >
          <div
            className="w-28 h-28 rounded-2xl flex items-center justify-center animate-pulse-orange"
            style={{
              background: 'linear-gradient(135deg, #1a0a00 0%, #2d1200 40%, #FF6B00 100%)',
              boxShadow: '0 0 50px rgba(255,107,0,0.6), 0 0 100px rgba(255,107,0,0.3), inset 0 0 30px rgba(255,107,0,0.2)',
              border: '1px solid rgba(255,107,0,0.5)',
            }}
          >
            {/* Official LuraLoop icon mark rotating */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="transform-gpu"
            >
              <Image
                src="/chatbot-logo.svg"
                alt="LuraLoop AI Core"
                width={52}
                height={52}
                className="drop-shadow-[0_0_12px_rgba(255,107,0,0.8)]"
              />
            </motion.div>
          </div>
          <div
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-4 rounded-full"
            style={{ background: 'radial-gradient(ellipse, rgba(255,107,0,0.3), transparent)', filter: 'blur(6px)' }}
          />
        </motion.div>

      {/* Animated SVG rings */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        {[100, 140, 180].map((r, i) => (
          <circle key={i} cx="50%" cy="50%" r={r} fill="none" stroke="rgba(255,107,0,0.08)" strokeWidth="1">
            <animate attributeName="r" values={`${r};${r + 10};${r}`} dur={`${3 + i}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur={`${3 + i}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>

      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="particle"
          aria-hidden="true"
          style={{
            width: `${(i % 3) + 2}px`,
            height: `${(i % 3) + 2}px`,
            top: `${10 + (i * 7) % 80}%`,
            left: `${10 + (i * 11) % 80}%`,
            animationDuration: `${4 + (i % 3)}s`,
            animationDelay: `${(i * 0.4) % 3}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const scale = useTransform(scrollY, [0, 400], [1, 0.95])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden"
    >
      {/* === Subtle, Contained Cinematic Background === */}
      <motion.div 
        style={{ opacity, scale }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none transform-gpu"
      >
        <div className="relative w-full h-full max-w-6xl max-h-[80vh] opacity-30 mix-blend-screen">
          <Image
            src="/hero-bg.jpg"
            alt="LuraLoop Hero Background"
            fill
            priority
            quality={90}
            className="object-contain object-center"
          />
        </div>
        {/* Subtle dark overlay for perfect contrast */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Subtle orange radial atmosphere over the image */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 70% 50%, rgba(255,107,0,0.12) 0%, transparent 60%),' +
              'radial-gradient(ellipse 40% 60% at 20% 80%, rgba(255,107,0,0.06) 0%, transparent 50%)',
          }}
        />
        {/* Grid overlay on top */}
        <div className="absolute inset-0 grid-overlay" />
      </motion.div>
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="section-tag">
                <Zap size={10} />
                White-Label Enterprise Automation Infrastructure
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.2] tracking-tight mb-6"
            >
              The Institutional<br className="hidden md:block" />
              <span className="gradient-text">Back-End for</span><br className="hidden md:block" />
              <span className="whitespace-nowrap">Global Automation Providers</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-white/50 text-base md:text-lg leading-relaxed mb-10 max-w-md"
            >
              Scale your agency or consulting firm with LuraLoop's elite white-label execution architecture.
              We are the silent infrastructure engine behind world-class automation providers — you source the clients, we build the workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button 
                className="btn-primary" 
                id="hero-partner-apply" 
                onClick={() => window.dispatchEvent(new CustomEvent('openAuthModal', { detail: { mode: 'signup' } }))}
              >
                Apply as Agency Partner <ArrowRight size={16} />
              </button>
              <a href="#industries" className="btn-secondary" id="hero-explore">
                View Architecture <ArrowRight size={16} className="text-orange-400" />
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {trustBadges.map((badge, i) => (
                <div key={i} className="glass rounded-xl px-3 py-2.5 flex items-center gap-2 card-hover">
                  <badge.icon size={13} className="text-orange-500 shrink-0" />
                  <span className="text-white/60 text-xs leading-tight">{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: AI Core — visible on lg screens */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <AiCore />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0B0B] to-transparent pointer-events-none" />
    </section>
  )
}
