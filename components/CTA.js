'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle, Loader2, Calendar, Building2, ChevronDown } from 'lucide-react'

const ENGAGEMENT_TYPES = [
  'Agency / Reseller Partner',
  'System Integrator',
  'Enterprise Direct',
  'Consulting Firm',
  'IT Transformation Partner',
  'Other',
]

export default function CTA() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ name: '', email: '', company: '', engagement: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const update = (key, val) => setForm(f => ({ ...f, [key]: val }))

  const validateStep1 = () => {
    const e = {}
    if (!form.name.trim() || form.name.trim().length < 2) e.name = 'Enter your full name.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid work email.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const validateStep2 = () => {
    const e = {}
    if (!form.company.trim() || form.company.trim().length < 2) e.company = 'Enter your company name.'
    if (!form.engagement) e.engagement = 'Select your engagement type.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateStep2()) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 1800))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="cta" className="py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,107,0,0.07) 0%, rgba(255,107,0,0.02) 40%, transparent 70%)' }}
      />
      <div className="absolute inset-0 grid-overlay opacity-35 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/35 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/15 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag justify-center"
          >
            <Calendar size={10} />
            Schedule a 30-Min Partner Architecture Call
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="text-5xl md:text-6xl font-bold text-white leading-tight mb-5"
          >
            Ready to Add AI to Your <span className="gradient-text">Delivery Stack?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="text-white/45 text-lg max-w-xl mx-auto"
          >
            Tell us about your agency or enterprise engagement. Our team will map a deployment blueprint within 24 hours.
          </motion.p>
        </div>

        {/* Multi-Step Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.22 }}
          className="max-w-xl mx-auto"
        >
          <div className="glass rounded-2xl border border-white/8 overflow-hidden" style={{ boxShadow: '0 0 50px rgba(255,107,0,0.05)' }}>
            <div className="h-px bg-gradient-to-r from-transparent via-orange-500/45 to-transparent" />

            <div className="p-8">
              {!submitted ? (
                <>
                  {/* Step Indicator */}
                  <div className="flex items-center gap-3 mb-8">
                    {[1, 2].map(s => (
                      <div key={s} className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          step >= s ? 'bg-orange-500 text-white shadow-[0_0_14px_rgba(255,107,0,0.38)]' : 'bg-white/5 text-white/25 border border-white/8'
                        }`}>
                          {step > s ? <CheckCircle size={13} /> : s}
                        </div>
                        <span className={`text-xs font-medium ${step >= s ? 'text-white/65' : 'text-white/22'}`}>
                          {s === 1 ? 'Contact Details' : 'Engagement Profile'}
                        </span>
                        {s < 2 && <div className="w-8 h-px bg-white/8 mx-1" />}
                      </div>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div key="s1" initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }} transition={{ duration: 0.18 }} className="flex flex-col gap-4">
                        <div>
                          <label className="text-white/45 text-[10px] font-semibold uppercase tracking-widest block mb-1.5">Full Name</label>
                          <input id="cta-name" type="text" value={form.name} onChange={e => update('name', e.target.value)} placeholder="Jane Smith"
                            className={`w-full bg-[#111]/60 border ${errors.name ? 'border-red-500/45' : 'border-zinc-800'} focus:border-orange-500 focus:ring-1 focus:ring-orange-500/40 text-white rounded-lg p-3 outline-none placeholder-zinc-600 transition-all text-sm`} />
                          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <label className="text-white/45 text-[10px] font-semibold uppercase tracking-widest block mb-1.5">Work Email</label>
                          <input id="cta-email" type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="jane@agency.com"
                            className={`w-full bg-[#111]/60 border ${errors.email ? 'border-red-500/45' : 'border-zinc-800'} focus:border-orange-500 focus:ring-1 focus:ring-orange-500/40 text-white rounded-lg p-3 outline-none placeholder-zinc-600 transition-all text-sm`} />
                          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                        </div>
                        <button type="button" onClick={() => { if (validateStep1()) setStep(2) }} id="cta-step1-next"
                          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white text-sm transition-all duration-250 hover:scale-[1.015] active:scale-[0.985] mt-2"
                          style={{ background: '#FF6B00', boxShadow: '0 0 22px rgba(255,107,0,0.28)' }}>
                          Continue <ArrowRight size={15} />
                        </button>
                      </motion.div>
                    )}
                    {step === 2 && (
                      <motion.form key="s2" initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }} transition={{ duration: 0.18 }} onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div>
                          <label className="text-white/45 text-[10px] font-semibold uppercase tracking-widest block mb-1.5">Company / Agency Name</label>
                          <input id="cta-company" type="text" value={form.company} onChange={e => update('company', e.target.value)} placeholder="Acme Consulting"
                            className={`w-full bg-[#111]/60 border ${errors.company ? 'border-red-500/45' : 'border-zinc-800'} focus:border-orange-500 focus:ring-1 focus:ring-orange-500/40 text-white rounded-lg p-3 outline-none placeholder-zinc-600 transition-all text-sm`} />
                          {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company}</p>}
                        </div>
                        <div>
                          <label className="text-white/45 text-[10px] font-semibold uppercase tracking-widest block mb-1.5">Engagement Type</label>
                          <div className="relative">
                            <select id="cta-engagement" value={form.engagement} onChange={e => update('engagement', e.target.value)}
                              className={`w-full appearance-none bg-[#111]/60 border ${errors.engagement ? 'border-red-500/45' : 'border-zinc-800'} focus:border-orange-500 focus:ring-1 focus:ring-orange-500/40 text-white rounded-lg p-3 outline-none transition-all text-sm pr-9`}>
                              <option value="" className="bg-[#111]">Select engagement type...</option>
                              {ENGAGEMENT_TYPES.map(u => <option key={u} value={u} className="bg-[#111]">{u}</option>)}
                            </select>
                            <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                          </div>
                          {errors.engagement && <p className="text-red-400 text-xs mt-1">{errors.engagement}</p>}
                        </div>
                        <div className="flex gap-3 mt-2">
                          <button type="button" onClick={() => { setStep(1); setErrors({}) }}
                            className="flex-1 py-3 rounded-xl text-sm text-white/45 border border-white/8 hover:bg-white/4 transition-colors">Back</button>
                          <button type="submit" id="cta-submit" disabled={loading}
                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white text-sm transition-all duration-250 hover:scale-[1.015] active:scale-[0.985] disabled:opacity-55"
                            style={{ background: '#FF6B00', boxShadow: '0 0 22px rgba(255,107,0,0.28)' }}>
                            {loading ? <Loader2 size={15} className="animate-spin" /> : <><Calendar size={13} /> Book Partner Call</>}
                          </button>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', damping: 14, stiffness: 180, delay: 0.1 }}
                    className="w-18 h-18 w-[72px] h-[72px] rounded-full border border-emerald-500/28 flex items-center justify-center mx-auto mb-6 bg-emerald-500/9 shadow-[0_0_28px_rgba(16,185,129,0.18)]">
                    <CheckCircle className="text-emerald-500 w-9 h-9" strokeWidth={2.5} />
                  </motion.div>
                  <h3 className="text-white font-bold text-xl mb-3">Partner Call Confirmed</h3>
                  <p className="text-zinc-400 text-sm max-w-sm mx-auto leading-relaxed">
                    Our architecture team will contact <span className="text-white font-medium">{form.email}</span> within 24 hours to confirm your session and begin deployment scoping.
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-xs text-white/25">
                    <Building2 size={11} />
                    {form.company} · {form.engagement}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
