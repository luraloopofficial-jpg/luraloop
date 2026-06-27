import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Multi-Agent Infrastructure | LuraLoop Orchestration',
  description: 'Orchestrate multiple specialized AI agents across business functions with secure delegation and shared context.',
};

export default function MultiAgentInfrastructurePage() {
  return (
    <div className="luxury-ambient-bg min-h-screen text-zinc-100 selection:bg-orange-600/30 overflow-x-hidden pt-24 pb-16">
      
      {/* 🚀 HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-orange-500 font-mono tracking-widest text-xs font-semibold uppercase mb-4">MULTI-AGENT INFRASTRUCTURE</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Orchestrate Multiple AI Agents <br /> Across Business Functions
            </h1>
            <p className="text-zinc-300 text-lg sm:text-xl font-medium leading-relaxed mb-4 max-w-[64ch]">
              LuraLoop enables coordinated multi-agent environments where specialized AI workers handle tasks, delegate actions, escalate exceptions, and execute workflows across enterprise operations.
            </p>
            <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-[60ch]">
              Built for partner-led enterprise deployments, Multi-Agent Infrastructure allows different AI agents to operate with role-specific responsibilities while remaining synchronized through workflow rules, access boundaries, and shared operational logic.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full">
              {['Agent-to-Agent Delegation', 'Controlled Escalation Logic', 'Shared Workflow Context', 'Enterprise Coordination'].map((prop, idx) => (
                <div key={idx} className="border-l-2 border-orange-600/50 pl-4 py-1">
                  <h4 className="text-white text-sm font-semibold">{prop}</h4>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
              <Link href="#contact" className="w-full sm:w-auto bg-orange-600 text-white font-medium px-6 py-3 rounded-lg text-center transition">Explore Infrastructure</Link>
              <Link href="#contact" className="w-full sm:w-auto bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium px-6 py-3 rounded-lg text-center transition">Talk to the Platform Team</Link>
            </div>
          </div>

          {/* Right Column - Node Orchestration Visual */}
          <div className="lg:col-span-6 flex justify-end w-full lg:pl-4">
            <div className="w-full max-w-xl bg-zinc-950/40 backdrop-blur-md rounded-xl border border-white/5 shadow-2xl p-6 sm:p-8 flex flex-col gap-4 transform lg:translate-y-4">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">02 / Orchestration Grid</span>
              <div className="grid grid-cols-2 gap-3 font-mono text-xs text-center">
                {['Intake Agent', 'Scheduling Agent', 'Support Agent', 'Ops Agent', 'Escalation Agent', 'Connected Systems'].map((node, idx) => (
                  <div key={idx} className={`p-4 rounded-lg border ${node === 'Intake Agent' ? 'bg-zinc-900 border-orange-500/40 text-white' : 'bg-zinc-950/50 border-zinc-900 text-zinc-400'}`}>
                    {node}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔮 CAPABILITY CARDS SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 border-t border-zinc-900">
        <div className="text-left mb-12">
          <span className="text-orange-500 font-mono tracking-widest text-xs font-semibold uppercase block mb-3">Agent Architecture</span>
          <h2 className="text-3xl font-bold text-white mb-4">Scalable Orchestration Frameworks</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Specialized Agent Roles', 'Delegation Between Agents', 'Exception Handling', 'Shared Context Routing', 'Cross-Function Orchestration', 'Scalable Agent Networks'].map((item, idx) => (
            <div key={idx} className="bg-zinc-950/40 border border-zinc-900 rounded-xl p-6 hover:border-zinc-800 transition">
              <h3 className="text-white font-semibold text-base mb-2">{item}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">Configured matrix layers built to support synchronous multi-agent tasks.</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔄 WORKFLOW SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 border-t border-zinc-900">
        <div className="text-left mb-12"><h2 className="text-3xl font-bold text-white">How It Works</h2></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '01', desc: 'Request enters the multi-agent environment' },
            { step: '02', desc: 'Primary agent identifies core workflow intent' },
            { step: '03', desc: 'Supporting agents execute linked network tasks' },
            { step: '04', desc: 'Final unified action or structured escalation is completed' }
          ].map((item, idx) => (
            <div key={idx} className="bg-zinc-950/20 border border-zinc-900/60 rounded-xl p-6">
              <span className="text-orange-500 font-mono font-bold text-lg block mb-2">{item.step}</span>
              <p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🛡️ SECURITY MINI-BLOCK */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 border-t border-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Role-Aware Agent Boundaries', 'Controlled Workflow Escalation', 'Zero-Retention Coordination'].map((title, idx) => (
            <div key={idx} className="bg-zinc-950/20 border border-zinc-900/60 p-5 rounded-lg">
              <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
              <p className="text-zinc-500 text-xs">Advanced scoping parameters configured for secure execution ecosystems.</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🎯 FINAL CTA BLOCK */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center border-t border-zinc-900">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Deploy Coordinated AI Agents Across Enterprise Operations</h2>
        <div className="flex items-center justify-center gap-4">
          <Link href="#contact" className="bg-orange-600 text-white font-medium px-8 py-3 rounded-lg">Book A Demo</Link>
        </div>
      </section>

    </div>
  );
}