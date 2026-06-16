'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Eye, EyeOff, ArrowLeft, Loader2, CheckCircle } from 'lucide-react'
import { EMAIL_REGEX, URL_REGEX, sanitize } from '../lib/authUtils'

// ─── Input Field ──────────────────────────────────────────────────
function AuthInput({ id, label, type = 'text', value, onChange, error, placeholder, autoComplete }) {
  const [showPw, setShowPw] = useState(false)
  const isPassword = type === 'password'
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-white/60 text-xs font-medium uppercase tracking-widest">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={isPassword && showPw ? 'text' : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={`w-full bg-[#121212]/60 backdrop-blur-sm border border-zinc-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white rounded-lg p-3 outline-none placeholder-zinc-500 transition-all duration-200 ${
            error ? 'border-red-500/60 focus:ring-red-500/40' : ''
          }`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPw((p) => !p)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
            aria-label={showPw ? 'Hide password' : 'Show password'}
          >
            {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
          </button>
        )}
      </div>
      {error && <p className="text-red-400 text-xs mt-0.5">{error}</p>}
    </div>
  )
}

// ─── Shared Components & Icons ─────────────────────────────────────
const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

// ─── Validators ───────────────────────────────────────────────────
function validateLogin({ email, password }) {
  const errors = {}
  if (!email || !EMAIL_REGEX.test(email)) errors.email = 'Enter a valid email address.'
  if (!password || password.length < 8) errors.password = 'Password must be at least 8 characters.'
  return errors
}

function validateForgot({ email }) {
  const errors = {}
  if (!email || !EMAIL_REGEX.test(email)) errors.email = 'Enter a valid email address.'
  return errors
}

function validateSignup({ name, email, companyName, password }) {
  const errors = {}
  if (!name || name.trim().length < 2) errors.name = 'Full name must be at least 2 characters.'
  if (!email || !EMAIL_REGEX.test(email)) errors.email = 'Enter a valid work email address.'
  if (!companyName || companyName.trim().length < 2) errors.companyName = 'Enter your company name.'
  if (!password || password.length < 8) errors.password = 'Password must be at least 8 characters.'
  return errors
}

// ─── Overlay Shell ────────────────────────────────────────────────
function AuthOverlay({ mode, onClose, onSwitch }) {
  const overlayRef = useRef(null)
  const panelRef = useRef(null)

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  }, [])

  return (
    <motion.div
      ref={overlayRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 transform-gpu"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(12px)' }}
      onMouseDown={(e) => { if (e.target === overlayRef.current) onClose() }}
    >
      <motion.div
        ref={panelRef}
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ type: 'spring', damping: 28, stiffness: 320 }}
        className="relative w-full max-w-md rounded-2xl border border-zinc-800 bg-[#0B0B0B]/95 backdrop-blur-xl shadow-2xl overflow-hidden transform-gpu"
        style={{ boxShadow: '0 0 80px rgba(255,107,0,0.08), 0 0 0 1px rgba(255,107,0,0.06)' }}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all z-10"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        <AnimatePresence mode="wait">
          {mode === 'login' && <LoginForm key="login" onSwitch={onSwitch} />}
          {mode === 'signup' && <SignupForm key="signup" onSwitch={onSwitch} />}
          {mode === 'forgot' && <ForgotForm key="forgot" onSwitch={onSwitch} />}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

// ─── Panel Transition Wrapper ─────────────────────────────────────
function PanelWrap({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.22, ease: 'easeInOut' }}
      className="p-8 max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800"
    >
      {children}
    </motion.div>
  )
}

// ─── Login Form ───────────────────────────────────────────────────
function LoginForm({ onSwitch }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const clean = { email: sanitize(email.trim()), password }
      const errs = validateLogin(clean)
      if (Object.keys(errs).length) { setErrors(errs); return }
      
      setErrors({})
      setLoading(true)
      // Simulate auth integration
      await new Promise(resolve => setTimeout(resolve, 1500))
      setLoading(false)
    } catch (error) {
      setErrors({ form: 'An unexpected error occurred. Please try again.' })
      setLoading(false)
    }
  }

  const handleGoogleAuth = async () => {
    try {
      setGoogleLoading(true)
      await new Promise(resolve => setTimeout(resolve, 1500))
      setGoogleLoading(false)
    } catch (error) {
      setErrors({ form: 'Google authentication failed. Please try again.' })
      setGoogleLoading(false)
    }
  }

  return (
    <PanelWrap>
      <div className="mb-8 text-center">
        <h2 className="text-white text-2xl font-bold tracking-tight">Log in to LuraLoop</h2>
        <p className="text-white/40 text-sm mt-2">Access your enterprise AI dashboard.</p>
      </div>

      <button 
        type="button" 
        onClick={handleGoogleAuth}
        disabled={googleLoading || loading}
        className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-white/5 hover:bg-white/10 transition-all duration-300 text-white font-medium text-sm mb-6 disabled:opacity-50"
      >
        {googleLoading ? <Loader2 size={18} className="animate-spin text-zinc-400" /> : <GoogleIcon />}
        Continue with Google
      </button>

      <div className="flex items-center gap-3 mb-6">
        <div className="h-px flex-1 bg-zinc-800"></div>
        <span className="text-zinc-500 text-xs font-medium uppercase tracking-widest">Or</span>
        <div className="h-px flex-1 bg-zinc-800"></div>
      </div>

      {errors.form && <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center">{errors.form}</div>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
        <AuthInput id="login-email" label="Work Email" type="email" value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email} placeholder="you@company.com" autoComplete="email" />
          
        <AuthInput id="login-password" label="Password" type="password" value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password} placeholder="••••••••" autoComplete="current-password" />

        <div className="flex justify-end -mt-1 mb-2">
          <button type="button" onClick={() => onSwitch('forgot')}
            className="text-xs text-orange-400 hover:text-orange-300 font-medium transition-colors">
            Forgot Password?
          </button>
        </div>

        <button type="submit" disabled={loading || googleLoading}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-[#0B0B0B] text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
          style={{ background: '#FF6B00', boxShadow: '0 0 25px rgba(255,107,0,0.3)' }}>
          {loading ? <Loader2 size={16} className="animate-spin" /> : 'Sign In'}
        </button>
      </form>

      <p className="mt-8 text-center text-zinc-400 text-sm">
        New to LuraLoop?{' '}
        <button onClick={() => onSwitch('signup')} className="text-white hover:text-orange-400 font-semibold transition-colors">
          Sign Up
        </button>
      </p>
    </PanelWrap>
  )
}

// ─── Sign Up Form ─────────────────────────────────────────────────
function SignupForm({ onSwitch }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const clean = { 
        name: sanitize(name), 
        email: sanitize(email.trim()), 
        companyName: sanitize(companyName), 
        password 
      }
      const errs = validateSignup(clean)
      if (Object.keys(errs).length) { setErrors(errs); return }
      
      setErrors({})
      setLoading(true)
      // Simulate auth integration
      await new Promise(resolve => setTimeout(resolve, 1600))
      setLoading(false)
      setSubmitted(true)
    } catch (error) {
      setErrors({ form: 'An unexpected error occurred during registration.' })
      setLoading(false)
    }
  }

  const handleGoogleAuth = async () => {
    try {
      setGoogleLoading(true)
      await new Promise(resolve => setTimeout(resolve, 1500))
      setGoogleLoading(false)
      setSubmitted(true)
    } catch (error) {
      setErrors({ form: 'Google authentication failed. Please try again.' })
      setGoogleLoading(false)
    }
  }

  if (submitted) {
    return (
      <PanelWrap>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 15, stiffness: 200, delay: 0.1 }}
            className="w-20 h-20 rounded-full border border-emerald-500/30 flex items-center justify-center mx-auto mb-6 bg-emerald-500/10 shadow-[0_0_30px_rgba(16,185,129,0.2)]"
          >
            <CheckCircle className="text-emerald-500 w-10 h-10" strokeWidth={2.5} />
          </motion.div>
          <h3 className="text-white font-bold text-xl mb-3">Workspace Provisioned</h3>
          <p className="text-zinc-400 text-sm max-w-sm mx-auto leading-relaxed">
            Your enterprise node has been successfully created. Please check your inbox to verify your secure access credentials.
          </p>
        </motion.div>
      </PanelWrap>
    )
  }

  return (
    <PanelWrap>
      <div className="mb-6 text-center">
        <h2 className="text-white text-2xl font-bold tracking-tight">Create your Workspace</h2>
        <p className="text-white/40 text-sm mt-2">Deploy your enterprise architecture.</p>
      </div>

      <button 
        type="button" 
        onClick={handleGoogleAuth}
        disabled={googleLoading || loading}
        className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-white/5 hover:bg-white/10 transition-all duration-300 text-white font-medium text-sm mb-6 disabled:opacity-50"
      >
        {googleLoading ? <Loader2 size={18} className="animate-spin text-zinc-400" /> : <GoogleIcon />}
        Sign Up with Google
      </button>

      <div className="flex items-center gap-3 mb-6">
        <div className="h-px flex-1 bg-zinc-800"></div>
        <span className="text-zinc-500 text-xs font-medium uppercase tracking-widest">Or Register With Email</span>
        <div className="h-px flex-1 bg-zinc-800"></div>
      </div>

      {errors.form && <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center">{errors.form}</div>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
        <AuthInput id="signup-name" label="Full Name" type="text"
          value={name} onChange={(e) => setName(e.target.value)}
          error={errors.name} placeholder="Jane Smith" autoComplete="name" />

        <AuthInput id="signup-email" label="Work Email" type="email"
          value={email} onChange={(e) => setEmail(e.target.value)}
          error={errors.email} placeholder="you@company.com" autoComplete="email" />

        <AuthInput id="signup-company" label="Company Name" type="text"
          value={companyName} onChange={(e) => setCompanyName(e.target.value)}
          error={errors.companyName} placeholder="Acme Corp" autoComplete="organization" />

        <AuthInput id="signup-password" label="Create Secure Password" type="password"
          value={password} onChange={(e) => setPassword(e.target.value)}
          error={errors.password} placeholder="Min. 8 characters" autoComplete="new-password" />

        <button type="submit" disabled={loading || googleLoading}
          className="w-full flex items-center justify-center gap-2 py-3.5 mt-2 rounded-xl font-bold text-[#0B0B0B] text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
          style={{ background: '#FF6B00', boxShadow: '0 0 25px rgba(255,107,0,0.3)' }}>
          {loading ? <Loader2 size={16} className="animate-spin" /> : 'Create Account'}
        </button>
      </form>

      <p className="mt-8 text-center text-zinc-400 text-sm">
        Already have an enterprise node?{' '}
        <button onClick={() => onSwitch('login')} className="text-white hover:text-orange-400 font-semibold transition-colors">
          Login
        </button>
      </p>
    </PanelWrap>
  )
}

// ─── Forgot Password Form ─────────────────────────────────────────
function ForgotForm({ onSwitch }) {
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const clean = { email: sanitize(email.trim()) }
      const errs = validateForgot(clean)
      if (Object.keys(errs).length) { setErrors(errs); return }
      
      setErrors({})
      setLoading(true)
      // Simulate auth integration point
      await new Promise(resolve => setTimeout(resolve, 1500))
      setLoading(false)
      setSent(true)
    } catch (error) {
      setErrors({ form: 'An error occurred while sending the reset link.' })
      setLoading(false)
    }
  }

  return (
    <PanelWrap>
      <button onClick={() => onSwitch('login')}
        className="flex items-center gap-1.5 text-white/40 hover:text-white text-xs font-medium transition-colors mb-8">
        <ArrowLeft size={14} /> Back to Login
      </button>

      {sent ? (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-6">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
            style={{ background: 'rgba(255,107,0,0.12)', border: '1px solid rgba(255,107,0,0.25)' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2">
              <path d="M20 12V22H4V12" /><path d="M22 7H2v5h20V7z" /><path d="M12 22V7" />
              <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
              <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
            </svg>
          </div>
          <h3 className="text-white font-bold text-xl mb-3">Reset Link Dispatched</h3>
          <p className="text-zinc-400 text-sm max-w-sm mx-auto leading-relaxed">
            Check your inbox at <span className="text-white font-medium">{email}</span> for the secure password recovery link.
          </p>
        </motion.div>
      ) : (
        <>
          <div className="mb-8 text-center">
            <h2 className="text-white text-2xl font-bold tracking-tight">Password Recovery</h2>
            <p className="text-white/40 text-sm mt-2">Enter your work email to receive a secure reset link.</p>
          </div>
          
          {errors.form && <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center">{errors.form}</div>}
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
            <AuthInput id="forgot-email" label="Work Email" type="email" value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email} placeholder="you@company.com" autoComplete="email" />
              
            <button type="submit" disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3.5 mt-2 rounded-xl font-bold text-[#0B0B0B] text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
              style={{ background: '#FF6B00', boxShadow: '0 0 25px rgba(255,107,0,0.3)' }}>
              {loading ? <Loader2 size={16} className="animate-spin" /> : 'Send Recovery Link'}
            </button>
          </form>
        </>
      )}
    </PanelWrap>
  )
}


export default AuthOverlay;
