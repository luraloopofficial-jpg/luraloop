'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useSession, signOut } from 'next-auth/react'
import ProfileDropdown from '@/components/ProfileDropdown'
// ─── Nav Links ────────────────────────────────────────────────────
const navLinks = [
  { label: 'Platform', href: '/#architecture' },
  { label: 'Partner Program', href: '/#partners' },
  { 
    label: 'Industry Modules', 
    href: '/#industries',
    hasDropdown: true,
    children: [
      { label: 'AI Employees', href: '/ai-employees' },
      { label: 'AI Operating Layer', href: '/ai-operating-systems' },
      { label: 'Multi-Agent Infrastructure', href: '/multi-agent-infrastructure' },
      { label: 'Business Process Automation', href: '/business-process-automation' },
      { label: 'Decision Intelligence', href: '/decision-intelligence' },
    ]
  },
  { label: 'Security', href: '/#security' },
  // { label: 'Blog', href: '/blog' },
]

// ─── Navbar ───────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const [authMode, setAuthMode] = useState(null) // null | 'login' | 'signup' | 'forgot'
  const navRef = useRef(null)
  const dropdownRef = useRef(null)
  const dropdownTimeout = useRef(null)
  
  const { data: session } = useSession()

  // Global event listener for modal
  useEffect(() => {
    const handleOpenAuth = (e) => {
      setAuthMode(e.detail?.mode || 'login')
    }
    window.addEventListener('openAuthModal', handleOpenAuth)
    return () => window.removeEventListener('openAuthModal', handleOpenAuth)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target)) setMenuOpen(false)
      if (dropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) setDropdownOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen, dropdownOpen])

  const openAuth = useCallback((mode) => { setMenuOpen(false); setAuthMode(mode) }, [])
  const closeAuth = useCallback(() => setAuthMode(null), [])

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeout.current)
    setDropdownOpen(true)
  }
  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150)
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header ref={navRef} className={`sticky top-0 z-50 flex justify-center transition-all duration-300 ${
        scrolled 
          ? 'pt-4 bg-transparent border-transparent w-full' 
          : 'bg-zinc-950/20 backdrop-blur-md border-b border-white/5 w-full shadow-2xl'
      }`}>
        <div className={`transition-all duration-500 ${
          scrolled ? 'p-[1px] rounded-full animate-aurora-border w-[95%] max-w-7xl mx-auto shadow-[0_0_40px_rgba(255,107,0,0.15)]' : 'w-full max-w-7xl mx-auto'
        }`}>
          <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`transition-all duration-500 px-6 flex items-center justify-between transform-gpu ${
              scrolled 
                ? 'bg-zinc-950/40 backdrop-blur-xl rounded-full py-3 w-full' 
                : 'bg-transparent py-4 w-full'
            }`}
          >
          {/* Logo */}
          <a href="/" className="flex items-center group" aria-label="LuraLoop Home">
            <img src="/Logo.svg" alt="LuraLoop Logo"
              width={150} height={32}
              className="h-8 w-auto group-hover:opacity-90 transition-opacity duration-300" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div 
                  key={link.label} 
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className="flex items-center gap-1 text-sm text-white/55 hover:text-white transition-colors duration-200 group"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {link.label}
                    <ChevronDown size={12} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-white' : 'text-white/40'}`} />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-xl border border-white/8 bg-[#111111]/95 backdrop-blur-xl shadow-2xl overflow-hidden z-50"
                      >
                        <div className="p-1.5">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setDropdownOpen(false)}
                              className="block px-3.5 py-2.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5 transition-all duration-150"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-white/5 px-4 py-2.5">
                          <Link href="/#industries" onClick={() => setDropdownOpen(false)} className="text-[11px] text-white/30 hover:text-white/60 transition-colors">
                            View All Modules →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a key={link.label} href={link.href}
                  className="flex items-center gap-1 text-sm text-white/55 hover:text-white transition-colors duration-200 group">
                  {link.label}
                </a>
              )
            ))}
          </div>

          {/* Desktop Auth CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {session ? (
              <div className="pl-2 border-l border-white/10 ml-2">
                <ProfileDropdown session={session} />
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-sm text-white/60 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
                  id="nav-login-btn"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  id="nav-signup-btn"
                  className="text-sm font-semibold text-[#0B0B0B] px-5 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,107,0,0.35)]"
                  style={{ background: '#FF6B00' }}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          <button
            className="md:hidden text-white/70 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          </motion.nav>
        </div>
      </header>

      {/* ─── Mobile Full-Screen Overlay ─────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ backgroundColor: '#030712' }}
            className="fixed inset-0 z-[9999] flex flex-col md:hidden"
          >
            {/* Close Button Row */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10" style={{ backgroundColor: '#030712' }}>
              <img src="/Logo.svg" alt="LuraLoop Logo" className="h-7 w-auto" />
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex-1 overflow-y-auto flex flex-col pt-8 px-6 gap-2">
                {navLinks.map((link) => (
                  link.hasDropdown ? (
                    <div key={link.label} className="flex flex-col">
                      <button
                        className="text-white/80 hover:text-white text-base py-4 border-b border-white/5 flex items-center justify-between w-full text-left font-medium"
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      >
                        {link.label}
                        <ChevronDown size={16} className={`transition-transform duration-200 text-white/40 ${mobileDropdownOpen ? 'rotate-180 text-orange-500' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 py-2 flex flex-col gap-1 bg-white/3 rounded-xl my-1">
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => { setMenuOpen(false); setMobileDropdownOpen(false) }}
                                  className="text-white/55 hover:text-white text-sm py-3 px-2 transition-colors border-b border-white/5 last:border-0"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a key={link.label} href={link.href}
                      className="text-white/80 hover:text-white text-base font-medium py-4 border-b border-white/5 block transition-colors"
                      onClick={() => setMenuOpen(false)}>
                      {link.label}
                    </a>
                  )
                ))}
            </div>

            {/* Auth CTA Row */}
            <div className="px-6 pb-10 pt-4 border-t border-white/10">
                {session ? (
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                      <img
                        src={session.user.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(session.user.name || session.user.email)}&background=111&color=fff`}
                        alt="Avatar"
                        className="w-10 h-10 rounded-full border border-orange-500/50 shadow-[0_0_10px_rgba(255,107,0,0.2)]"
                      />
                      <div className="flex flex-col overflow-hidden">
                        <span className="text-white text-sm font-medium">{session.user.name || 'Enterprise User'}</span>
                        <span className="text-white/50 text-xs truncate font-mono">{session.user.email}</span>
                      </div>
                    </div>
                    <button onClick={() => signOut()}
                      className="w-full py-3 rounded-xl text-sm font-medium text-red-400 border border-red-500/20 hover:bg-red-500/10 transition-colors">
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-3">
                    <Link href="/login"
                      onClick={() => setMenuOpen(false)}
                      className="flex-1 py-3.5 rounded-xl text-sm text-center text-white/70 border border-white/10 hover:bg-white/5 transition-colors font-medium">
                      Login
                    </Link>
                    <Link href="/signup"
                      onClick={() => setMenuOpen(false)}
                      className="flex-1 py-3.5 rounded-xl text-sm text-center font-bold text-[#0B0B0B] transition-all hover:scale-[1.02]"
                      style={{ background: '#FF6B00' }}>
                      Sign Up
                    </Link>
                  </div>
                )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal logic removed to favor dedicated auth pages */}
    </>
  )
}
