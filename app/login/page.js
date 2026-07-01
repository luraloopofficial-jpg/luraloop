'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Loader2, AlertCircle } from 'lucide-react'
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

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [googleLoading, setGoogleLoading] = useState(false)
  const [credentialsLoading, setCredentialsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleGoogleAuth = async () => {
    try {
      setGoogleLoading(true)
      await signIn('google', { callbackUrl: '/dashboard' })
    } catch (err) {
      setGoogleLoading(false)
    }
  }

  const handleCredentialsAuth = async (e) => {
    e.preventDefault()
    setError('')
    setCredentialsLoading(true)

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })

    if (res?.error) {
      setError(res.error)
      setCredentialsLoading(false)
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <div className="min-h-screen pt-28 pb-12 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10 selection:bg-orange-600/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />
        
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-8">
            <img src="/Logo.svg" alt="LuraLoop Logo" className="h-7 sm:h-8 w-auto mx-auto hover:opacity-80 transition-opacity" />
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">Welcome Back</h1>
          <p className="text-zinc-400 text-sm">Sign in to your enterprise dashboard.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-400 text-sm">
            <AlertCircle size={18} />
            <p>{error}</p>
          </div>
        )}

        <button 
          onClick={handleGoogleAuth}
          disabled={googleLoading || credentialsLoading}
          className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 text-white font-medium text-sm mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {googleLoading ? <Loader2 size={18} className="animate-spin text-zinc-400" /> : <GoogleIcon />}
          Sign in with Google
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-white/10"></div>
          <span className="text-zinc-500 text-xs font-semibold uppercase tracking-widest">Or continue with</span>
          <div className="h-px flex-1 bg-white/10"></div>
        </div>

        <form className="space-y-5" onSubmit={handleCredentialsAuth}>
          <div className="space-y-2">
            <label className="text-zinc-400 text-xs font-medium uppercase tracking-wider pl-1">Work Email</label>
            <input 
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white rounded-xl p-3.5 outline-none transition-all duration-200 placeholder:text-zinc-600"
              placeholder="you@company.com"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between pl-1 pr-2">
              <label className="text-zinc-400 text-xs font-medium uppercase tracking-wider">Password</label>
              <Link href="#" className="text-orange-500 hover:text-orange-400 text-xs transition-colors">Forgot?</Link>
            </div>
            <input 
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white rounded-xl p-3.5 outline-none transition-all duration-200 placeholder:text-zinc-600"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit"
            disabled={credentialsLoading || googleLoading}
            className="w-full flex items-center justify-center py-3.5 mt-2 rounded-xl font-bold text-[#0B0B0B] text-sm transition-all duration-300 hover:scale-[1.02] disabled:hover:scale-100 disabled:opacity-70 shadow-[0_0_20px_rgba(255,107,0,0.2)] disabled:shadow-none"
            style={{ background: '#FF6B00' }}
          >
            {credentialsLoading ? <Loader2 size={18} className="animate-spin text-[#0B0B0B]" /> : 'Sign In'}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-zinc-500">
          New to LuraLoop?{' '}
          <Link href="/signup" className="text-white hover:text-orange-500 font-medium transition-colors">
            Create a Workspace
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
