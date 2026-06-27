import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Business Process Automation | LuraLoop Workflow Logic',
  description: 'Automate repetitive, recurring operational processes through end-to-end system-connected workflow logic.',
};

export default function BusinessProcessAutomationPage() {
  return (
    <div className="luxury-ambient-bg min-h-screen text-zinc-100 selection:bg-orange-600/30 overflow-x-hidden pt-24 pb-16">
      
      {/* 🚀 HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-orange-500 font-mono tracking-widest text-xs font-semibold uppercase mb-4">BUSINESS PROCESS AUTOMATION</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Automate Recurring Business Processes <br /> Across Enterprise Workflows
            </h1>
            <p className="text-zinc-300 text-lg sm:text-xl font-medium leading-relaxed mb-4 max-w-[64ch]">
              LuraLoop helps delivery partners automate repetitive, multi-step operational processes through workflow logic, connected systems, and controlled AI-driven execution.
            </p>
            <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-[60ch]">
              From intake and routing to approvals, notifications, task completion, and follow-up actions, Business Process Automation reduces manual workload while keeping enterprise operations structured, traceable, and aligned to existing systems.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full">
              {['Repeatable Workflow Logic', 'Cross-System Actions', 'Faster Operational Throughput', 'Reduced Manual Load'].map((prop, idx) => (
                <div key={idx} className="border-l-2 border-orange-600/50 pl-4 py-1">
                  <h4 className="text-white text-sm font-semibold">{prop}</h4>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
              <Link href="#contact" className="w-full sm:w-auto bg-orange-600 text-white font-medium px-6 py-3 rounded-lg text-center transition">Explore Process Automation</Link>
              <Link href="#contact" className="w-full sm:w-auto bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium px-6 py-3 rounded-lg text-center transition">Book A Demo</Link>
            </div>
          </div>

          {/* Right Column - Flow Map Chain Visual */}
          <div className="lg:col-span-6 flex justify-end w-full lg:pl-4">
            <div className="w-full max-w-xl bg-zinc-950/40 backdrop-blur-md rounded-xl border border-white/5 shadow-2xl p-6 sm:p-8 flex flex-col gap-2 transform lg:translate-y-4 font-mono text-xs text-zinc-400">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">03 / Process Chain</span>
              {['Request Triggered', 'Rule Verification Passed', 'Automation Path Map Generated', 'System Action Committed', 'Team Dashboard Updated'].map((step, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-orange-500">→</span>
                  <div className="bg-zinc-950/60 border border-zinc-900 p-2 rounded w-full">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🔮 CAPABILITY CARDS SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 border-t border-zinc-900">
        <div className="text-left mb-12">
          <span className="text-orange-500 font-mono tracking-widest text-xs font-semibold uppercase block mb-3">Automation Framework</span>
          <h2 className="text-3xl font-bold text-white mb-4">Core Automation Capabilities</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Task Routing', 'Approval Workflows', 'Notifications & Alerts', 'Service Coordination', 'Rules-Based Actions', 'Cross-Department Automation'].map((item, idx) => (
            <div key={idx} className="bg-zinc-950/40 border border-zinc-900 rounded-xl p-6 hover:border-zinc-800 transition">
              <h3 className="text-white font-semibold text-base mb-2">{item}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">Repeatable operational blueprints configured for zero-friction scaling.</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🛡️ SECURITY MINI-BLOCK */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 border-t border-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Controlled Processing', 'Workflow Traceability', 'Client System Governance'].map((title, idx) => (
            <div key={idx} className="bg-zinc-950/20 border border-zinc-900/60 p-5 rounded-lg">
              <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
              <p className="text-zinc-500 text-xs">Total data auditing aligned to legacy corporate governance layers.</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🎯 FINAL CTA BLOCK */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center border-t border-zinc-900">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Automate Business Processes Without Adding Operational Complexity</h2>
        <div className="flex items-center justify-center gap-4">
          <Link href="#contact" className="bg-orange-600 text-white font-medium px-8 py-3 rounded-lg">Book A Demo</Link>
        </div>
      </section>

    </div>
  );
}