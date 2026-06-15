'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle, X, Shield, Zap, DollarSign, Activity, MessageCircle, FileText, Share2, Database, Network, Globe, Briefcase, GraduationCap, ShoppingBag, Building, Lock, Users, Cpu } from 'lucide-react'

const industries = [
  {
    tag: 'HEALTHCARE',
    name: 'ZIYA Healthcare',
    subtitle: 'AI Receptionist for Hospitals & Clinics',
    accent: '#3B82F6',
    features: ['Appointment Booking', 'HMS Integration', 'Doctor Availability', '24/7 Patient Support'],
    bg: '/industry-healthcare.jpg',
    emoji: '🏥',
    id: 'industry-healthcare',
    modalData: {
      problem: 'Traditional receptions face limited 8-hour availability, missed calls leading to lost patients, human double-bookings, and high monthly staff salaries (₹15,000 - ₹20,000).',
      solution: 'A 24/7 WhatsApp-based virtual receptionist that automates OP booking, instant token generation, and real-time doctor schedules in Malayalam + English.',
      architecture: '100% data privacy. Zero permanent server storage; acts strictly as a secure processing layer syncing directly with the Hospital Management System (HMS).',
      pricing: 'One-time setup of ₹75,000 and ₹15,000/month operations. Handles 10,000+ monthly interactions and improves front desk efficiency by 2X.',
    }
  },
  {
    tag: 'EDUCATION',
    name: 'ZIYA Education',
    subtitle: 'AI Assistant for Schools & Colleges',
    accent: '#8B5CF6',
    features: ['Admission Automation', 'LMS Integration', 'Student Enquiries', 'Fee Automation'],
    bg: '/industry-education.jpg',
    emoji: '🎓',
    id: 'industry-education',
    modalData: {
      problem: 'Admissions staff overwhelmed during peak seasons, delayed email/call responses to parents, manual seat tracking errors, and high operational management overhead.',
      solution: '24/7 automated handling of admission enquiries, instant eligibility checking, course/fee structure guidance, and fast student registration over WhatsApp.',
      architecture: 'Syncs securely in real-time with the school/college Learning Management System (LMS) or Student Information System (SIS). No external student databases stored.',
      pricing: 'Transparent enterprise plans to optimize institutional workflows and eliminate entry bottlenecks.',
    }
  },
  {
    tag: 'REAL ESTATE',
    name: 'ZIYA Estate',
    subtitle: 'AI Agent for Real Estate Businesses',
    accent: '#10B981',
    features: ['Lead Qualification', 'Property Matching', 'Site Visit Scheduling', 'CRM Integration'],
    bg: '/industry-realestate.jpg',
    emoji: '🏢',
    id: 'industry-estate',
    modalData: {
      problem: 'Property leads coming from multiple ad channels at midnight go cold, manual property matching is slow, and sales agents waste time on unverified calls.',
      solution: 'AI instant lead qualification on WhatsApp. Collects budget/location preferences, matches properties automatically, and schedules real-time site visits seamlessly.',
      architecture: 'Direct secure API connection with the agency\'s Central Customer Relationship Management (CRM) platform with encrypted end-to-end user communication.',
      pricing: 'Scales conversion rates instantly, slashes agent workload, and ensures zero midnight lead loss.',
    }
  },
  {
    tag: 'E-COMMERCE',
    name: 'ZIYA Commerce',
    subtitle: 'AI Shopping Assistant for Online Stores',
    accent: '#FF6B00',
    features: ['AI Personal Shopper', 'Order Tracking', 'Customer Support', 'Product Recommendations'],
    bg: '/industry-ecommerce.jpg',
    emoji: '🛒',
    id: 'industry-commerce',
    modalData: {
      problem: 'Cart abandonment due to slow support, complex product discovery, manual sorting of return/refund tickets, and constant customer frustration.',
      solution: 'Acts as an AI Personal Shopper on WhatsApp. Handles automated order tracking, answers product size queries, and processes instant return requests natively.',
      architecture: 'Connects live with the E-Commerce platform API (Shopify, WooCommerce, ERP) to pull order statuses and inventory dynamically without local data logging.',
      pricing: 'Drives repetitive buying behavior, maintains higher retention, and significantly reduces ticket queues.',
    }
  },
]

export default function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState(null)
  const [showServicesModal, setShowServicesModal] = useState(false)
  const modalRef = useRef(null)
  const servicesModalRef = useRef(null)

  // Close modal on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectedIndustry && modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedIndustry(null)
      }
      if (showServicesModal && servicesModalRef.current && !servicesModalRef.current.contains(event.target)) {
        setShowServicesModal(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [selectedIndustry, showServicesModal])

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedIndustry || showServicesModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [selectedIndustry, showServicesModal])

  return (
    <section id="industries" className="py-28 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,107,0,0.04) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-tag"
            >
              Industries We Serve
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title"
            >
              AI Solutions for <span className="gradient-text">Every Industry</span>
            </motion.h2>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={(e) => { e.preventDefault(); setShowServicesModal(true); }}
            className="flex items-center gap-2 text-orange-500 text-sm font-medium hover:gap-3 transition-all duration-300 bg-transparent border-none p-0 cursor-pointer"
          >
            Explore All Industries <ArrowRight size={14} />
          </motion.button>
        </div>

        {/* Cards Grid — always visible across all breakpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              id={ind.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.01 }}
              onClick={() => setSelectedIndustry(ind)}
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              style={{ minHeight: 420 }}
            >
              {/* Cinematic Background with hover zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${ind.bg})` }}
              />
              {/* High-contrast gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse 80% 50% at 50% 100%, ${ind.accent}22 0%, transparent 60%)` }}
              />
              {/* Hover border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ border: `1px solid ${ind.accent}44` }}
              />

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-end" style={{ minHeight: 420 }}>
                <div
                  className="absolute top-5 left-5 text-[9px] font-bold tracking-widest px-2.5 py-1 rounded-full"
                  style={{ background: `${ind.accent}22`, color: ind.accent, border: `1px solid ${ind.accent}44` }}
                >
                  {ind.tag}
                </div>
                <h3 className="text-white text-xl font-bold mb-1 drop-shadow-md">{ind.name}</h3>
                <p className="text-white/90 font-medium text-sm mb-5 leading-relaxed drop-shadow-md">{ind.subtitle}</p>
                <ul className="space-y-2 mb-5">
                  {ind.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-2 text-white font-medium text-xs drop-shadow-sm">
                      <CheckCircle size={14} style={{ color: ind.accent }} className="shrink-0 drop-shadow-md" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-9 h-9 rounded-xl flex items-center justify-center self-end opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                  style={{ background: ind.accent, boxShadow: `0 0 20px ${ind.accent}66` }}
                  aria-label={`Learn more about ${ind.name}`}
                >
                  <ArrowRight size={14} className="text-white" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedIndustry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg"
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass border rounded-2xl shadow-2xl flex flex-col md:flex-row scrollbar-thin scrollbar-thumb-white/10"
              style={{ borderColor: `${selectedIndustry.accent}44` }}
            >
              {/* Left side: Image & Title */}
              <div className="md:w-2/5 relative min-h-[250px] md:min-h-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${selectedIndustry.bg})` }} 
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent" />
                <div className="relative z-10 h-full p-8 flex flex-col justify-end md:justify-center">
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedIndustry.name}</h2>
                  <p className="text-white/80 font-medium text-sm leading-relaxed">{selectedIndustry.subtitle}</p>
                </div>
              </div>

              {/* Right side: Detailed Data */}
              <div className="md:w-3/5 p-8 md:p-10 bg-[#0B0B0B]/95 space-y-8">
                <button
                  onClick={() => setSelectedIndustry(null)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>

                {/* Sections Array Map for 3D Float Animation */}
                {[
                  { title: 'The Problem', content: selectedIndustry.modalData.problem, icon: Activity, iconColor: 'text-red-400', iconBg: 'bg-red-500/10', iconBorder: 'border-red-500/20', hoverShadow: '0 10px 30px -10px rgba(239,68,68,0.3)', borderHover: 'rgba(239,68,68,0.2)' },
                  { title: 'The Solution (Ziya AI)', content: selectedIndustry.modalData.solution, icon: Zap, iconColor: 'text-green-400', iconBg: 'bg-green-500/10', iconBorder: 'border-green-500/20', hoverShadow: '0 10px 30px -10px rgba(34,197,94,0.3)', borderHover: 'rgba(34,197,94,0.2)' },
                  { title: 'Architecture & Security', content: selectedIndustry.modalData.architecture, icon: Shield, iconColor: 'text-blue-400', iconBg: 'bg-blue-500/10', iconBorder: 'border-blue-500/20', hoverShadow: '0 10px 30px -10px rgba(59,130,246,0.3)', borderHover: 'rgba(59,130,246,0.2)' },
                  { title: 'Pricing & Value', content: selectedIndustry.modalData.pricing, icon: DollarSign, iconColor: 'text-orange-400', iconBg: 'bg-orange-500/10', iconBorder: 'border-orange-500/20', hoverShadow: '0 10px 30px -10px rgba(255,107,0,0.3)', borderHover: 'rgba(255,107,0,0.2)' },
                ].map((sec, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -4, 
                      boxShadow: sec.hoverShadow,
                      borderColor: sec.borderHover,
                      backgroundColor: 'rgba(255,255,255,0.02)'
                    }}
                    className="flex gap-4 p-4 -mx-4 rounded-2xl border border-transparent transition-colors duration-300 transform-gpu cursor-default"
                  >
                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${sec.iconBg} border ${sec.iconBorder} ${sec.iconColor}`}>
                      <sec.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">{sec.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{sec.content}</p>
                    </div>
                  </motion.div>
                ))}
                
                {/* CTA */}
                <div className="pt-6 border-t border-white/5">
                  <button 
                    className="w-full py-3 rounded-xl font-medium text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
                    style={{ background: selectedIndustry.accent, boxShadow: `0 0 20px ${selectedIndustry.accent}44` }}
                  >
                    Deploy for {selectedIndustry.name}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Services Modal Overlay */}
      <AnimatePresence>
        {showServicesModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              ref={servicesModalRef}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-[#050505]/95 backdrop-blur-xl border border-zinc-900 rounded-2xl shadow-2xl p-8 md:p-12 scrollbar-thin scrollbar-thumb-zinc-800"
            >
              <button
                onClick={() => setShowServicesModal(false)}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>

              {/* Global Header */}
              <div className="text-center mb-16">
                <span className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-3 block">
                  LURA LOOP | MULTI-AGENT ORCHESTRATION LAB
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Enterprise Infrastructure for the <span className="text-orange-500">Agentic Era</span>
                </h2>
                <p className="text-zinc-300 text-xl font-medium mb-6">
                  Smarter Workflows. Zero Latency. Absolute Precision.
                </p>
                <p className="text-zinc-400 text-base max-w-3xl mx-auto leading-relaxed">
                  The exact 'Multi-Agent Cognitive Framework' used by Fortune 500 companies in Silicon Valley to 100% automate their back-office operations, now available for your business.
                </p>
              </div>

              {/* SECTION 1: Architecture */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Network className="text-orange-500" />
                  The Enterprise Multi-Agent Architecture
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { title: 'The Intent Router', role: 'The Front Office', desc: 'Instantly identifies incoming leads or customer requirements within seconds and cross-references them with the database.' },
                    { title: 'Cognitive Strategy Director', role: 'The Manager', desc: 'Formulates a strategy based on the customer\'s needs and delegates tasks to staff agents in real-time. [Powered by Anthropic Claude]' },
                    { title: 'Specialized Autonomous Executors', role: 'The Workers', desc: 'Completes database updates, payment gateway triggers, PDF generation, and media delivery entirely without human intervention. [Powered by Meta Llama & Google Gemini]' },
                    { title: 'The Self-Healing Audit Engine', role: 'The Auditor Loop', desc: 'A security loop running in the back-end to ensure every message and output going to the client is 100% accurate. If any error is detected, the system autonomously self-heals and corrects it.' },
                  ].map((node, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:border-orange-500/30 transition-all group">
                      <div className="text-orange-500 text-sm font-bold mb-1">{node.role}</div>
                      <h4 className="text-white text-lg font-semibold mb-3 group-hover:text-orange-400 transition-colors">{node.title}</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">{node.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 2: Use Cases */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Globe className="text-orange-500" />
                  Global Industry Use-Cases
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50">
                    <div className="flex items-center gap-3 mb-4">
                      <Briefcase className="text-blue-500" />
                      <h4 className="text-white text-xl font-bold">Financial & FinTech Operations</h4>
                    </div>
                    <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full mb-4">Multi-Bank Group Model</span>
                    <p className="text-zinc-400 text-sm mb-4 leading-relaxed"><strong className="text-zinc-200">How it works:</strong> This agent cluster handles customer KYC document verification, live trading database updates, and automated financial report generation.</p>
                    <p className="text-zinc-400 text-sm leading-relaxed"><strong className="text-zinc-200">The Impact:</strong> Reduces human errors to 0%. Ensures banking-grade security and 24/7 live support.</p>
                  </div>

                  <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50">
                    <div className="flex items-center gap-3 mb-4">
                      <GraduationCap className="text-purple-500" />
                      <h4 className="text-white text-xl font-bold">Next-Gen Academic Institutions</h4>
                    </div>
                    <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-semibold rounded-full mb-4">Workato Education Model</span>
                    <p className="text-zinc-400 text-sm mb-4 leading-relaxed"><strong className="text-zinc-200">How it works:</strong> Converts customer leads from advertisements entirely into admissions via AI counseling. Teaches course syllabuses and lecture recordings to students 24/7 via RAG (Knowledge Retrieval).</p>
                    <p className="text-zinc-400 text-sm leading-relaxed"><strong className="text-zinc-200">Predictive Advantage:</strong> Live tracks new Meta/Google algorithms to predict in advance how much reach your content will get.</p>
                  </div>

                  <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50">
                    <div className="flex items-center gap-3 mb-4">
                      <ShoppingBag className="text-orange-500" />
                      <h4 className="text-white text-xl font-bold">High-Volume E-Commerce Engines</h4>
                    </div>
                    <span className="inline-block px-3 py-1 bg-orange-500/10 text-orange-400 text-xs font-semibold rounded-full mb-4">Amazon/Shopify Smart Model</span>
                    <p className="text-zinc-400 text-sm mb-4 leading-relaxed"><strong className="text-zinc-200">How it works:</strong> Analyzes the customer's past purchase history to autonomously suggest products they might like via WhatsApp. Brings back users who haven't completed their purchase by providing offers through 'Abandoned Cart' loops.</p>
                    <p className="text-zinc-400 text-sm leading-relaxed"><strong className="text-zinc-200">The Impact:</strong> Live order tracking and refund processes become 100% automated via Courier APIs.</p>
                  </div>

                  <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50">
                    <div className="flex items-center gap-3 mb-4">
                      <Building className="text-green-500" />
                      <h4 className="text-white text-xl font-bold">Real Estate & Property Developers</h4>
                    </div>
                    <span className="inline-block px-3 py-1 bg-green-500/10 text-green-400 text-xs font-semibold rounded-full mb-4">Smart Realty Model</span>
                    <p className="text-zinc-400 text-sm leading-relaxed"><strong className="text-zinc-200">How it works:</strong> Collects the client's budget and location, finds exact matches from the property list, and sends photos and brochures. Autonomously schedules site visits.</p>
                  </div>
                </div>
              </div>

              {/* SECTION 3: Security */}
              <div className="pt-8 border-t border-zinc-800/50">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3">
                  <Shield className="text-orange-500" />
                  Silicon Valley Compliance & Security
                </h3>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                  <div className="flex-1 flex flex-col items-center text-center p-6">
                    <Lock className="text-orange-500 mb-4" size={32} />
                    <h4 className="text-white font-bold mb-3">Zero-Data Retention</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">Your business data is not permanently stored on AI servers. It merely acts as a Secure Processing Layer.</p>
                  </div>
                  <div className="flex-1 flex flex-col items-center text-center p-6">
                    <Users className="text-orange-500 mb-4" size={32} />
                    <h4 className="text-white font-bold mb-3">Human-In-The-Loop (HITL)</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">A control system that ensures manual human approval over the AI for highly critical decisions or payments.</p>
                  </div>
                  <div className="flex-1 flex flex-col items-center text-center p-6">
                    <Cpu className="text-orange-500 mb-4" size={32} />
                    <h4 className="text-white font-bold mb-3">Enterprise Scalability</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">The capacity to seamlessly converse and process data with tens of thousands of customers simultaneously without interruption.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
