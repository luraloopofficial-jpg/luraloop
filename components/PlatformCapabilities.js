'use client'
import { useState, useEffect } from 'react'
import { Activity, Globe, Cpu, Database, Zap, Network, GitBranch, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const orchestrationNodes = [
  {
    id: 'openai',
    name: 'OpenAI GPT-o Series',
    category: 'FRONTIER LLM',
    badgeColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    icon: <Globe className="text-emerald-400" size={16} />,
    desc: 'Advanced reasoning engine powering enterprise cognitive pipelines.',
    url: 'https://openai.com/news/'
  },
  {
    id: 'anthropic',
    name: 'Anthropic Claude 3.5',
    category: 'INTELLIGENCE LAYER',
    badgeColor: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    icon: <Cpu className="text-violet-400" size={16} />,
    desc: 'Deep artifact processing and Constitutional AI for safe reasoning.',
    url: 'https://www.anthropic.com/news'
  },
  {
    id: 'gemini',
    name: 'Google Gemini Enterprise',
    category: 'FRONTIER MULTIMODAL',
    badgeColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    icon: <Database className="text-cyan-400" size={16} />,
    desc: 'Long-context native multimodal processing engine featuring native 2M+ token reasoning windows.',
    url: 'https://deepmind.google/discover/'
  },
  {
    id: 'llama',
    name: 'Meta Llama 3 / Mistral',
    category: 'OPEN-WEIGHTS NODE',
    badgeColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    icon: <Database className="text-blue-400" size={16} />,
    desc: 'Local deployment models for maximum data privacy and on-premise execution.',
    url: 'https://ai.meta.com/blog/'
  },
  {
    id: 'groq',
    name: 'Groq LPU API',
    category: 'SPEED LAYER',
    badgeColor: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
    icon: <Zap className="text-orange-400" size={16} />,
    desc: 'Microsecond routing and ultra-low latency inference engine.',
    url: 'https://groq.com/newsroom/'
  },
  {
    id: 'n8n',
    name: 'n8n Automation',
    category: 'WORKFLOW ENGINE',
    badgeColor: 'text-pink-400 bg-pink-400/10 border-pink-400/20',
    icon: <Network className="text-pink-400" size={16} />,
    desc: 'Advanced agent frameworks and secure webhook orchestration.',
    url: 'https://n8n.io/blog/'
  },
  {
    id: 'langchain',
    name: 'LangChain',
    category: 'WORKFLOW ENGINE',
    badgeColor: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    icon: <GitBranch className="text-yellow-400" size={16} />,
    desc: 'Modular automation infrastructure and cognitive memory mapping.',
    url: 'https://blog.langchain.dev/'
  }
]

// ─────────────────────────────────────────────
// Live News Feed Component
// ─────────────────────────────────────────────
function LiveNewsFeed() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    const fetchNews = async () => {
      setLoading(true)
      // Simulate real-time fetch to a global news wire
      await new Promise(r => setTimeout(r, 800))
      if (!isMounted) return
      setNews([
        { id: 1, badge: 'LIVE WIRE', type: 'wire', title: 'Groq LPU Architecture Achieves 800 T/s Inference Speeds on Open-Weights Models', time: '12 mins ago' },
        { id: 2, badge: 'COMPLIANCE ARTICLE', type: 'compliance', title: 'EU AI Act Final Draft: Implications for Autonomous Agent Deployment', time: '1 hour ago' },
        { id: 3, badge: 'MARKET ANALYSIS', type: 'market', title: 'Enterprise Adoption of Local LLM Deployment Surpasses 45% in Q3', time: '3 hours ago' },
        { id: 4, badge: 'LIVE WIRE', type: 'wire', title: 'n8n Releases Advanced Webhooks for Asynchronous multi-agent Tasks', time: '5 hours ago' },
        { id: 5, badge: 'COMPLIANCE ARTICLE', type: 'compliance', title: 'HIPAA-Aligned LLM Wrappers: New Architecture Standards Published', time: '12 hours ago' },
      ])
      setLoading(false)
    }
    fetchNews()
    return () => { isMounted = false }
  }, [])

  const getBadgeColor = (type) => {
    if (type === 'wire') return 'text-red-400 bg-red-400/10 border-red-400/20'
    if (type === 'compliance') return 'text-blue-400 bg-blue-400/10 border-blue-400/20'
    return 'text-purple-400 bg-purple-400/10 border-purple-400/20'
  }

  return (
    <div className="flex flex-col h-full rounded-xl border border-white/6 bg-[#141414] overflow-hidden">
      <div className="p-3.5 border-b border-white/6 bg-white/4 flex items-center gap-2">
        <Activity size={13} className="text-white/40" />
        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">Global Intelligence Wire</span>
      </div>
      
      <div className="p-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 flex flex-col gap-4">
        {loading ? (
          <div className="flex flex-col gap-4 animate-pulse">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex flex-col gap-2">
                <div className="h-4 w-20 bg-white/5 rounded" />
                <div className="h-7 w-full bg-white/5 rounded" />
                <div className="h-2 w-12 bg-white/5 rounded" />
              </div>
            ))}
          </div>
        ) : (
          news.map((item) => (
            <article key={item.id} className="group relative border-l-[3px] border-transparent hover:border-white/20 pl-3 transition-colors">
              <span className={`inline-block mb-1.5 rounded border px-1.5 py-[2px] text-[8px] font-bold uppercase tracking-widest ${getBadgeColor(item.type)}`}>
                {item.badge}
              </span>
              <h4 className="text-xs font-semibold text-white/80 leading-relaxed group-hover:text-white transition-colors">
                {item.title}
              </h4>
              <p className="text-[9px] text-white/30 mt-1.5 font-mono">{item.time}</p>
            </article>
          ))
        )}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// Frontier Performance Index
// ─────────────────────────────────────────────
const performanceLeaders = [
  { category: 'TOP OPEN SOURCE ENGINE', model: 'GLM-5.2', metric: 'Peak architectural efficiency on decentralised parameters.', color: 'text-blue-400' },
  { category: 'COST EFFICIENCY / TOP 10 INDEX', model: 'Qwen-3.7 Max', metric: 'Lowest token cost-to-performance ratio globally across multi-agent workflows.', color: 'text-emerald-400' },
  { category: 'MASSIVE CONTEXT MEMORY WINDOW', model: 'Grok 4 Fast', metric: 'Extreme multi-million token retrieval accuracy for deep legal/financial operations.', color: 'text-purple-400' },
  { category: 'COMPUTE SPEED / GENERATION LATENCY', model: 'MiniMax M2.1', metric: 'Fastest operational output velocity for instant exception routing layers.', color: 'text-orange-400' },
  { category: 'FRONTIER INTELLIGENCE PLATFORM', model: 'Claude Mythos Preview', metric: 'Apex dynamic reasoning and advanced schema compliance index score.', color: 'text-rose-400' }
]

function FrontierPerformanceIndex() {
  return (
    <div className="flex flex-col h-full rounded-xl border border-white/6 bg-[#141414] overflow-hidden">
      <div className="p-3.5 border-b border-white/6 bg-white/4 flex items-center gap-2">
        <Activity size={13} className="text-white/40" />
        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">Performance Index</span>
      </div>
      <div className="p-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 flex flex-col">
        <div className="mb-5 pb-4 border-b border-white/6">
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/30 mb-2.5">Monitored Global Labs</p>
          <div className="flex flex-wrap gap-x-2 gap-y-1.5 text-[10px] font-medium text-white/50">
            <span>Google</span><span className="text-white/10">|</span>
            <span>Anthropic</span><span className="text-white/10">|</span>
            <span>OpenAI</span><span className="text-white/10">|</span>
            <span>Alibaba</span><span className="text-white/10">|</span>
            <span>DeepSeek</span><span className="text-white/10">|</span>
            <span>xAI</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {performanceLeaders.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <span className={`text-[8px] font-bold uppercase tracking-widest ${item.color}`}>{item.category}</span>
              <h4 className="text-xs font-bold text-white/90">{item.model}</h4>
              <p className="text-[10px] leading-relaxed text-white/40 mt-0.5">{item.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}



export default function PlatformCapabilities() {
  return (
    <section id="platform" className="py-24 bg-[#0D0D0D] border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 md:text-center">
          <span className="section-tag md:mx-auto">
            <Activity size={10} />
            Live Intelligence Hub
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5">
            Frontier Platform <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="text-white/40 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Real-time ecosystem monitoring and dynamic integration architecture for deploying advanced reasoning agents across the enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Ecosystem */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/25 ml-1">
              Orchestration Ecosystem & Tooling
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {orchestrationNodes.map((node, idx) => (
                <motion.a 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  key={node.id} 
                  href={node.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl border border-white/6 bg-[#141414] p-4 transition-all hover:border-white/15 hover:bg-[#181818] block"
                >
                  <div className="flex items-start gap-3 mb-2.5">
                    <div className="flex-shrink-0 rounded-lg border border-white/8 bg-white/4 p-2">
                      {node.icon}
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-white mb-1.5">{node.name}</h3>
                      <span className={`inline-block rounded border px-1.5 py-[2px] text-[8px] font-bold uppercase tracking-widest ${node.badgeColor}`}>
                        {node.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-[10px] leading-relaxed text-white/45">
                    {node.desc}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Middle: Performance Index */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col gap-3 h-[450px] lg:h-auto"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/25 ml-1">
              Frontier Capability Allocation
            </p>
            <FrontierPerformanceIndex />
          </motion.div>

          {/* Right: Live Feed */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 flex flex-col gap-3 h-[450px] lg:h-auto"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/25 ml-1">
              Live Network Monitor
            </p>
            <LiveNewsFeed />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
