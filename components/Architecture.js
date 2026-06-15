'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const flowSteps = [
  { label: 'User / Patient / Student / Customer', icon: '👤', desc: 'Any touchpoint, any channel', id: 'flow-user' },
  { label: 'LuraLoop AI Agents', icon: '🤖', desc: 'Intelligent processing layer', highlight: true, id: 'flow-agents' },
  { label: 'Department Workflows', icon: '⚙️', desc: 'Automated & optimized', id: 'flow-workflows' },
  { label: 'Your Existing Systems', icon: '💾', desc: 'Zero disruption integration', id: 'flow-systems' },
]

const sideConnectors = [
  { label: 'HMS / EMR', icon: '🏥' },
  { label: 'LMS / SIS', icon: '📚' },
  { label: 'ERP / CRM', icon: '📊' },
  { label: 'Internal Platforms', icon: '🔗' },
  { label: 'Other Tools', icon: '🛠️' },
]

export default function Architecture() {
  return (
    <section id="architecture" className="py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,107,0,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-tag justify-center"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title text-center"
          >
            Your Systems. <span className="gradient-text">Connected. Enhanced.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 mt-4 max-w-lg mx-auto text-sm leading-relaxed"
          >
            LuraLoop sits on top of your existing systems and adds an intelligent layer of automation and AI.
          </motion.p>
        </div>

        {/* Architecture Visual — stacked on mobile, side-by-side on lg */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Flow Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-0"
          >
            {flowSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <motion.div
                  id={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  whileHover={{ scale: 1.04, x: 4 }}
                  className={`flex items-center gap-4 px-6 py-4 rounded-2xl w-72 cursor-pointer transition-all duration-300 ${
                    step.highlight ? 'glass-orange border border-orange-500/30' : 'glass'
                  }`}
                  style={step.highlight ? { boxShadow: '0 0 30px rgba(255,107,0,0.2), 0 0 60px rgba(255,107,0,0.1)' } : {}}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
                    style={step.highlight
                      ? { background: 'rgba(255,107,0,0.2)', border: '1px solid rgba(255,107,0,0.4)' }
                      : { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }
                    }
                  >
                    {step.icon}
                  </div>
                  <div>
                    <div className={`text-sm font-semibold ${step.highlight ? 'text-orange-400' : 'text-white'}`}>
                      {step.label}
                    </div>
                    <div className="text-white/30 text-xs mt-0.5">{step.desc}</div>
                  </div>
                </motion.div>

                {i < flowSteps.length - 1 && (
                  <div className="flex flex-col items-center py-1">
                    <div className="w-px h-6 bg-gradient-to-b from-orange-500/40 to-orange-500/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500/60" />
                    <div className="w-px h-6 bg-gradient-to-b from-orange-500/20 to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Arrow connector */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center gap-2"
            aria-hidden="true"
          >
            <div className="w-16 h-px bg-gradient-to-r from-orange-500/40 to-orange-500 hidden lg:block" />
            <ArrowRight size={16} className="text-orange-500 hidden lg:block" />
          </motion.div>

          {/* Side Systems Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="glass rounded-2xl p-5 flex flex-col gap-3 w-full lg:w-48"
            style={{ border: '1px solid rgba(255,107,0,0.15)' }}
          >
            <div className="text-xs text-orange-400 font-semibold mb-2 uppercase tracking-wider">
              Connected Systems
            </div>
            {sideConnectors.map((sys, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-dark-400 flex items-center justify-center text-sm group-hover:bg-orange-500/10 group-hover:scale-110 transition-all duration-300">
                  {sys.icon}
                </div>
                <span className="text-white/50 text-xs group-hover:text-white/80 transition-colors">
                  {sys.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <a href="#cta" className="btn-secondary text-sm" id="arch-cta">
            See How It Works <ArrowRight size={14} className="text-orange-400" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
