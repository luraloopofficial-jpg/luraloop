'use client'

import { useState } from 'react'

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
  Platform: ['Architecture', 'Integration Adapters'],
  'Partner Program': ['Reseller Model', 'SLA Framework', 'Partner Enablement', 'Apply as Partner'],
  'Platform Capabilities': ['AI Employees', 'AI Operating Layer', 'Multi-Agent Infrastructure', 'Business Process Automation', 'Decision Intelligence'],
  Security: ['Data Governance', 'Zero-Retention Policy', 'Access Isolation', 'Trust Center'],
  Company: ['About', 'Contact Us', 'R&D'],
}

const socialLinks = [
  { Icon: LinkedInIcon, href: 'https://linkedin.com/company/luraloop', label: 'LinkedIn' },
  { Icon: XIcon, href: 'https://x.com/LURALOOP', label: 'X (Twitter)' },
  { Icon: GitHubIcon, href: 'https://github.com/luraloopofficial-jpg', label: 'GitHub' },
]

import dynamic from 'next/dynamic';
import Link from 'next/link';
const RdModal = dynamic(() => import('./RdModal'), { ssr: false });
// ─────────────────────────────────────────────
// Main Footer Component
// ─────────────────────────────────────────────
export default function Footer() {
  const [showRd, setShowRd] = useState(false)

  return (
    <>
      <footer id="footer" className="bg-transparent border-t border-white/5 py-16 relative overflow-hidden">
        {/* Ambient bottom-docked linear contrast bleed */}
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#1e3a8a]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-14">
            {/* Brand */}
            <div className="col-span-2">
              <div className="flex items-center mb-6">
                <a href="/" aria-label="LuraLoop Home">
                  <img
                    src="/Logo.svg"
                    alt="LuraLoop Official Corporate Logo"
                    width={150}
                    height={32}
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
                <p className="text-white text-xs font-semibold uppercase tracking-wider mb-4">{category}</p>
                <ul className="space-y-3">
                  {links.map((link) => {
                    // R&D triggers modal — render as a button
                    if (link === 'R&D') {
                      return (
                        <li key={link}>
                          <button
                            id="footer-rd-trigger"
                            onClick={() => setShowRd(true)}
                            className="flex items-center gap-1 text-white/60 text-sm hover:text-orange-400 transition-colors duration-200 group"                          >
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
                    let isNextLink = false

                    if (link === 'Blog') href = '/blog'
                    else if (link === 'About') href = '/#about'
                    else if (link === 'Contact Us') href = 'mailto:legal@luraloop.com'
                    else if (link === 'Apply as Partner') href = '/#partners'
                    else if (link === 'Architecture') href = '/#architecture'
                    else if (link === 'Integration Adapters') href = '/#architecture'
                    else if (link === 'API Reference') href = '/blog'
                    else if (link === 'Changelog') href = '/blog'
                    else if (link === 'Reseller Model') href = '/#partners'
                    else if (link === 'SLA Framework') href = '/#partners'
                    else if (link === 'Partner Enablement') href = '/#partners'
                    else if (link === 'Access Isolation') href = '/#security'
                    else if (link === 'AI Employees') { href = '/ai-employees'; isNextLink = true; }
                    else if (link === 'AI Operating Layer') { href = '/ai-operating-systems'; isNextLink = true; }
                    else if (link === 'Multi-Agent Infrastructure') { href = '/multi-agent-infrastructure'; isNextLink = true; }
                    else if (link === 'Business Process Automation') { href = '/business-process-automation'; isNextLink = true; }
                    else if (link === 'Decision Intelligence') { href = '/decision-intelligence'; isNextLink = true; }
                    else if (link === 'Trust Center') href = 'mailto:trust@luraloop.com?subject=Trust Center Request'
                    else if (link === 'Zero-Retention Policy') href = '/#security'
                    else if (link === 'Data Governance') href = '/#security'

                    if (isNextLink) {
                      return (
                        <li key={link}>
                          <Link href={href} className="text-white/60 text-sm hover:text-orange-400 transition-colors duration-200">
                            {link}
                          </Link>
                        </li>
                      )
                    }

                    return (
                      <li key={link}>
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-white/60 text-sm hover:text-orange-400 transition-colors duration-200"
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
              {[['Terms of Service', '/terms'], ['Privacy Policy', '/privacy-policy'], ['Cookie Policy', '/cookie-policy']].map(([item, href]) => (
                <Link key={item} href={href} className="text-white/25 text-xs hover:text-white/50 transition-colors">
                  {item}
                </Link>
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
