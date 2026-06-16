'use client'

import { motion } from 'framer-motion'
import { Users, ShieldCheck, Clock, Package, Headphones } from 'lucide-react'

const features = [
  {
    Icon: Users,
    title: 'Expand Without Hiring',
    desc: 'Deliver complex AI automation under your agency brand with zero internal build cost. LuraLoop is your invisible engineering team.',
  },
  {
    Icon: Package,
    title: 'No System Disruption',
    desc: 'Augments HMS, ERP, CRM, and LMS stacks via secure API adapters. Your clients keep their existing tools — we add the intelligence layer on top.',
  },
  {
    Icon: ShieldCheck,
    title: 'Regulated Industry Ready',
    desc: 'Designed for HIPAA-aligned and GDPR-conscious environments. Built with enterprise security controls and zero-retention data workflows.',
  },
  {
    Icon: Clock,
    title: '48-Hour Deployment SLA',
    desc: 'Standard industry modules go live within 48 hours of integration mapping. Complex multi-agent orchestrations deploy in under two weeks.',
  },
  {
    Icon: Headphones,
    title: 'Managed Operations Included',
    desc: 'Ongoing model maintenance, performance monitoring, and SLA enforcement are included across all partner engagement tiers.',
  },
]

export default function ForPartners() {
  return (
    <section id="partners" className="py-28 relative">
      <div className="absolute inset-0 grid-overlay opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag justify-center"
          >
            Partner Enablement
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title text-center"
          >
            Built for Delivery Partners. <span className="gradient-text">Not End Clients.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/35 mt-4 text-sm max-w-xl mx-auto leading-relaxed"
          >
            LuraLoop is a back-end infrastructure layer designed exclusively for agencies, consultants, and system integrators who want to deliver enterprise AI automation without building it themselves.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              id={`partner-${feat.title.toLowerCase().replace(/\s+/g, '-')}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 flex flex-col gap-4 card-hover group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(255,107,0,0.09)', border: '1px solid rgba(255,107,0,0.2)' }}
              >
                <feat.Icon size={18} className="text-orange-500" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-orange-300 transition-colors duration-200">
                  {feat.title}
                </h3>
                <p className="text-white/38 text-xs leading-relaxed">{feat.desc}</p>
              </div>
              <div className="h-px w-0 group-hover:w-full transition-all duration-500 mt-auto" style={{ background: 'linear-gradient(90deg, rgba(255,107,0,0.6), transparent)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
