'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Phone } from 'lucide-react'

const checks = ['No Long-term Contract', 'Quick Implementation', 'Dedicated Support']

export default function CTA() {
  return (
    <section id="cta" className="py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,107,0,0.08) 0%, rgba(255,107,0,0.02) 40%, transparent 70%)' }}
      />
      <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-tag justify-center"
        >
          Get Started Today
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
        >
          Ready To Transform <span className="gradient-text">Your Operations?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/50 text-lg mb-10 max-w-xl mx-auto"
        >
          Let&apos;s build your intelligent operational layer. Join forward-thinking enterprises already automating their future with LuraLoop.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <a href="mailto:hello@luraloop.com" id="cta-book-demo" className="btn-primary px-8 py-4 text-base">
            Book A Demo <ArrowRight size={18} />
          </a>
          <a href="tel:+1234567890" id="cta-contact-sales" className="btn-secondary px-8 py-4 text-base">
            <Phone size={16} className="text-orange-400" />
            Contact Sales
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {checks.map((check, i) => (
            <div key={i} className="flex items-center gap-2 text-white/40 text-sm">
              <CheckCircle size={14} className="text-orange-500" />
              {check}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
