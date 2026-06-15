'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { client, urlFor } from '@/lib/sanity'
import { ArrowRight, Calendar, Rss, Zap } from 'lucide-react'
import Image from 'next/image'

const QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id, title, slug, mainImage, publishedAt, excerpt, categories[]->{ title }
}`

function LivePulse() {
  return (
    <span className="relative inline-flex items-center gap-2">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
      </span>
      <span className="text-orange-500 text-xs font-semibold uppercase tracking-widest">Live Data Stream</span>
    </span>
  )
}

function PostCard({ post, index }) {
  const isFeatured = index === 0
  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(800).url() : null
  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    : 'Recently Published'

  return (
    <motion.a
      href={`/blog/${post.slug?.current || ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
      className={`group relative flex flex-col rounded-2xl overflow-hidden border border-zinc-800/50 bg-[#0B0B0B]/40 backdrop-blur-md hover:border-orange-500/40 hover:scale-[1.02] transition-all duration-300 cursor-pointer ${
        isFeatured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {/* Image */}
      <div className={`relative w-full overflow-hidden ${isFeatured ? 'h-72 md:h-96' : 'h-52'}`}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.title || 'Blog article'}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-orange-900/20 to-[#0B0B0B]">
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,107,0,0.15) 0%, transparent 70%)',
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <Zap size={64} className="text-orange-500" />
            </div>
          </div>
        )}
        {/* Dark gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent" />

        {/* Featured badge */}
        {isFeatured && (
          <div className="absolute top-4 left-4 text-[9px] font-bold tracking-widest px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 uppercase">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`flex flex-col flex-1 ${isFeatured ? 'p-8' : 'p-6'}`}>
        {/* Meta row */}
        <div className="flex items-center gap-4 mb-4">
          <span className="flex items-center gap-1.5 text-white/40 text-xs">
            <Calendar size={11} />
            {date}
          </span>
          {post.categories?.[0] && (
            <span className="text-[10px] font-semibold tracking-widest px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 uppercase">
              {post.categories[0].title}
            </span>
          )}
        </div>

        <h3 className={`text-white font-bold leading-snug group-hover:text-orange-400 transition-colors mb-3 ${isFeatured ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
          {post.title}
        </h3>

        {post.excerpt && (
          <p className={`text-white/50 leading-relaxed flex-1 mb-6 ${isFeatured ? 'text-base' : 'text-sm'}`}>
            {post.excerpt}
          </p>
        )}

        <span className="mt-auto inline-flex items-center gap-2 text-orange-500 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
          Read Article <ArrowRight size={15} />
        </span>
      </div>

      {/* Hover glow edge */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 40px rgba(255,107,0,0.04)' }}
      />
    </motion.a>
  )
}

function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-32 px-6 text-center rounded-2xl border border-zinc-800/50 bg-[#0B0B0B]/40 backdrop-blur-md"
    >
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
        style={{
          background: 'linear-gradient(135deg, rgba(255,107,0,0.15) 0%, rgba(255,107,0,0.05) 100%)',
          border: '1px solid rgba(255,107,0,0.2)',
          boxShadow: '0 0 40px rgba(255,107,0,0.1)',
        }}
      >
        <Rss size={32} className="text-orange-500 opacity-80" />
      </div>
      <h3 className="text-white text-2xl font-bold mb-3 tracking-tight">
        Wired to Sanity CMS.
      </h3>
      <p className="text-orange-500 font-semibold text-sm mb-2">Awaiting live data stream...</p>
      <p className="text-white/35 text-sm max-w-sm mx-auto leading-relaxed mt-2">
        The moment you hit <span className="text-white/60 font-medium">Publish</span> in your Sanity Studio dashboard, your article will appear here instantly — no rebuild required.
      </p>
      <div className="mt-8 flex items-center gap-2 text-white/20 text-xs">
        <LivePulse />
        <span className="text-white/20">— Listening for new posts...</span>
      </div>
    </motion.div>
  )
}

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Initial fetch: populate data the moment the component mounts
    client.fetch(QUERY)
      .then((data) => { setPosts(data || []); setLoading(false) })
      .catch((err) => { console.error('[Sanity] Initial fetch error:', err); setLoading(false) })

    // Real-time WebSocket listener — catches EVERY mutation on _type == "post"
    const subscription = client.listen(QUERY, {}, { includeResult: true }).subscribe((update) => {
      console.log('[Sanity Live] Mutation received:', update.type)
      // Re-fetch the complete ordered list on any change (publish, edit, delete)
      client.fetch(QUERY)
        .then((data) => setPosts(data || []))
        .catch((err) => console.error('[Sanity] Re-fetch error:', err))
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <section id="blog" className="min-h-screen py-20 relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(255,107,0,0.07) 0%, transparent 60%),' +
            'radial-gradient(ellipse 40% 60% at 10% 80%, rgba(255,107,0,0.04) 0%, transparent 50%)',
        }}
      />
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ═══ CINEMATIC HEADER ═══ */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <LivePulse />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6"
          >
            The LuraLoop Engine —{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(90deg, #FF6B00, #FF9A40, #FF6B00)', backgroundSize: '200%' }}
            >
              Inside AI Automation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Technical breakdowns, architecture deep-dives, and enterprise workflow case studies — published directly from our engineering team.
          </motion.p>

          {/* Divider line */}
          <div className="mt-12 h-px w-full max-w-3xl mx-auto bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
        </div>

        {/* ═══ POSTS GRID / STATES ═══ */}
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-80 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 animate-pulse" />
              ))}
            </motion.div>
          ) : posts.length === 0 ? (
            <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <EmptyState />
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
            >
              {posts.map((post, i) => (
                <PostCard key={post._id} post={post} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
