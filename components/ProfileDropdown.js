'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { signOut } from 'next-auth/react'
import { LogOut, User, Settings, Building } from 'lucide-react'

export default function ProfileDropdown({ session }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const user = session?.user || {}
  const avatarUrl = user.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name || user.email || 'User')}&background=111&color=fff`

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Avatar Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 focus:outline-none group"
      >
        <div className="hidden lg:flex flex-col items-end mr-2">
          <span className="text-white/90 text-sm font-medium leading-none mb-1">{user.name || 'Enterprise User'}</span>
          <span className="text-white/50 text-[10px] font-mono leading-none uppercase tracking-wider">{user.company || 'LuraLoop Network'}</span>
        </div>
        <div className="relative">
          <img 
            src={avatarUrl} 
            alt="Avatar" 
            className="w-9 h-9 rounded-full border border-orange-500/50 object-cover transition-all duration-300 group-hover:border-orange-500 shadow-[0_0_10px_rgba(255,107,0,0.15)] group-hover:shadow-[0_0_15px_rgba(255,107,0,0.3)]"
          />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#030712] rounded-full"></div>
        </div>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute right-0 mt-3 w-64 rounded-2xl border border-white/10 bg-[#111111]/95 backdrop-blur-xl shadow-2xl overflow-hidden z-50 origin-top-right"
          >
            {/* Header info */}
            <div className="p-4 border-b border-white/5 bg-white/5">
              <p className="text-sm font-semibold text-white truncate">{user.name || 'User'}</p>
              <p className="text-xs text-white/50 truncate mt-0.5">{user.email}</p>
            </div>

            {/* Links */}
            <div className="p-2">
              <a href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                <User size={16} className="text-white/40" />
                Dashboard Profile
              </a>
              <a href="/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                <Settings size={16} className="text-white/40" />
                Account Settings
              </a>
              {user.company && (
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/70">
                  <Building size={16} className="text-white/40" />
                  <span className="truncate">{user.company}</span>
                </div>
              )}
            </div>

            {/* Logout */}
            <div className="p-2 border-t border-white/5">
              <button 
                onClick={() => signOut()}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-red-400/80 hover:text-red-400 hover:bg-red-500/10 transition-colors"
              >
                <LogOut size={16} />
                Sign Out
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
