'use client'

import { useState } from 'react'
import { X, ArrowUpRight, Radio } from 'lucide-react'

// ─────────────────────────────────────────────
// SVG Social Icons (kept as-is — zero deps)
// ─────────────────────────────────────────────
const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

const XIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

// ─────────────────────────────────────────────
// Static data
// ─────────────────────────────────────────────
const footerLinks = {
  Platform: ['Architecture', 'Integration Adapters', 'API Reference', 'Changelog'],
  'Partner Program': ['Reseller Model', 'SLA Framework', 'Partner Enablement', 'Apply as Partner'],
  'Industry Modules': ['ZIYA Healthcare', 'ZIYA Education', 'ZIYA Commerce', 'ZIYA Property'],
  Security: ['Data Governance', 'Zero-Retention Policy', 'Access Isolation', 'Trust Center'],
  Company: ['About', 'Blog', 'Contact Us', 'R&D'],
}

const socialLinks = [
  { Icon: LinkedInIcon, href: 'https://linkedin.com/company/luraloop', label: 'LinkedIn' },
  { Icon: XIcon, href: 'https://x.com/LURALOOP', label: 'X (Twitter)' },
  { Icon: GitHubIcon, href: 'https://github.com/luraloopofficial-jpg', label: 'GitHub' },
]

// ─────────────────────────────────────────────
// R&D Registry Data — Frontier AI Model Matrix
// ─────────────────────────────────────────────
const rdModels = [
  {
    id: 'openai',
    org: 'OpenAI',
    orgTag: 'GPT / o-Series',
    badge: 'DEPLOYMENT FRONTIER',
    badgeColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    accentColor: '#10B981',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-400">
        <path d="M22.28 9.29a5.85 5.85 0 0 0-.52-4.84 6 6 0 0 0-6.44-2.85A5.86 5.86 0 0 0 10.93.76 6 6 0 0 0 5.2 3.45a5.86 5.86 0 0 0-3.93 2.83 6 6 0 0 0 .74 7 5.86 5.86 0 0 0 .52 4.84 6 6 0 0 0 6.44 2.85 5.85 5.85 0 0 0 4.39 1.95 6 6 0 0 0 5.72-4.14 5.85 5.85 0 0 0 3.93-2.83 6 6 0 0 0-.73-7.06zM13.1 21.5a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.77.77 0 0 0 .39-.68v-6.73l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.51 4.51 0 0 1-4.49 4.49zm-9.65-4.13a4.48 4.48 0 0 1-.54-3.01l.14.09 4.78 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06L9.6 19.01a4.5 4.5 0 0 1-6.15-1.64zm-1.26-10.4a4.47 4.47 0 0 1 2.34-1.97v5.68a.77.77 0 0 0 .39.67l5.83 3.37-2.01 1.16a.08.08 0 0 1-.07 0L4.2 12.74a4.5 4.5 0 0 1-2.01-5.77zm16.55 3.86-5.84-3.38 2.01-1.16a.08.08 0 0 1 .07 0l4.48 2.58a4.5 4.5 0 0 1-.69 8.12v-5.68a.78.78 0 0 0-.03-.48zm2.01-3.04-.14-.08-4.78-2.75a.78.78 0 0 0-.78 0L9.21 8.33V6a.08.08 0 0 1 .03-.06l4.48-2.58a4.49 4.49 0 0 1 6.03 4.93zm-12.63 4.15L6.11 10.77a.08.08 0 0 1-.04-.06V5.13a4.49 4.49 0 0 1 7.36-3.45l-.14.08-4.78 2.76a.78.78 0 0 0-.39.68v6.74zm1.09-2.35 2.6-1.5 2.6 1.5v2.99l-2.6 1.5-2.6-1.5v-2.99z"/>
      </svg>
    ),
    context: 'Advanced Multi-Modal Logic & Reasoning Engine — frontier LLM architecture powering enterprise-grade cognitive automation pipelines.',
    link: 'https://openai.com/news/',
    linkLabel: 'Verify Model Release Capabilities',
  },
  {
    id: 'anthropic',
    org: 'Anthropic',
    orgTag: 'Claude Series',
    badge: 'INTELLIGENCE LAYER',
    badgeColor: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    accentColor: '#8B5CF6',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-violet-400">
        <path d="M13.827 3.52h-3.654L5.828 20h3.3l.874-2.498h4.952L15.829 20h3.3L13.827 3.52zm-3.044 11.434 1.738-5.164 1.737 5.164H10.783z"/>
      </svg>
    ),
    context: 'Deep Artifact Processing & High-Context Enterprise Automation — Constitutional AI layer enabling safe, structured B2B2B workflow reasoning at scale.',
    link: 'https://www.anthropic.com/news',
    linkLabel: 'Inspect Claude Architecture Notes',
  },
  {
    id: 'deepmind',
    org: 'Google DeepMind',
    orgTag: 'Gemini / Gemma Series',
    badge: 'MATRIX REGISTRY',
    badgeColor: 'text-sky-400 bg-sky-400/10 border-sky-400/20',
    accentColor: '#38BDF8',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-sky-400">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c1.93 0 3.733.572 5.243 1.556L3.556 17.243A9.964 9.964 0 0 1 2 12C2 6.477 6.477 2 12 2zm0 20c-1.93 0-3.733-.572-5.243-1.556L20.444 6.757A9.964 9.964 0 0 1 22 12c0 5.523-4.477 10-10 10z"/>
      </svg>
    ),
    context: 'Massive Token Context Windows & Native Video-to-Code Pipeline Syncing — multi-modal foundation model registry driving real-time media and data intelligence.',
    link: 'https://deepmind.google/technologies/',
    linkLabel: 'View Live Model Registry',
  },
]

// ─────────────────────────────────────────────
// R&D Modal Component
// ─────────────────────────────────────────────
function RdModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="R&D Intelligence Hub"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/8 bg-[#0D0D0D] shadow-2xl">
        
        {/* ── Header ── */}
        <div className="sticky top-0 z-20 flex items-start justify-between gap-4 rounded-t-2xl border-b border-white/8 bg-[#0D0D0D] px-6 py-5">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              {/* Pulsing Live Indicator */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-400">
                System Status: Live Research Lab Feed
              </span>
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              R&D Intelligence Hub
            </h2>
            <p className="mt-1 text-xs text-white/35">
              Frontier AI Model Architecture Registry · Monitored Hourly
            </p>
          </div>

          <button
            id="rd-modal-close"
            onClick={onClose}
            aria-label="Close R&D modal"
            className="flex-shrink-0 rounded-lg border border-white/10 bg-white/5 p-2 text-white/40 transition-colors hover:border-white/20 hover:text-white/80"
          >
            <X size={16} />
          </button>
        </div>

        {/* ── Model Grid ── */}
        <div className="flex flex-col gap-px p-6 pt-5">

          {/* Section label */}
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/25">
            Deep Authority Routing Grid — 3 Frontier Registries
          </p>

          {rdModels.map((model, idx) => (
            <article
              key={model.id}
              className="group relative mb-3 overflow-hidden rounded-xl border border-white/6 bg-[#141414] p-5 transition-all duration-300 hover:border-white/12 hover:bg-[#181818]"
            >
              {/* Faint left accent bar */}
              <div
                className="absolute left-0 top-0 h-full w-0.5 rounded-l-xl opacity-60"
                style={{ backgroundColor: model.accentColor }}
              />

              {/* Row index */}
              <div className="absolute right-4 top-4 text-[10px] font-mono text-white/15">
                {String(idx + 1).padStart(2, '0')}
              </div>

              {/* Top row — icon + name + badge */}
              <div className="mb-3 flex items-start gap-3">
                <div className="flex-shrink-0 rounded-lg border border-white/8 bg-white/4 p-2.5">
                  {model.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <h3 className="text-sm font-bold text-white">{model.org}</h3>
                    <span className="text-[10px] text-white/30 font-mono">{model.orgTag}</span>
                  </div>
                  <span
                    className={`inline-block rounded border px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-widest ${model.badgeColor}`}
                  >
                    {model.badge}
                  </span>
                </div>
              </div>

              {/* Context */}
              <p className="mb-4 text-xs leading-relaxed text-white/45 pl-0.5">
                {model.context}
              </p>

              {/* Action link */}
              <a
                href={model.link}
                target="_blank"
                rel="noopener noreferrer"
                id={`rd-link-${model.id}`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/4 px-3.5 py-2 text-[11px] font-semibold text-white/60 transition-all duration-200 hover:border-white/20 hover:bg-white/8 hover:text-white"
              >
                {model.linkLabel}
                <ArrowUpRight size={12} className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </article>
          ))}
        </div>

        {/* ── Institutional Alignment Sync Banner ── */}
        <div className="mx-6 mb-6 rounded-xl border border-orange-500/20 bg-gradient-to-r from-orange-500/8 via-orange-400/5 to-transparent p-5">
          <div className="mb-2 flex items-center gap-2">
            <Radio size={13} className="text-orange-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-orange-400">
              Institutional Alignment Sync
            </span>
          </div>
          <p className="text-[11px] leading-relaxed text-white/60">
            <strong className="text-orange-300/90 font-semibold">
              LuraLoop Core Integration State: Active.
            </strong>{' '}
            Our technical execution layer monitors these frontier developer registries hourly. All upstream architectural enhancements are instantly engineered into our partner B2B2B white-label nodes.
          </p>
        </div>

      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// Main Footer Component
// ─────────────────────────────────────────────
export default function Footer() {
  const [showRd, setShowRd] = useState(false)

  return (
    <>
      <footer id="footer" className="bg-[#111111] border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-14">
            {/* Brand */}
            <div className="col-span-2">
              <div className="flex items-center mb-6">
                <a href="/" aria-label="LuraLoop Home">
                  <img
                    src="/Logo.svg"
                    alt="LuraLoop Official Corporate Logo"
                    className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
                  />
                </a>
              </div>
              <p className="text-white/30 text-sm leading-relaxed mb-5 max-w-xs">
                The institutional back-end for global automation providers. White-label execution architecture at enterprise scale.
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/40 hover:text-orange-500 transition-all duration-200"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => {
                    // R&D triggers modal — render as a button
                    if (link === 'R&D') {
                      return (
                        <li key={link}>
                          <button
                            id="footer-rd-trigger"
                            onClick={() => setShowRd(true)}
                            className="flex items-center gap-1 text-white/35 text-sm hover:text-orange-400 transition-colors duration-200 group"
                          >
                            <span className="relative flex h-1.5 w-1.5 mr-0.5">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            </span>
                            R&amp;D
                          </button>
                        </li>
                      )
                    }

                    let href = '/#'
                    if (link === 'Blog') href = '/blog'
                    else if (link === 'About') href = '/#about'
                    else if (link === 'Contact Us') href = 'mailto:luraloop.official@gmail.com'
                    else if (link === 'Apply as Partner') href = '/#partners'
                    else if (link === 'Architecture') href = '/#architecture'
                    else if (link === 'ZIYA Healthcare') href = '/#industries'
                    else if (link === 'ZIYA Education') href = '/#industries'
                    else if (link === 'ZIYA Commerce') href = '/#industries'
                    else if (link === 'ZIYA Property') href = '/#industries'
                    else if (link === 'Trust Center') href = 'mailto:luraloop.official@gmail.com?subject=Trust Center Request'
                    else if (link === 'Zero-Retention Policy') href = '/#security'
                    else if (link === 'Data Governance') href = '/#security'

                    return (
                      <li key={link}>
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-white/35 text-sm hover:text-orange-400 transition-colors duration-200"
                        >
                          {link}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/20 text-xs">© 2025 LuraLoop. All rights reserved. White-Label Automation Infrastructure for Enterprise Delivery Partners.</p>
            <div className="flex items-center gap-6">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map((item) => (
                <a key={item} href="/#" className="text-white/25 text-xs hover:text-white/50 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* R&D Modal — rendered at root level to avoid stacking context issues */}
      {showRd && <RdModal onClose={() => setShowRd(false)} />}
    </>
  )
}
