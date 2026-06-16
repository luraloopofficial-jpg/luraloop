'use client'

import { motion } from 'framer-motion'
import { Plug, Database, MessageSquare, BarChart3, ShieldCheck, Clock, Package, Headphones } from 'lucide-react'

const integrations = [
  { Icon: Database, label: 'HMS / EMR' },
  { Icon: BarChart3, label: 'LMS / SIS' },
  { Icon: Plug, label: 'ERP / CRM' },
  { Icon: MessageSquare, label: 'WhatsApp API' },
  { Icon: Database, label: 'Custom APIs' },
]

const postures = [
  { Icon: ShieldCheck, label: 'Zero-Retention Architecture' },
  { Icon: ShieldCheck, label: 'TLS 1.3 Encryption' },
  { Icon: ShieldCheck, label: 'Role-Based Access Isolation' },
  { Icon: ShieldCheck, label: 'Ephemeral Compute Model' },
]

export default function TrustBar() {
  return (
    <section id="trust" className="py-12 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(255,107,0,0.018) 0%, transparent 100%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white/25 text-xs uppercase tracking-widest font-medium mb-8"
        >
          Integration-ready across regulated enterprise stacks
        </motion.p>

        <div className="flex flex-col gap-5">
          {/* Integration adapters */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {integrations.map(({ Icon, label }, i) => (
              <div key={i} className="glass rounded-xl px-4 py-2.5 flex items-center gap-2.5">
                <Icon size={13} className="text-orange-500/70 shrink-0" />
                <span className="text-white/45 text-xs font-medium">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Security postures */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {postures.map(({ Icon, label }, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-orange-500/50" />
                <span className="text-white/25 text-xs">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
