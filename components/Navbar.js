'use client'

import Image from 'next/image'
import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'


// ─── Nav Links ────────────────────────────────────────────────────
const navLinks = [
  { label: 'Platform', href: '/#architecture' },
  { label: 'Partner Program', href: '/#partners' },
  { label: 'Industry Modules', href: '/#industries' },
  { label: 'Security', href: '/#security' },
  { label: 'Blog', href: '/blog' },
]

import dynamic from 'next/dynamic';
const AuthOverlay = dynamic(() => import('./AuthOverlay'), { ssr: false });
// ─── Navbar ───────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [authMode, setAuthMode] = useState(null) // null | 'login' | 'signup' | 'forgot'
  const navRef = useRef(null)

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
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  const openAuth = useCallback((mode) => { setMenuOpen(false); setAuthMode(mode) }, [])
  const closeAuth = useCallback(() => setAuthMode(null), [])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center mt-4 transition-all duration-500 ${
        scrolled ? 'p-[1px] rounded-full animate-aurora-border w-[95%] max-w-7xl mx-auto' : 'w-full'
      }`}>
        <motion.nav
          ref={navRef}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`w-full transition-all duration-500 px-6 flex items-center justify-between transform-gpu ${
            scrolled ? 'bg-black/80 backdrop-blur-md rounded-full py-3' : 'bg-transparent py-5 w-[95%] max-w-7xl mx-auto'
          }`}
        >
          {/* Logo */}
          <a href="/" className="flex items-center group" aria-label="LuraLoop Home">
            <img src="/Logo.svg" alt="LuraLoop Official Corporate Logo"
              width={150} height={32}
              className="h-8 w-auto group-hover:opacity-90 transition-opacity duration-300" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}
                className="flex items-center gap-1 text-sm text-white/55 hover:text-white transition-colors duration-200 group">
                {link.label}
                {link.hasDropdown && <ChevronDown size={12} className="group-hover:text-orange-500 transition-colors" />}
              </a>
            ))}
          </div>

          {/* Desktop Auth CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => openAuth('login')}
              className="text-sm text-white/60 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
              id="nav-login-btn"
            >
              Login
            </button>
            <button
              onClick={() => openAuth('signup')}
              id="nav-signup-btn"
              className="text-sm font-semibold text-[#0B0B0B] px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
              style={{ background: '#FF6B00', boxShadow: '0 0 20px rgba(255,107,0,0.35)' }}
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden text-white/70 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Mobile Dropdown */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="absolute top-full left-0 right-0 mt-2 mx-4 rounded-2xl glass border border-white/8 px-6 py-4 flex flex-col gap-3 md:hidden overflow-hidden z-10"
              >
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href}
                    className="text-white/70 hover:text-white text-sm py-2 border-b border-white/5"
                    onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </a>
                ))}
                <div className="flex gap-3 pt-2">
                  <button onClick={() => openAuth('login')}
                    className="flex-1 py-2.5 rounded-xl text-sm text-white/60 border border-white/10 hover:bg-white/5 transition-colors">
                    Login
                  </button>
                  <button onClick={() => openAuth('signup')}
                    className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-[#0B0B0B] transition-all"
                    style={{ background: '#FF6B00' }}>
                    Sign Up
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </header>

      {/* ─── Auth Overlay State Machine ─── */}
      <AnimatePresence>
        {authMode && (
          <AuthOverlay key="auth" mode={authMode} onClose={closeAuth} onSwitch={setAuthMode} />
        )}
      </AnimatePresence>
    </>
  )
}
