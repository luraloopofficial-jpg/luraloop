'use client'

import { useState, useEffect } from 'react'
import { X, ArrowUpRight, Radio, Activity, Globe, Cpu, Database, Zap, Network, GitBranch } from 'lucide-react'

// ─────────────────────────────────────────────
// SVG Social Icons
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
// Expanded R&D Registry Data
// ─────────────────────────────────────────────
const orchestrationNodes = [
  {
    id: 'openai',
    name: 'OpenAI GPT-o Series',
    category: 'FRONTIER LLM',
    badgeColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    icon: <Globe className="text-emerald-400" size={16} />,
    desc: 'Advanced reasoning engine powering enterprise cognitive pipelines.'
  },
  {
    id: 'anthropic',
    name: 'Anthropic Claude 3.5',
    category: 'INTELLIGENCE LAYER',
    badgeColor: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    icon: <Cpu className="text-violet-400" size={16} />,
    desc: 'Deep artifact processing and Constitutional AI for safe reasoning.'
  },
  {
    id: 'llama',
    name: 'Meta Llama 3 / Mistral',
    category: 'OPEN-WEIGHTS NODE',
    badgeColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    icon: <Database className="text-blue-400" size={16} />,
    desc: 'Local deployment models for maximum data privacy and on-premise execution.'
  },
  {
    id: 'groq',
    name: 'Groq LPU API',
    category: 'SPEED LAYER',
    badgeColor: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
    icon: <Zap className="text-orange-400" size={16} />,
    desc: 'Microsecond routing and ultra-low latency inference engine.'
  },
  {
    id: 'n8n',
    name: 'n8n Automation',
    category: 'WORKFLOW ENGINE',
    badgeColor: 'text-pink-400 bg-pink-400/10 border-pink-400/20',
    icon: <Network className="text-pink-400" size={16} />,
    desc: 'Advanced agent frameworks and secure webhook orchestration.'
  },
  {
    id: 'langchain',
    name: 'LangChain',
    category: 'WORKFLOW ENGINE',
    badgeColor: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    icon: <GitBranch className="text-yellow-400" size={16} />,
    desc: 'Modular automation infrastructure and cognitive memory mapping.'
  }
]

// ─────────────────────────────────────────────
// Live News Feed Component
// ─────────────────────────────────────────────
function LiveNewsFeed() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    const fetchNews = async () => {
      setLoading(true)
      // Simulate real-time fetch to a global news wire
      await new Promise(r => setTimeout(r, 800))
      if (!isMounted) return
      setNews([
        { id: 1, badge: 'LIVE WIRE', type: 'wire', title: 'Groq LPU Architecture Achieves 800 T/s Inference Speeds on Open-Weights Models', time: '12 mins ago' },
        { id: 2, badge: 'COMPLIANCE ARTICLE', type: 'compliance', title: 'EU AI Act Final Draft: Implications for Autonomous Agent Deployment', time: '1 hour ago' },
        { id: 3, badge: 'MARKET ANALYSIS', type: 'market', title: 'Enterprise Adoption of Local LLM Deployment Surpasses 45% in Q3', time: '3 hours ago' },
        { id: 4, badge: 'LIVE WIRE', type: 'wire', title: 'n8n Releases Advanced Webhooks for Asynchronous multi-agent Tasks', time: '5 hours ago' },
        { id: 5, badge: 'COMPLIANCE ARTICLE', type: 'compliance', title: 'HIPAA-Aligned LLM Wrappers: New Architecture Standards Published', time: '12 hours ago' },
      ])
      setLoading(false)
    }
    fetchNews()
    return () => { isMounted = false }
  }, [])

  const getBadgeColor = (type) => {
    if (type === 'wire') return 'text-red-400 bg-red-400/10 border-red-400/20'
    if (type === 'compliance') return 'text-blue-400 bg-blue-400/10 border-blue-400/20'
    return 'text-purple-400 bg-purple-400/10 border-purple-400/20'
  }

  return (
    <div className="flex flex-col h-full rounded-xl border border-white/6 bg-[#141414] overflow-hidden">
      <div className="p-3.5 border-b border-white/6 bg-white/4 flex items-center gap-2">
        <Activity size={13} className="text-white/40" />
        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">Global Intelligence Wire</span>
      </div>
      
      <div className="p-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 flex flex-col gap-4">
        {loading ? (
          <div className="flex flex-col gap-4 animate-pulse">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex flex-col gap-2">
                <div className="h-4 w-20 bg-white/5 rounded" />
                <div className="h-7 w-full bg-white/5 rounded" />
                <div className="h-2 w-12 bg-white/5 rounded" />
              </div>
            ))}
          </div>
        ) : (
          news.map((item) => (
            <article key={item.id} className="group relative border-l-[3px] border-transparent hover:border-white/20 pl-3 transition-colors">
              <span className={`inline-block mb-1.5 rounded border px-1.5 py-[2px] text-[8px] font-bold uppercase tracking-widest ${getBadgeColor(item.type)}`}>
                {item.badge}
              </span>
              <h4 className="text-xs font-semibold text-white/80 leading-relaxed group-hover:text-white transition-colors">
                {item.title}
              </h4>
              <p className="text-[9px] text-white/30 mt-1.5 font-mono">{item.time}</p>
            </article>
          ))
        )}
      </div>
    </div>
  )
}

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
      <div className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/8 bg-[#0D0D0D] shadow-2xl flex flex-col">
        
        {/* ── Header ── */}
        <div className="sticky top-0 z-20 flex items-start justify-between gap-4 rounded-t-2xl border-b border-white/8 bg-[#0D0D0D] px-6 py-5 shrink-0">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
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
              Live Enterprise AI Newsroom & Tooling Ecosystem
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

        {/* ── Body ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 p-6 pt-5 overflow-y-auto">
          
          {/* Left: Ecosystem */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/25 ml-1">
              Orchestration Ecosystem & Tooling
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {orchestrationNodes.map((node) => (
                <div key={node.id} className="group relative overflow-hidden rounded-xl border border-white/6 bg-[#141414] p-4 transition-all hover:border-white/15 hover:bg-[#181818]">
                  <div className="flex items-start gap-3 mb-2.5">
                    <div className="flex-shrink-0 rounded-lg border border-white/8 bg-white/4 p-2">
                      {node.icon}
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-white mb-1.5">{node.name}</h3>
                      <span className={`inline-block rounded border px-1.5 py-[2px] text-[8px] font-bold uppercase tracking-widest ${node.badgeColor}`}>
                        {node.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-[10px] leading-relaxed text-white/45">
                    {node.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Live Feed */}
          <div className="lg:col-span-2 flex flex-col gap-3 h-[400px] lg:h-auto">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/25 ml-1">
              Live Network Monitor
            </p>
            <LiveNewsFeed />
          </div>
        </div>

        {/* ── Institutional Alignment Sync Banner ── */}
        <div className="mx-6 mb-6 rounded-xl border border-orange-500/20 bg-gradient-to-r from-orange-500/8 via-orange-400/5 to-transparent p-5 shrink-0">
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
                            R&amp;D Intelligence Hub
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
