'use client'

import { motion } from 'framer-motion'
import { Search, GitMerge, Rocket, Activity, ArrowRight } from 'lucide-react'

const steps = [
  {
    id: 'delivery-discovery',
    step: '01',
    Icon: Search,
    title: 'Discovery',
    desc: 'We map your client\'s existing tech stack, operational workflows, and automation requirements. A structured requirements brief is produced within 48 hours.',
    duration: '1–2 Days',
  },
  {
    id: 'delivery-integration',
    step: '02',
    Icon: GitMerge,
    title: 'Integration Mapping',
    desc: 'Our engineering team configures API adapters, authentication scopes, and data flow contracts between LuraLoop agents and the client\'s existing systems.',
    duration: '2–5 Days',
  },
  {
    id: 'delivery-deployment',
    step: '03',
    Icon: Rocket,
    title: 'Staged Deployment',
    desc: 'Phased rollout with parallel QA validation checkpoints. Standard modules go live in 48 hours. Multi-agent orchestration layers deploy within two weeks.',
    duration: '2–14 Days',
  },
  {
    id: 'delivery-ops',
    step: '04',
    Icon: Activity,
    title: 'Managed Operations',
    desc: 'Ongoing model performance monitoring, SLA enforcement, and architectural updates. Your client sees results. Your agency delivers the value.',
    duration: 'Continuous',
  },
]

export default function DeliveryModel() {
  return (
    <section id="delivery" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-25 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(255,107,0,0.025) 50%, transparent 100%)' }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-tag justify-center"
          >
            Delivery Model
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title text-center"
          >
            From Scoping to <span className="gradient-text">Live Operations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/35 mt-4 text-sm max-w-md mx-auto leading-relaxed"
          >
            A structured, repeatable delivery process that lets your agency deploy enterprise AI automation with confidence — every time.
          </motion.p>
        </div>

        {/* Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* Connector line on large screens */}
          <div className="absolute top-9 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent hidden lg:block" aria-hidden="true" />

          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              id={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 flex flex-col gap-4 card-hover group relative"
            >
              {/* Step number circle */}
              <div className="flex items-center justify-between mb-2">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(255,107,0,0.09)', border: '1px solid rgba(255,107,0,0.2)' }}
                >
                  <step.Icon size={17} className="text-orange-500" />
                </div>
                <span className="text-white/12 text-3xl font-black tracking-tight">{step.step}</span>
              </div>

              <div>
                <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-orange-300 transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-white/35 text-xs leading-relaxed">{step.desc}</p>
              </div>

              <div className="mt-auto pt-3 border-t border-white/5">
                <span className="text-orange-400/60 text-[10px] font-semibold uppercase tracking-wider">{step.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <a href="#cta" id="delivery-cta" className="btn-primary">
            Start Your Deployment <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
