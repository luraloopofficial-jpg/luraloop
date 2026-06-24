'use client'

import { motion } from 'framer-motion'
import { ArrowRight, User, Bot, GitBranch, Database, Plug } from 'lucide-react'

const flowSteps = [
  { label: 'Client Touchpoints', Icon: User, desc: 'WhatsApp, web, voice, or portal', id: 'flow-user' },
  { label: 'LuraLoop AI Agents', Icon: Bot, desc: 'Intelligent operational layer', highlight: true, id: 'flow-agents' },
  { label: 'Workflow Orchestration', Icon: GitBranch, desc: 'Automated process routing', id: 'flow-workflows' },
  { label: 'Client Existing Systems', Icon: Database, desc: 'Zero disruption integration', id: 'flow-systems' },
]

const sideConnectors = [
  { label: 'HMS / EMR', Icon: Database },
  { label: 'LMS / SIS', Icon: Database },
  { label: 'ERP / CRM', Icon: GitBranch },
  { label: 'Internal Platforms', Icon: Plug },
  { label: 'Custom API Layer', Icon: Plug },
]

export default function Architecture() {
  return (
    <section id="architecture" className="py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(30,58,138,0.15) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-tag justify-center"
          >
            Platform Architecture
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title text-center"
          >
            Your Client&apos;s Systems. <span className="gradient-text">Augmented. Not Replaced.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/35 mt-4 max-w-lg mx-auto text-sm leading-relaxed"
          >
            LuraLoop sits as an intelligent operational layer between client touchpoints and legacy enterprise systems — adding AI-native automation without disrupting existing infrastructure.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Flow Steps */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="flex flex-col items-center gap-0"
          >
            {flowSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <motion.div
                  id={step.id}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.45 }}
                  whileHover={{ scale: 1.03, x: 3 }}
                  className={`flex items-center gap-4 px-5 py-4 rounded-2xl w-72 transition-all duration-250 ${
                    step.highlight ? 'glass-orange border border-orange-500/25' : 'glass'
                  }`}
                  style={step.highlight ? { boxShadow: '0 0 25px rgba(255,107,0,0.15), 0 0 50px rgba(255,107,0,0.08)' } : {}}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={step.highlight
                      ? { background: 'rgba(255,107,0,0.18)', border: '1px solid rgba(255,107,0,0.35)' }
                      : { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <step.Icon size={17} className={step.highlight ? 'text-orange-400' : 'text-white/50'} />
                  </div>
                  <div>
                    <div className={`text-sm font-semibold ${step.highlight ? 'text-orange-400' : 'text-white/80'}`}>{step.label}</div>
                    <div className="text-white/28 text-xs mt-0.5">{step.desc}</div>
                  </div>
                </motion.div>

                {i < flowSteps.length - 1 && (
                  <div className="flex flex-col items-center py-1">
                    <div className="w-px h-5 bg-gradient-to-b from-orange-500/35 to-orange-500/15" />
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500/50" />
                    <div className="w-px h-5 bg-gradient-to-b from-orange-500/15 to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="flex items-center gap-2"
            aria-hidden="true"
          >
            <div className="w-14 h-px bg-gradient-to-r from-orange-500/35 to-orange-500 hidden lg:block" />
            <ArrowRight size={14} className="text-orange-500 hidden lg:block" />
          </motion.div>

          {/* Connected Systems Panel */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.65 }}
            className="glass rounded-2xl p-5 flex flex-col gap-3 w-full lg:w-52"
            style={{ border: '1px solid rgba(255,107,0,0.12)' }}
          >
            <div className="text-[10px] text-orange-400/70 font-semibold uppercase tracking-wider mb-1">
              Integration Adapters
            </div>
            {sideConnectors.map((sys, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + i * 0.08 }}
                className="flex items-center gap-3 group cursor-default"
              >
                <div className="w-7 h-7 rounded-lg bg-white/4 border border-white/6 flex items-center justify-center group-hover:border-orange-500/20 transition-colors">
                  <sys.Icon size={12} className="text-white/30 group-hover:text-orange-400/60 transition-colors" />
                </div>
                <span className="text-white/40 text-xs group-hover:text-white/60 transition-colors">{sys.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <a href="#cta" className="btn-secondary text-sm" id="arch-cta">
            Request Architecture Deck <ArrowRight size={13} className="text-orange-400" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
