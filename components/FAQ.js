'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    id: 'faq-onboarding',
    q: 'What is the typical onboarding timeline for a new enterprise deployment?',
    a: 'Most enterprise deployments are live within 5 to 14 business days from contract signing. Simple workflow integrations (e.g., WhatsApp AI receptionist) go live in 48 hours. Complex multi-agent orchestration layers with deep ERP or CRM integration typically take 2 to 3 weeks.',
  },
  {
    id: 'faq-compatibility',
    q: 'Which existing enterprise systems does LuraLoop integrate with?',
    a: 'LuraLoop integrates with any system that exposes an API, webhook, or structured data stream. This includes HMS (Healthcare Management Systems), LMS, CRM platforms (Salesforce, HubSpot, Zoho), ERP systems, Shopify, WooCommerce, WhatsApp Business API, and custom internal databases via secure connector nodes.',
  },
  {
    id: 'faq-residency',
    q: 'How does LuraLoop handle data residency laws and compliance?',
    a: 'LuraLoop operates a zero-retention, ephemeral processing architecture. No personal or enterprise data is stored at rest. For regulated industries requiring strict data residency (DPDP Act, GDPR, HIPAA), we offer private cloud or on-premise execution node deployments within your chosen jurisdiction.',
  },
  {
    id: 'faq-cost',
    q: 'What are the custom integration costs and pricing structure?',
    a: 'LuraLoop operates on a project-based engagement model with transparent milestone billing. There are no hidden fees or long-term lock-in contracts. Initial scoping calls are free. A detailed fixed-cost architecture proposal is issued within 48 hours of the discovery session.',
  },
  {
    id: 'faq-whitelabel',
    q: 'Can agencies fully white-label LuraLoop workflows for their own clients?',
    a: 'Yes — LuraLoop was architected from the ground up as a white-label B2B2B execution layer. Agencies receive full brand isolation, private deployment environments, and no LuraLoop branding in any client-facing output. You source and retain 100% of the client relationship.',
  },
  {
    id: 'faq-pricing',
    q: 'Is there a minimum contract size or commitment required?',
    a: 'There is no minimum contract size or mandatory long-term commitment. We offer pilot engagements starting at a single workflow deployment, scaling to full enterprise infrastructure partnerships. Most clients begin with a 90-day pilot and expand organically based on ROI outcomes.',
  },
]

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <motion.div
      id={item.id}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-white/6 rounded-xl overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/3 transition-colors duration-200 group"
        aria-expanded={isOpen}
      >
        <span className={`text-sm font-medium leading-snug transition-colors duration-200 ${isOpen ? 'text-white' : 'text-white/65 group-hover:text-white/80'}`}>
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown size={16} className={`transition-colors duration-200 ${isOpen ? 'text-orange-400' : 'text-white/25'}`} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t border-white/5">
              <p className="text-white/45 text-sm leading-relaxed pt-4">{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(255,107,0,0.025) 50%, transparent 100%)' }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-tag justify-center"
          >
            <HelpCircle size={10} />
            Enterprise FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title text-center"
          >
            Common <span className="gradient-text">Enterprise Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 mt-4 text-sm max-w-md mx-auto"
          >
            Answers to the most critical friction points before deploying a production AI layer inside your operations.
          </motion.p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-white/25 text-sm mt-10"
        >
          Have a specific technical question?{' '}
          <a href="mailto:luraloop.official@gmail.com" className="text-orange-400 hover:text-orange-300 transition-colors">
            Contact our architecture team directly.
          </a>
        </motion.p>
      </div>
    </section>
  )
}
