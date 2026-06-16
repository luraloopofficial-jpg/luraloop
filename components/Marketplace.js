'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Heart, Home, GraduationCap, ShoppingBag, MessageSquare, Briefcase, Star, Shield } from 'lucide-react'

const workflows = [
  {
    id: 'wf-hipaa',
    Icon: Heart,
    tag: 'Healthcare',
    tagColor: '#F87171',
    title: 'Omnichannel HIPAA-Compliant Data Sync',
    desc: 'End-to-end encrypted patient data orchestration layer. Syncs HMS, EHR, and appointment systems in real-time with zero data persistence.',
    complexity: 'Enterprise',
    rating: 5.0,
  },
  {
    id: 'wf-escrow',
    Icon: Home,
    tag: 'Real Estate',
    tagColor: '#34D399',
    title: 'Real Estate Escrow Multi-Agent Ledger',
    desc: 'Autonomous multi-agent system managing escrow verification, document routing, and CRM lead qualification across property pipelines.',
    complexity: 'Enterprise',
    rating: 4.9,
  },
  {
    id: 'wf-edtech',
    Icon: GraduationCap,
    tag: 'EdTech',
    tagColor: '#818CF8',
    title: 'EdTech LMS Admission Intelligence Engine',
    desc: 'AI-powered admissions engine processing 24/7 enquiries, eligibility checks, and fee guidance. Syncs directly with SIS and LMS platforms.',
    complexity: 'Mid-Market',
    rating: 4.9,
  },
  {
    id: 'wf-inventory',
    Icon: ShoppingBag,
    tag: 'E-Commerce',
    tagColor: '#FBBF24',
    title: 'E-Commerce Inventory Reorder Automation',
    desc: 'Predictive reorder triggers integrated with Shopify / WooCommerce ERP APIs. Eliminates stockout events and reduces overstock by 40%.',
    complexity: 'Mid-Market',
    rating: 4.8,
  },
  {
    id: 'wf-ziya',
    Icon: MessageSquare,
    tag: 'Healthcare',
    tagColor: '#F87171',
    title: 'ZIYA — Healthcare OP Booking AI Receptionist',
    desc: '24/7 WhatsApp AI agent handling OP bookings, doctor availability, and patient follow-ups in Malayalam & English. Zero permanent storage.',
    complexity: 'Enterprise',
    rating: 5.0,
  },
  {
    id: 'wf-b2b',
    Icon: Briefcase,
    tag: 'B2B Sales',
    tagColor: '#38BDF8',
    title: 'B2B WhatsApp Lead Qualification Pipeline',
    desc: 'Autonomous WhatsApp-first lead qualification agent that scores, segments, and routes inbound B2B leads directly into your CRM in real-time.',
    complexity: 'Growth',
    rating: 4.9,
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={10}
          className={i < Math.floor(rating) ? 'text-orange-400 fill-orange-400' : 'text-white/20'}
        />
      ))}
      <span className="text-white/40 text-[10px] ml-1">{rating}</span>
    </div>
  )
}

export default function Marketplace() {
  return (
    <section id="marketplace" className="py-28 relative">
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 100%, rgba(255,107,0,0.06) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="section-tag"
            >
              Workflow Blueprint Library
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title max-w-lg"
            >
              Production-Ready <span className="gradient-text">AI Workflow</span> Blueprints
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/40 text-sm mt-3 max-w-md"
            >
              Pre-engineered multi-agent automation architectures. Each blueprint is deployable within 48 hours via our white-label infrastructure layer.
            </motion.p>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="https://luraloop.gumroad.com/"
            target="_blank"
            rel="noopener noreferrer"
            id="browse-marketplace"
            className="btn-primary shrink-0 self-start"
          >
            Browse All Blueprints <ExternalLink size={14} />
          </motion.a>
        </div>

        {/* Workflow Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {workflows.map((wf, i) => (
            <motion.div
              key={wf.id}
              id={wf.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl overflow-hidden card-hover group flex flex-col"
            >
              {/* Card Header */}
              <div
                className="p-5 relative"
                style={{ background: 'linear-gradient(135deg, rgba(255,107,0,0.07) 0%, rgba(17,17,17,0.9) 100%)' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${wf.tagColor}18`, border: `1px solid ${wf.tagColor}30` }}
                  >
                    <wf.Icon size={18} style={{ color: wf.tagColor }} />
                  </div>
                  <span
                    className="text-[9px] font-bold px-2 py-1 rounded-full"
                    style={{ background: `${wf.tagColor}18`, color: wf.tagColor, border: `1px solid ${wf.tagColor}30` }}
                  >
                    {wf.tag}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-sm leading-snug">{wf.title}</h3>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1 gap-4 justify-between">
                <p className="text-white/40 text-xs leading-relaxed">{wf.desc}</p>
                <div className="flex items-center justify-between">
                  <StarRating rating={wf.rating} />
                  <span className="text-[9px] font-semibold text-white/30 border border-white/10 rounded-full px-2 py-0.5">
                    {wf.complexity}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="glass rounded-full px-5 py-2.5 flex items-center gap-3 text-xs text-white/40">
            <Shield size={12} className="text-orange-500" />
            All blueprints deployed under
            <span className="text-white font-semibold">Zero Permanent Data Storage</span>
            <span className="text-white/20">·</span>
            Enterprise-Grade Security
          </div>
        </motion.div>
      </div>
    </section>
  )
}
