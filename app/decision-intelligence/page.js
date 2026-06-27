import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Decision Intelligence | LuraLoop Operational Context',
  description: 'Turn live workflow signals into structured, faster operational decisions with AI-assisted recommendations.',
  robots: { index: true, follow: true },
};

export default function DecisionIntelligencePage() {
  return (
    <main className="luxury-ambient-bg min-h-screen text-zinc-100 selection:bg-orange-600/30 overflow-x-hidden pt-24 pb-16">
      
      {/* 🚀 HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-orange-500 font-mono tracking-widest text-xs font-semibold uppercase mb-4">DECISION INTELLIGENCE</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Turn Workflow Signals <br /> Into Faster Operational Decisions
            </h1>
            <p className="text-zinc-300 text-lg sm:text-xl font-medium leading-relaxed mb-4 max-w-[64ch]">
              LuraLoop helps teams interpret live workflow context, surface recommendations, and support high-volume operational decisions through connected AI-driven intelligence.
            </p>
            <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-[60ch]">
              Designed for enterprise environments where speed, visibility, and consistency matter, Decision Intelligence helps route decisions, highlight next actions, and support operational teams with structured AI-assisted guidance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full">
              {['Live Workflow Visibility', 'AI-Assisted Recommendations', 'Faster Operational Decisions', 'Structured Escalation Paths'].map((prop, idx) => (
                <div key={idx} className="border-l-2 border-orange-600/50 pl-4 py-1">
                  <h4 className="text-white text-sm font-semibold">{prop}</h4>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
              <Link href="#contact" className="w-full sm:w-auto bg-orange-600 text-white font-medium px-6 py-3 rounded-lg text-center transition">View Decision Intelligence</Link>
              <Link href="#contact" className="w-full sm:w-auto bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium px-6 py-3 rounded-lg text-center transition">Talk to the Platform Team</Link>
            </div>
          </div>

          {/* Right Column - Control Signal Panel Visual */}
          <div className="lg:col-span-6 flex justify-end w-full lg:pl-4">
            <div className="w-full max-w-xl bg-zinc-950/40 backdrop-blur-md rounded-xl border border-white/5 shadow-2xl p-6 sm:p-8 flex flex-col gap-4 transform lg:translate-y-4">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">04 / Control Panel Signals</span>
              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between border-b border-zinc-900 pb-2"><span>Live Workflow Signals</span><span className="text-green-500">Analyzing</span></div>
                <div className="flex justify-between border-b border-zinc-900 pb-2"><span>Recommendation Queue</span><span className="text-white">Active</span></div>
                <div className="flex justify-between border-b border-zinc-900 pb-2"><span>Priority Routing Matrix</span><span className="text-orange-500">98% Secure</span></div>
                <div className="flex justify-between"><span>Escalation Protocol Layer</span><span className="text-zinc-500">Standby</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔮 CAPABILITY CARDS SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 border-t border-zinc-900">
        <div className="text-left mb-12">
          <span className="text-orange-500 font-mono tracking-widest text-xs font-semibold uppercase block mb-3">Intelligence Layer</span>
          <h2 className="text-3xl font-bold text-white mb-4">Analytical Capabilities</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Recommendation Engines', 'Decision Routing', 'Priority Detection', 'Exception Visibility', 'Escalation Guidance', 'Operational Insight Layers'].map((item, idx) => (
            <div key={idx} className="bg-zinc-950/40 border border-zinc-900 rounded-xl p-6 hover:border-zinc-800 transition">
              <h3 className="text-white font-semibold text-base mb-2">{item}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">Contextual decision modeling built for real-time risk mitigation pipelines.</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🛡️ SECURITY MINI-BLOCK */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 border-t border-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Access-Scoped Intelligence', 'Controlled Recommendation Logic', 'Enterprise-Aligned Data Handling'].map((title, idx) => (
            <div key={idx} className="bg-zinc-950/20 border border-zinc-900/60 p-5 rounded-lg">
              <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
              <p className="text-zinc-500 text-xs">Dynamic isolated context nodes ensuring zero metadata retention leaks.</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🎯 FINAL CTA BLOCK */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center border-t border-zinc-900">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Support Faster Decisions Across Enterprise Operations</h2>
        <div className="flex items-center justify-center gap-4">
          <Link href="#contact" className="bg-orange-600 text-white font-medium px-8 py-3 rounded-lg">Book A Demo</Link>
        </div>
      </section>

    </main>
  );
}