'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send } from 'lucide-react'
import Image from 'next/image'

function LeafParticle({ delay, positionClasses, duration }) {
  return (
    <motion.div
      className={`absolute pointer-events-none z-40 ${positionClasses}`}
      animate={{
        y: [0, -12, 5, 0],
        x: [0, 8, -6, 0],
        rotate: [0, 120, 240, 360],
        scale: [0.6, 1, 0.7, 0.6],
        opacity: [0.3, 0.8, 0.3],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: delay,
      }}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Elegant organic leaf shape */}
        <path 
          d="M12 2C12 2 22 6 22 12C22 18 12 22 12 22C12 22 2 18 2 12C2 6 12 2 12 2Z" 
          fill="#FF6B00" 
          opacity="0.8"
        />
        <path 
          d="M12 2V22" 
          stroke="#FF9A40" 
          strokeWidth="1" 
          opacity="0.5"
        />
      </svg>
    </motion.div>
  )
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Hi there! I am the LuraLoop Assistant. How can I help you automate your future today?' }
  ])
  const [inputValue, setInputValue] = useState('')
  
  const messagesEndRef = useRef(null)
  const chatWindowRef = useRef(null)
  const buttonRef = useRef(null)

  const quickReplies = ['Book a Demo', 'Explore AI Agents', 'Pricing Plans']

  // Auto-scroll logic
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Click outside to close logic
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the chat is open, and the click was outside BOTH the chat window and the trigger button
      if (
        isOpen &&
        chatWindowRef.current &&
        !chatWindowRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const handleSend = (text) => {
    if (!text.trim()) return
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: text }])
    setInputValue('')
    
    // Simulate AI response delay
    setTimeout(() => {
      let response = "I'm a simulated demo agent! In a live environment, I'd instantly connect you with the right LuraLoop workflow."
      
      if (text.toLowerCase().includes('demo')) {
        response = "Great! You can book a demo directly through our calendar link, or I can collect your details right now."
      } else if (text.toLowerCase().includes('agent')) {
        response = "Our marketplace has AI agents for HR, Lead Qual, Customer Support, and more! Check out the Products section."
      }
      
      setMessages(prev => [...prev, { role: 'system', content: response }])
    }, 800)
  }

  return (
    <>
      {/* Floating Action Button Container */}
      <div 
        ref={buttonRef}
        className="fixed bottom-6 right-6 z-50 w-14 h-14"
      >
        {/* Subtle Orbiting Leaf Particles */}
        <AnimatePresence>
          {!isOpen && (
            <>
              <LeafParticle delay={0} duration={4.5} positionClasses="-top-2 -right-2" />
              <LeafParticle delay={1.2} duration={5.2} positionClasses="top-1/2 -left-4" />
              <LeafParticle delay={2.5} duration={4.8} positionClasses="-bottom-2 right-1/2" />
            </>
          )}
        </AnimatePresence>

        <motion.button
          className="relative w-full h-full rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-transform hover:scale-105 bg-white border border-orange-500/30 p-3 z-50"
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: isOpen ? 0 : 1 }}
          style={{ pointerEvents: isOpen ? 'none' : 'auto' }}
          aria-label="Open Chat"
        >
          <Image 
            src="/chatbot-logo.svg" 
            alt="Chatbot Logo" 
            width={32} 
            height={32} 
            className="object-contain w-full h-full drop-shadow-sm" 
          />
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatWindowRef}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 z-50 w-[350px] sm:w-[380px] h-[550px] max-h-[80vh] bg-[#0B0B0B]/90 backdrop-blur-md rounded-2xl flex flex-col overflow-hidden shadow-2xl"
            style={{ border: '1px solid rgba(255,107,0,0.2)' }}
          >
            {/* Header */}
            <div className="p-4 bg-[#111111]/80 backdrop-blur-md border-b border-white/10 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-1 border border-orange-500/20 shadow-[0_0_10px_rgba(255,107,0,0.2)]">
                  <Image src="/chatbot-logo.svg" alt="AI Bot" width={20} height={20} className="object-contain" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">LuraLoop Assistant</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-white/40 text-[10px] uppercase tracking-wide font-medium">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/50 hover:text-white p-1 rounded-md transition-colors hover:bg-white/5"
                aria-label="Close Chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0B0B0B]/60 backdrop-blur-sm scrollbar-thin scrollbar-thumb-orange-500/50 scrollbar-track-transparent">
              {messages.map((msg, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                    msg.role === 'user' 
                      ? 'bg-orange-500 text-white rounded-br-sm' 
                      : 'bg-[#1A1A1A] text-white/90 border border-white/5 rounded-bl-sm shadow-sm'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages[messages.length - 1].role === 'system' && (
               <div className="px-4 py-3 bg-[#0B0B0B]/80 flex gap-2 overflow-x-auto scrollbar-none whitespace-nowrap border-t border-white/5">
                 {quickReplies.map((reply, i) => (
                   <button
                     key={i}
                     onClick={() => handleSend(reply)}
                     className="px-3 py-1.5 rounded-full text-xs font-medium text-orange-400 bg-orange-500/10 border border-orange-500/20 hover:bg-orange-500/20 transition-colors shrink-0"
                   >
                     {reply}
                   </button>
                 ))}
               </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-[#111111]/80 backdrop-blur-md border-t border-white/10">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-[#1A1A1A] border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-orange-500/50 transition-colors shadow-inner"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-600 transition-colors shrink-0 shadow-md"
                >
                  <Send size={16} className="ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
