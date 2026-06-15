'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Layers, MonitorPlay, Box, Sparkles } from 'lucide-react'

export default function AboutModal() {
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef(null)

  // Listen for hash changes to trigger modal
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#about') {
        setIsOpen(true)
        // Clear the hash without scrolling so it can be re-triggered
        window.history.replaceState(null, '', window.location.pathname)
      }
    }
    
    // Check on mount and listen to changes
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg"
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass border border-white/10 rounded-2xl shadow-2xl bg-[#0B0B0B]/95 p-8 md:p-12 scrollbar-thin scrollbar-thumb-white/10"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-500/10 mb-6 border border-orange-500/20">
                <Sparkles className="text-orange-500" size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                LuraLoop Identity
              </h2>
              <p className="text-xl text-orange-500 font-medium tracking-wide">
                AI Automation Always
              </p>
            </div>

            {/* Intro Text */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-white/70 text-lg leading-relaxed">
                We are a cutting-edge Enterprise AI Automation studio dedicated to transforming how modern businesses operate. We don't just build software; we engineer intelligent ecosystems that empower human teams, eliminate bottlenecks, and scale operations infinitely.
              </p>
            </div>

            {/* Multi-disciplinary capabilities */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              
              {/* Pillar 1 */}
              <div className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                  <Layers size={24} />
                </div>
                <h3 className="text-white text-xl font-semibold mb-3">Automation Workflow Architecture</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Designing robust, scalable API pipelines and agentic AI layers that sync directly with your existing core systems seamlessly.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                  <MonitorPlay size={24} />
                </div>
                <h3 className="text-white text-xl font-semibold mb-3">Visual Media Optimization</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Crafting cinematic, highly performant front-end experiences that convert users while maintaining an ultra-premium aesthetic.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
                  <Box size={24} />
                </div>
                <h3 className="text-white text-xl font-semibold mb-3">3D Motion Graphics Core</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Integrating high-fidelity WebGL and Framer Motion dynamics to breathe life and interactivity into static data presentations.
                </p>
              </div>

            </div>

            {/* Bottom Graphic / Element */}
            <div className="mt-16 text-center border-t border-white/5 pt-8">
              <p className="text-white/30 text-sm font-medium tracking-widest uppercase">
                Designed & Engineered For The Future
              </p>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
