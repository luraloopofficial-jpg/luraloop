'use client'

import { motion } from 'framer-motion'
import { ShieldOff, Plug, Lock, Rocket, Activity } from 'lucide-react'

const features = [
  {
    icon: ShieldOff,
    title: 'Zero Data Retention',
    desc: "We don't store, sell, or use your data. Ever. Your information is processed in real-time and never persisted.",
    color: '#FF6B00',
  },
  {
    icon: Plug,
    title: 'Seamless Integration',
    desc: 'Connects with your existing HMS, ERP, CRM & more. No rip-and-replace — just intelligent augmentation.',
    color: '#FF8C42',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    desc: 'HIPAA, GDPR & SOC 2 compliant by design. End-to-end encryption at every layer of the stack.',
    color: '#FF6B00',
  },
  {
    icon: Rocket,
    title: 'Scalable Automation',
    desc: 'From one department to enterprise-wide. AI agents that scale with your growth without added complexity.',
    color: '#FF9500',
  },
  {
    icon: Activity,
    title: 'Real-Time Intelligence',
    desc: 'Front-line decisions that help you act instantly. Live analytics, smart triggers, and automated responses.',
    color: '#FF6B00',
  },
]

export default function WhyLuraLoop() {
  return (
    <section id="why" className="py-28 relative">
      <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag justify-center"
          >
            Why LuraLoop
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title text-center"
          >
            Designed For Impact. <span className="gradient-text">Built For Trust.</span>
          </motion.h2>
        </div>

        {/* Cards — visible on all breakpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              id={`why-${feat.title.toLowerCase().replace(/\s+/g, '-')}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass rounded-2xl p-6 flex flex-col gap-4 card-hover group cursor-pointer"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: `${feat.color}18`,
                  border: `1px solid ${feat.color}33`,
                  boxShadow: `0 0 20px ${feat.color}22`,
                }}
              >
                <feat.icon size={20} style={{ color: feat.color }} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-orange-300 transition-colors duration-300">
                  {feat.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed">{feat.desc}</p>
              </div>
              <div
                className="h-px w-0 group-hover:w-full transition-all duration-500 mt-auto"
                style={{ background: `linear-gradient(90deg, ${feat.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
