'use client'
import { useState, useEffect, useCallback } from 'react'
import { X, Activity, Globe, Cpu, Database, Zap, Network, GitBranch, ArrowRight, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────
const orchestrationNodes = [
  {
    id: 'openai',
    name: 'OpenAI GPT-o Series',
    category: 'FRONTIER LLM',
    badgeColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    icon: <Globe className="text-emerald-400" size={16} />,
    desc: 'Advanced reasoning engine powering enterprise cognitive pipelines.',
    url: 'https://openai.com/news/',
    detail: 'OpenAI GPT-o series delivers frontier-level reasoning for complex multi-step tasks, document synthesis, and decision intelligence across regulated industries.',
    metrics: [
      { label: 'Context Window', value: '128K tokens' },
      { label: 'Deployment', value: 'API / Azure' },
      { label: 'Compliance', value: 'SOC 2, HIPAA' },
    ]
  },
  {
    id: 'anthropic',
    name: 'Anthropic Claude 3.5',
    category: 'INTELLIGENCE LAYER',
    badgeColor: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    icon: <Cpu className="text-violet-400" size={16} />,
    desc: 'Deep artifact processing and Constitutional AI for safe reasoning.',
    url: 'https://www.anthropic.com/news',
    detail: 'Claude 3.5 provides safe, steerable, and high-fidelity reasoning. Ideal for compliance-heavy sectors where output determinism and audit traceability are critical.',
    metrics: [
      { label: 'Context Window', value: '200K tokens' },
      { label: 'Speciality', value: 'Constitutional AI' },
      { label: 'Compliance', value: 'GDPR Ready' },
    ]
  },
  {
    id: 'gemini',
    name: 'Google Gemini Enterprise',
    category: 'FRONTIER MULTIMODAL',
    badgeColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    icon: <Database className="text-cyan-400" size={16} />,
    desc: 'Long-context native multimodal processing with 2M+ token windows.',
    url: 'https://deepmind.google/discover/',
    detail: 'Google Gemini Enterprise handles video, image, audio, and text natively in a single model. Powers document-heavy enterprise workflows with industry-leading context windows.',
    metrics: [
      { label: 'Context Window', value: '2M tokens' },
      { label: 'Modalities', value: 'Text, Image, Video, Audio' },
      { label: 'Deployment', value: 'Google Cloud / Vertex AI' },
    ]
  },
  {
    id: 'llama',
    name: 'Meta Llama 3 / Mistral',
    category: 'OPEN-WEIGHTS NODE',
    badgeColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    icon: <Database className="text-blue-400" size={16} />,
    desc: 'Local deployment models for maximum data privacy and on-premise execution.',
    url: 'https://ai.meta.com/blog/',
    detail: 'Open-weights architecture allows complete on-premise deployment behind client firewalls. Zero data egress guarantees for the most privacy-sensitive enterprise environments.',
    metrics: [
      { label: 'Deployment', value: 'On-Premise / Private Cloud' },
      { label: 'Data Egress', value: 'Zero' },
      { label: 'Licence', value: 'Open-Weights' },
    ]
  },
  {
    id: 'groq',
    name: 'Groq LPU API',
    category: 'SPEED LAYER',
    badgeColor: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
    icon: <Zap className="text-orange-400" size={16} />,
    desc: 'Microsecond routing and ultra-low latency inference engine.',
    url: 'https://groq.com/newsroom/',
    detail: 'Groq LPU delivers 800+ tokens/second inference speeds on open-weights models. Enables real-time conversational AI, live document routing, and sub-second decision loops.',
    metrics: [
      { label: 'Speed', value: '800+ T/s' },
      { label: 'Latency', value: 'Sub-100ms TTFT' },
      { label: 'Use Case', value: 'Real-Time Agent Routing' },
    ]
  },
  {
    id: 'n8n',
    name: 'n8n Automation',
    category: 'WORKFLOW ENGINE',
    badgeColor: 'text-pink-400 bg-pink-400/10 border-pink-400/20',
    icon: <Network className="text-pink-400" size={16} />,
    desc: 'Advanced agent frameworks and secure webhook orchestration.',
    url: 'https://n8n.io/blog/',
    detail: 'n8n powers our no-code automation backbone — enabling partners to visually build, deploy, and monitor enterprise workflow chains without writing backend infrastructure.',
    metrics: [
      { label: 'Nodes', value: '400+ integrations' },
      { label: 'Deployment', value: 'Self-hosted / Cloud' },
      { label: 'Auth', value: 'OAuth2, API Key, Basic' },
    ]
  },
  {
    id: 'langchain',
    name: 'LangChain',
    category: 'WORKFLOW ENGINE',
    badgeColor: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    icon: <GitBranch className="text-yellow-400" size={16} />,
    desc: 'Modular automation infrastructure and cognitive memory mapping.',
    url: 'https://blog.langchain.dev/',
    detail: 'LangChain provides the orchestration layer for chaining LLM calls, tool use, memory, and agent decision trees into production-grade cognitive pipelines.',
    metrics: [
      { label: 'Pattern', value: 'Agent / Chain / RAG' },
      { label: 'Memory', value: 'Vector + Episodic' },
      { label: 'Tools', value: '100+ native integrations' },
    ]
  }
]

const performanceLeaders = [
  { category: 'TOP OPEN SOURCE ENGINE', model: 'GLM-5.2', metric: 'Peak architectural efficiency on decentralised parameters.', color: 'text-blue-400' },
  { category: 'COST EFFICIENCY / TOP 10 INDEX', model: 'Qwen-3.7 Max', metric: 'Lowest token cost-to-performance ratio globally across multi-agent workflows.', color: 'text-emerald-400' },
  { category: 'MASSIVE CONTEXT MEMORY WINDOW', model: 'Grok 4 Fast', metric: 'Extreme multi-million token retrieval accuracy for deep legal/financial operations.', color: 'text-purple-400' },
  { category: 'COMPUTE SPEED / GENERATION LATENCY', model: 'MiniMax M2.1', metric: 'Fastest operational output velocity for instant exception routing layers.', color: 'text-orange-400' },
  { category: 'FRONTIER INTELLIGENCE PLATFORM', model: 'Claude Mythos Preview', metric: 'Apex dynamic reasoning and advanced schema compliance index score.', color: 'text-rose-400' }
]

const newsFeed = [
  { id: 1, badge: 'LIVE WIRE', type: 'wire', title: 'Groq LPU Architecture Achieves 800 T/s Inference Speeds on Open-Weights Models', time: '12 mins ago' },
  { id: 2, badge: 'COMPLIANCE', type: 'compliance', title: 'EU AI Act Final Draft: Implications for Autonomous Agent Deployment', time: '1 hour ago' },
  { id: 3, badge: 'MARKET', type: 'market', title: 'Enterprise Adoption of Local LLM Deployment Surpasses 45% in Q3', time: '3 hours ago' },
  { id: 4, badge: 'LIVE WIRE', type: 'wire', title: 'n8n Releases Advanced Webhooks for Asynchronous Multi-Agent Tasks', time: '5 hours ago' },
  { id: 5, badge: 'COMPLIANCE', type: 'compliance', title: 'HIPAA-Aligned LLM Wrappers: New Architecture Standards Published', time: '12 hours ago' },
]

// ─────────────────────────────────────────────
// Card Detail Modal
// ─────────────────────────────────────────────
function CardModal({ node, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const getBadgeColor = (type) => {
    if (type === 'wire') return 'text-red-400 bg-red-400/10 border-red-400/20'
    if (type === 'compliance') return 'text-blue-400 bg-blue-400/10 border-blue-400/20'
    return 'text-purple-400 bg-purple-400/10 border-purple-400/20'
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl rounded-2xl border border-white/8 bg-[#0E0E0E] shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-white/6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 rounded-lg border border-white/8 bg-white/4 p-2.5 mt-0.5">
                {node.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">{node.name}</h3>
                <span className={`inline-block rounded border px-2 py-[2px] text-[8px] font-bold uppercase tracking-widest ${node.badgeColor}`}>
                  {node.category}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="flex-shrink-0 rounded-lg border border-white/8 bg-white/4 p-2 text-white/40 hover:text-white/80 hover:border-white/15 transition-colors"
            >
              <X size={15} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 grid sm:grid-cols-2 gap-6">
            {/* Left: Detail + Metrics */}
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/25 mb-2">Overview</p>
                <p className="text-sm text-white/60 leading-relaxed">{node.detail}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/25 mb-3">Specifications</p>
                <div className="flex flex-col gap-2">
                  {node.metrics.map((m, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg bg-white/[0.03] border border-white/5 px-3 py-2">
                      <span className="text-[11px] text-white/35 font-medium">{m.label}</span>
                      <span className="text-[11px] text-white/80 font-semibold">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href={node.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] font-semibold text-white/50 hover:text-white transition-colors group"
              >
                <ExternalLink size={12} className="group-hover:text-orange-400 transition-colors" />
                Official Research Registry
                <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Right: Frontier Performance Index */}
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/25 mb-2">Monitored Global Labs</p>
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-[10px] font-medium text-white/40">
                  {['Google', 'Anthropic', 'OpenAI', 'Alibaba', 'DeepSeek', 'xAI'].map((lab, i, arr) => (
                    <span key={lab} className="flex items-center gap-2">
                      {lab}
                      {i < arr.length - 1 && <span className="text-white/10">|</span>}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-white/6 bg-[#141414] overflow-hidden">
                <div className="p-3 border-b border-white/6 flex items-center gap-2">
                  <Activity size={11} className="text-white/30" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">Frontier Performance Index</span>
                </div>
                <div className="p-3 flex flex-col gap-3">
                  {performanceLeaders.map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-0.5">
                      <span className={`text-[7px] font-bold uppercase tracking-widest ${item.color}`}>{item.category}</span>
                      <h4 className="text-[11px] font-bold text-white/80">{item.model}</h4>
                      <p className="text-[9px] leading-relaxed text-white/35">{item.metric}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Live Wire Snippet */}
              <div className="rounded-xl border border-white/6 bg-[#141414] overflow-hidden">
                <div className="p-3 border-b border-white/6 flex items-center gap-2">
                  <Activity size={11} className="text-white/30" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">Global Intelligence Wire</span>
                </div>
                <div className="p-3 flex flex-col gap-3">
                  {newsFeed.slice(0, 3).map((item) => (
                    <article key={item.id} className="border-l-2 border-white/6 pl-2.5">
                      <span className={`inline-block mb-1 rounded border px-1.5 py-[1px] text-[7px] font-bold uppercase tracking-widest ${getBadgeColor(item.type)}`}>
                        {item.badge}
                      </span>
                      <p className="text-[10px] font-medium text-white/65 leading-snug">{item.title}</p>
                      <p className="text-[8px] text-white/25 mt-1 font-mono">{item.time}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ─────────────────────────────────────────────
// Main Section
// ─────────────────────────────────────────────
export default function PlatformCapabilities() {
  const [activeCard, setActiveCard] = useState(null)

  const handleClose = useCallback(() => setActiveCard(null), [])

  return (
    <section id="platform" className="py-24 bg-[#0D0D0D] border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-14 md:text-center">
          <span className="section-tag md:mx-auto">
            <Activity size={10} />
            Live Intelligence Hub
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Frontier Platform <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto leading-relaxed">
            The AI ecosystem layer powering LuraLoop&apos;s enterprise automation stack. Click any node to explore its architecture.
          </p>
        </div>

        {/* Clean Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {orchestrationNodes.map((node, idx) => (
            <motion.button
              key={node.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setActiveCard(node)}
              className="group text-left w-full rounded-xl border border-white/6 bg-[#141414] p-4 transition-all duration-200 hover:border-white/12 hover:bg-[#181818] cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0 rounded-lg border border-white/8 bg-white/4 p-2">
                  {node.icon}
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white leading-tight">{node.name}</h3>
                </div>
              </div>
              <span className={`inline-block rounded border px-1.5 py-[2px] text-[8px] font-bold uppercase tracking-widest mb-2.5 ${node.badgeColor}`}>
                {node.category}
              </span>
              <p className="text-[10px] leading-relaxed text-white/40 line-clamp-2">
                {node.desc}
              </p>
              <div className="mt-3 flex items-center gap-1 text-[10px] text-white/20 group-hover:text-orange-400/60 transition-colors">
                <span>View Details</span>
                <ArrowRight size={9} />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Card Detail Modal */}
      {activeCard && (
        <CardModal node={activeCard} onClose={handleClose} />
      )}
    </section>
  )
}
