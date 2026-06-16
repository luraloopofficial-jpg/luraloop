'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight, CheckCircle, X, Shield, Zap, Activity,
  Heart, GraduationCap, ShoppingBag, Home, Factory, Truck,
  Network, Globe, Lock, Users, Cpu, Database, GitBranch, MessageSquare
} from 'lucide-react'

const industries = [
  {
    tag: 'HEALTHCARE',
    name: 'ZIYA Healthcare',
    subtitle: 'Intelligent Front-Office Layer for Hospitals & Clinics',
    accent: '#3B82F6',
    Icon: Heart,
    id: 'industry-healthcare',
    capabilities: [
      '24/7 OP Appointment Booking via WhatsApp',
      'Real-time HMS & EMR Integration',
      'Doctor Availability & Token Management',
      'Multilingual Patient Communication',
      'HIPAA-aligned ephemeral data processing',
      'Automated Follow-up & Reminder Workflows',
    ],
    modalData: {
      problem: 'Hospital front offices are constrained to 8-hour availability windows. Missed calls lead to lost patients, manual double-bookings create operational friction, and high-volume enquiry periods overwhelm reception staff.',
      solution: 'A 24/7 AI receptionist layer deployed on WhatsApp, automating OP booking, instant token generation, and real-time doctor schedule queries. Operates in parallel with existing HMS without disruption.',
      architecture: 'Designed for HIPAA-aligned environments. Data processed ephemerally — no patient information is stored permanently. Syncs directly with the Hospital Management System via secure encrypted API adapters.',
      delivery: 'Standard module deployment in 48 hours. Custom HMS integration completed within 2 weeks. Ongoing managed operations and performance monitoring included.',
    }
  },
  {
    tag: 'EDUCATION',
    name: 'ZIYA Education',
    subtitle: 'AI Admissions & Student Engagement Layer',
    accent: '#8B5CF6',
    Icon: GraduationCap,
    id: 'industry-education',
    capabilities: [
      'Automated Admission Enquiry Handling',
      'LMS / SIS Integration & Sync',
      'Eligibility Checking & Course Guidance',
      'Fee Structure Automation',
      'Student Onboarding Workflow Orchestration',
      '24/7 Parent & Student Support Agent',
    ],
    modalData: {
      problem: 'Admissions staff are overwhelmed during peak intake periods. Delayed responses to parent and student enquiries result in lost conversions. Manual seat tracking introduces errors and compliance risk.',
      solution: '24/7 AI agent handling admission enquiries, eligibility verification, course and fee guidance, and student registration — all over WhatsApp without additional staff.',
      architecture: 'Built for GDPR-conscious data workflows. Syncs securely with the institution\'s LMS or SIS in real-time. No external student databases created or maintained by LuraLoop.',
      delivery: 'Deployable within 5 business days for standard LMS connectors. Complex multi-system integrations scoped on discovery.',
    }
  },
  {
    tag: 'COMMERCE',
    name: 'ZIYA Commerce',
    subtitle: 'AI Shopping & Customer Operations Agent',
    accent: '#FF6B00',
    Icon: ShoppingBag,
    id: 'industry-commerce',
    capabilities: [
      'AI Personal Shopper on WhatsApp',
      'Real-time Order Tracking & Status Updates',
      'Automated Return & Refund Processing',
      'Shopify / WooCommerce / ERP Sync',
      'Abandoned Cart Recovery Workflows',
      'Product Recommendation Engine',
    ],
    modalData: {
      problem: 'Cart abandonment driven by slow customer support response times. Manual handling of returns and refund requests consumes agent capacity. Complex product discovery leads to drop-off.',
      solution: 'An AI personal shopper deployed on WhatsApp handling order tracking, product queries, size guidance, and return requests natively — without routing to human agents for standard queries.',
      architecture: 'Connects live with e-commerce platform APIs (Shopify, WooCommerce, ERP) to pull order statuses and inventory data dynamically. No customer purchase history logged on LuraLoop infrastructure.',
      delivery: 'Standard Shopify and WooCommerce modules deploy in 48 hours. Custom ERP integrations scoped per engagement.',
    }
  },
  {
    tag: 'PROPERTY',
    name: 'ZIYA Property',
    subtitle: 'AI Lead Qualification & Site Scheduling Agent',
    accent: '#10B981',
    Icon: Home,
    id: 'industry-property',
    capabilities: [
      'Instant Lead Qualification on WhatsApp',
      'Budget & Location Preference Mapping',
      'Property Matching & Brochure Delivery',
      'Automated Site Visit Scheduling',
      'CRM Integration & Lead Routing',
      'After-Hours Lead Capture — Zero Loss',
    ],
    modalData: {
      problem: 'Property leads arriving from digital ad channels outside office hours go cold immediately. Manual property matching is slow and agent-dependent. Sales teams waste capacity on unverified or low-intent enquiries.',
      solution: 'An AI agent that instantly qualifies inbound leads on WhatsApp — collecting budget, location, and preference data, matching available properties, and booking site visits without agent involvement.',
      architecture: 'Direct encrypted API integration with the agency\'s CRM platform. All lead data is routed to existing client systems without being stored on LuraLoop servers.',
      delivery: 'CRM-connected module live within 5 business days. Operates 24/7 from day one of deployment.',
    }
  },
  {
    tag: 'INDUSTRIAL',
    name: 'ZIYA Industrial',
    subtitle: 'AI Operations & Compliance Workflow Layer',
    accent: '#F59E0B',
    Icon: Factory,
    id: 'industry-industrial',
    capabilities: [
      'Maintenance Request Routing & Escalation',
      'Compliance Documentation Automation',
      'Shift Scheduling & Workforce Notification',
      'ERP / MES Integration',
      'Incident Reporting & Audit Trail Generation',
      'Supplier Communication Workflow Automation',
    ],
    modalData: {
      problem: 'Industrial operations require rapid internal communication, accurate compliance documentation, and real-time escalation of maintenance and safety events — all currently handled manually with high error risk.',
      solution: 'An AI operations layer that automates maintenance request routing, compliance form generation, shift change notifications, and supplier communication directly within existing ERP and MES environments.',
      architecture: 'Built with enterprise security controls. Integrates with ERP and Manufacturing Execution Systems via secure API adapters. Supports on-premise deployment for regulated industrial environments.',
      delivery: 'Modular deployment approach. Core operational workflows live within 2 weeks. Full MES integration scoped on discovery.',
    }
  },
  {
    tag: 'LOGISTICS',
    name: 'ZIYA Logistics',
    subtitle: 'AI Shipment Tracking & Coordination Agent',
    accent: '#06B6D4',
    Icon: Truck,
    id: 'industry-logistics',
    capabilities: [
      'Real-time Shipment Status Notifications',
      'Courier API Integration & Tracking Sync',
      'Automated Delivery Exception Handling',
      'Customer-facing WhatsApp Tracking Agent',
      'Warehouse Coordination Workflow Automation',
      'Last-Mile Delivery Confirmation Loops',
    ],
    modalData: {
      problem: 'High-volume logistics operations generate thousands of customer shipment enquiries daily. Manual tracking responses consume agent hours. Delivery exceptions and delays require real-time coordination across teams.',
      solution: 'An AI logistics agent providing customers with real-time shipment status via WhatsApp, automating exception handling notifications, and coordinating internally with warehouse and delivery teams.',
      architecture: 'Integrates with courier APIs and warehouse management systems. All tracking data pulled live — no shipment records persisted on LuraLoop infrastructure.',
      delivery: 'Standard courier API connector modules deploy in 48 hours. Custom WMS integrations scoped per engagement.',
    }
  },
]

function CapabilityBullet({ text, accent }) {
  return (
    <li className="flex items-start gap-2.5 text-white/60 text-xs leading-relaxed">
      <CheckCircle size={13} style={{ color: accent }} className="shrink-0 mt-0.5" />
      {text}
    </li>
  )
}

export default function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState(null)
  const modalRef = useRef(null)

  useEffect(() => {
    const handle = (e) => {
      if (selectedIndustry && modalRef.current && !modalRef.current.contains(e.target)) {
        setSelectedIndustry(null)
      }
    }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [selectedIndustry])

  useEffect(() => {
    document.body.style.overflow = selectedIndustry ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [selectedIndustry])

  return (
    <section id="industries" className="py-28 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,107,0,0.04) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag justify-center"
          >
            Industry Modules
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title text-center"
          >
            The <span className="gradient-text">ZIYA</span> Module Family
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/35 mt-4 text-sm max-w-xl mx-auto leading-relaxed"
          >
            Sector-specific AI agent deployments built on the LuraLoop infrastructure layer. Each module is pre-integrated with the dominant systems of its vertical and deployable under your agency&apos;s brand.
          </motion.p>
        </div>

        {/* 6-column module grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.id}
              id={ind.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedIndustry(ind)}
              className="glass rounded-2xl overflow-hidden card-hover group cursor-pointer flex flex-col"
            >
              {/* Card header */}
              <div
                className="p-5 relative"
                style={{ background: `linear-gradient(135deg, ${ind.accent}0f 0%, rgba(17,17,17,0.95) 100%)` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${ind.accent}18`, border: `1px solid ${ind.accent}30` }}
                  >
                    <ind.Icon size={18} style={{ color: ind.accent }} />
                  </div>
                  <span
                    className="text-[9px] font-bold px-2 py-1 rounded-full"
                    style={{ background: `${ind.accent}15`, color: ind.accent, border: `1px solid ${ind.accent}28` }}
                  >
                    {ind.tag}
                  </span>
                </div>
                <h3 className="text-white font-bold text-base mb-1">{ind.name}</h3>
                <p className="text-white/40 text-xs leading-snug">{ind.subtitle}</p>
              </div>

              {/* Capabilities */}
              <div className="p-5 flex flex-col flex-1 gap-4">
                <ul className="space-y-2">
                  {ind.capabilities.slice(0, 4).map((cap, j) => (
                    <CapabilityBullet key={j} text={cap} accent={ind.accent} />
                  ))}
                </ul>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-white/20 text-[10px]">{ind.capabilities.length} capabilities</span>
                  <div
                    className="flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-250 translate-x-1 group-hover:translate-x-0"
                    style={{ color: ind.accent }}
                  >
                    View Module <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedIndustry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg"
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 18 }}
              transition={{ type: 'spring', damping: 26, stiffness: 320 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0A0A0A]/98 backdrop-blur-xl rounded-2xl shadow-2xl"
              style={{ border: `1px solid ${selectedIndustry.accent}30` }}
            >
              {/* Modal Header */}
              <div className="p-7 pb-5 border-b border-white/5">
                <button
                  onClick={() => setSelectedIndustry(null)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${selectedIndustry.accent}18`, border: `1px solid ${selectedIndustry.accent}30` }}
                  >
                    <selectedIndustry.Icon size={18} style={{ color: selectedIndustry.accent }} />
                  </div>
                  <div>
                    <span
                      className="text-[9px] font-bold uppercase tracking-widest"
                      style={{ color: selectedIndustry.accent }}
                    >
                      {selectedIndustry.tag}
                    </span>
                    <h2 className="text-white font-bold text-xl leading-tight">{selectedIndustry.name}</h2>
                  </div>
                </div>
                <p className="text-white/40 text-sm">{selectedIndustry.subtitle}</p>
              </div>

              <div className="p-7 space-y-6">
                {/* Full Capabilities */}
                <div>
                  <h4 className="text-white/55 text-[10px] font-semibold uppercase tracking-widest mb-3">Module Capabilities</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedIndustry.capabilities.map((cap, i) => (
                      <CapabilityBullet key={i} text={cap} accent={selectedIndustry.accent} />
                    ))}
                  </ul>
                </div>

                {/* Detail Sections */}
                {[
                  { label: 'Operational Problem', icon: Activity, iconClass: 'text-red-400', content: selectedIndustry.modalData.problem },
                  { label: 'LuraLoop Solution', icon: Zap, iconClass: 'text-emerald-400', content: selectedIndustry.modalData.solution },
                  { label: 'Architecture & Data Governance', icon: Shield, iconClass: 'text-blue-400', content: selectedIndustry.modalData.architecture },
                  { label: 'Deployment & Delivery', icon: GitBranch, iconClass: 'text-orange-400', content: selectedIndustry.modalData.delivery },
                ].map((sec, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                    <div className="shrink-0 mt-0.5">
                      <sec.icon size={16} className={sec.iconClass} />
                    </div>
                    <div>
                      <h4 className="text-white/70 font-semibold text-xs uppercase tracking-wide mb-2">{sec.label}</h4>
                      <p className="text-white/42 text-sm leading-relaxed">{sec.content}</p>
                    </div>
                  </div>
                ))}

                {/* CTA */}
                <div className="pt-2">
                  <a
                    href="#cta"
                    onClick={() => setSelectedIndustry(null)}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white text-sm transition-all hover:scale-[1.015] active:scale-[0.985]"
                    style={{ background: selectedIndustry.accent, boxShadow: `0 0 22px ${selectedIndustry.accent}40` }}
                  >
                    Deploy {selectedIndustry.name} Module <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
