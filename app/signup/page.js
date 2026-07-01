'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Loader2, AlertCircle, CheckCircle } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({ name: '', company: '', email: '', password: '' })
  const [googleLoading, setGoogleLoading] = useState(false)
  const [registerLoading, setRegisterLoading] = useState(false)
  const [error, setError] = useState('')

  const handleGoogleAuth = async () => {
    try {
      setGoogleLoading(true)
      await signIn('google', { callbackUrl: '/dashboard' })
    } catch (err) {
      setGoogleLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setError('')
    setRegisterLoading(true)

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long.')
      setRegisterLoading(false)
      return
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Failed to register.')
        setRegisterLoading(false)
        return
      }

      // Automatically sign in after successful registration
      const signInRes = await signIn('credentials', {
        redirect: false,
        email: formData.email,
        password: formData.password,
      })

      if (signInRes?.error) {
        setError(signInRes.error)
        setRegisterLoading(false)
      } else {
        router.push('/dashboard')
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
      setRegisterLoading(false)
    }
  }

  return (
    <div className="min-h-screen pt-28 pb-12 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10 selection:bg-orange-600/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />
        
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-8">
            <img src="/Logo.svg" alt="LuraLoop Logo" className="h-7 sm:h-8 w-auto mx-auto hover:opacity-80 transition-opacity" />
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">Create Workspace</h1>
          <p className="text-zinc-400 text-sm">Deploy your enterprise architecture instantly.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-400 text-sm">
            <AlertCircle size={18} className="flex-shrink-0" />
            <p>{error}</p>
          </div>
        )}

        <button 
          onClick={handleGoogleAuth}
          disabled={googleLoading || registerLoading}
          className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 text-white font-medium text-sm mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {googleLoading ? <Loader2 size={18} className="animate-spin text-zinc-400" /> : <GoogleIcon />}
          Sign up with Google
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-white/10"></div>
          <span className="text-zinc-500 text-xs font-semibold uppercase tracking-widest text-center">Or register manually</span>
          <div className="h-px flex-1 bg-white/10"></div>
        </div>

        <form className="space-y-5" onSubmit={handleRegister}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-zinc-400 text-xs font-medium uppercase tracking-wider pl-1">Full Name</label>
              <input 
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white rounded-xl p-3.5 outline-none transition-all duration-200 placeholder:text-zinc-600"
                placeholder="Jane Smith"
              />
            </div>
            <div className="space-y-2">
              <label className="text-zinc-400 text-xs font-medium uppercase tracking-wider pl-1">Company</label>
              <input 
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white rounded-xl p-3.5 outline-none transition-all duration-200 placeholder:text-zinc-600"
                placeholder="Acme Corp"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-zinc-400 text-xs font-medium uppercase tracking-wider pl-1">Work Email</label>
            <input 
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white rounded-xl p-3.5 outline-none transition-all duration-200 placeholder:text-zinc-600"
              placeholder="you@company.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-zinc-400 text-xs font-medium uppercase tracking-wider pl-1">Create Password</label>
            <input 
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white rounded-xl p-3.5 outline-none transition-all duration-200 placeholder:text-zinc-600"
              placeholder="Min. 8 characters"
            />
          </div>

          <button 
            type="submit"
            disabled={registerLoading || googleLoading}
            className="w-full flex items-center justify-center py-3.5 mt-2 rounded-xl font-bold text-[#0B0B0B] text-sm transition-all duration-300 hover:scale-[1.02] disabled:hover:scale-100 disabled:opacity-70 shadow-[0_0_20px_rgba(255,107,0,0.2)] disabled:shadow-none"
            style={{ background: '#FF6B00' }}
          >
            {registerLoading ? <Loader2 size={18} className="animate-spin text-[#0B0B0B]" /> : 'Create Account'}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-zinc-500 leading-relaxed max-w-sm mx-auto">
          By signing up, you agree to our <Link href="/terms" className="text-zinc-400 hover:text-white underline decoration-white/30 hover:decoration-white transition-all">Terms of Service</Link> and <Link href="/privacy-policy" className="text-zinc-400 hover:text-white underline decoration-white/30 hover:decoration-white transition-all">Privacy Policy</Link>.
        </p>

        <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-zinc-500">
          Already have a workspace?{' '}
          <Link href="/login" className="text-white hover:text-orange-500 font-medium transition-colors">
            Sign In
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
