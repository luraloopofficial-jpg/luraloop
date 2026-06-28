import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "AI Operating Layer | LuraLoop Enterprise Infrastructure",
  description: "Add an intelligent AI-driven operating layer across enterprise environments without forcing core software replacement.",
  alternates: {
    canonical: "https://luraloop.vercel.app/ai-operating-systems",
  },
  openGraph: {
    title: "AI Operating Layer | LuraLoop",
    description: "Add an intelligent AI-driven operating layer across enterprise environments without forcing core software replacement.",
    url: "https://luraloop.vercel.app/ai-operating-systems",
    siteName: "LuraLoop",
    images: [{ url: "https://luraloop.vercel.app/hero-bg.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Operating Layer | LuraLoop",
    description: "Add an intelligent AI-driven operating layer across enterprise environments.",
    images: ["https://luraloop.vercel.app/hero-bg.jpg"],
  },
};


const cards = [
  { title: 'Workflow Coordination', desc: 'Connects disparate business workflows into a single coordinated execution layer without requiring any changes to underlying systems.' },
  { title: 'Trigger-Based Execution', desc: 'Actions execute automatically when specific events occur — a new booking, a status change, or an incoming message — with no manual intervention.' },
  { title: 'System-Aware Routing', desc: 'The operating layer understands which connected system should handle each request and routes accordingly — HMS, CRM, or ERP.' },
  { title: 'Department-Level Orchestration', desc: 'Different departments can each configure their own workflow rules while operating within a unified operational layer.' },
  { title: 'Unified Operational Logic', desc: 'Business rules are centralized once and applied consistently across every connected system and touchpoint.' },
  { title: 'Non-Disruptive Integration', desc: 'The operating layer connects via API adapters, meaning existing software continues running exactly as before — nothing is replaced.' },
];

const faqs = [
  { q: 'What is an AI operating layer?', a: 'An AI operating layer is a coordination layer that connects existing business systems, routes actions, and triggers workflows without requiring replacement of underlying software.' },
  { q: 'How does this integrate with our existing systems?', a: 'Through secure API adapters connecting to HMS, ERP, CRM, LMS, or custom internal platforms — with zero disruption to current operations.' },
  { q: 'Is this only for large enterprises?', a: 'No. The operating layer is designed to scale from single-department deployments to full enterprise-wide coordination.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'AI Operating Layer',
      provider: {
        '@type': 'Organization',
        name: 'LuraLoop',
        url: 'https://luraloop.vercel.app'
      },
      description: 'Add an intelligent AI-driven operating layer across enterprise environments without forcing core software replacement.',
      areaServed: 'Worldwide',
      audience: {
        '@type': 'Audience',
        audienceType: 'IT Agencies, System Integrators, Enterprise Consultants'
      }
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://luraloop.vercel.app' },
        { '@type': 'ListItem', position: 2, name: 'AI Operating Layer', item: 'https://luraloop.vercel.app/ai-operating-systems' }
      ]
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is an AI operating layer?',
          acceptedAnswer: { '@type': 'Answer', text: 'An AI operating layer is a coordination layer that connects existing business systems, routes actions, and triggers workflows without requiring replacement of underlying software.' }
        },
        {
          '@type': 'Question',
          name: 'How does this integrate with our existing systems?',
          acceptedAnswer: { '@type': 'Answer', text: 'Through secure API adapters connecting to HMS, ERP, CRM, LMS, or custom internal platforms — with zero disruption to current operations.' }
        },
        {
          '@type': 'Question',
          name: 'Is this only for large enterprises?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. The operating layer is designed to scale from single-department deployments to full enterprise-wide coordination.' }
        }
      ]
    }
  ]
};

export default function AIOperatingLayerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="luxury-ambient-bg min-h-screen text-zinc-100 selection:bg-orange-600/30 overflow-x-hidden pt-24 pb-16">

        {/* 🚀 HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="text-orange-500 font-mono tracking-widest text-xs font-semibold uppercase mb-4">AI OPERATING LAYER</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-4">
                Add an Intelligent Operating Layer <br /> Above Existing Client Systems
              </h1>
              {/* AEO Answer Paragraph */}
              <p className="text-orange-100/60 text-sm font-mono leading-relaxed mb-5 border-l-2 border-orange-600/40 pl-4 max-w-[64ch]">
                An AI operating layer is a coordination system that connects existing business software — HMS, ERP, CRM, or LMS — routing actions and triggering workflows across departments without requiring replacement of any underlying system.
              </p>
              <p className="text-zinc-300 text-lg sm:text-xl font-medium leading-relaxed mb-4 max-w-[64ch]">
                LuraLoop adds a coordinated AI-driven operating layer across enterprise environments, connecting workflows, agents, and business systems without forcing software replacement.
              </p>
              <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-[60ch]">
                Designed for agencies, consultants, and enterprise delivery teams, the AI Operating Layer helps coordinate tasks, trigger responses, route actions, and connect operational logic across departments while staying aligned with current systems and governance models.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full">
                {['No System Replacement', 'Cross-Department Coordination', 'API-Led Integration', 'Enterprise Workflow Control'].map((prop, idx) => (
                  <div key={idx} className="border-l-2 border-orange-600/50 pl-4 py-1">
                    <h4 className="text-white text-sm font-semibold">{prop}</h4>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
                <Link href="#contact" className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-medium px-6 py-3 rounded-lg text-center transition duration-200">View Architecture</Link>
                <Link href="#contact" className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-medium px-6 py-3 rounded-lg text-center transition duration-200">Book Partner Call</Link>
              </div>
            </div>

            {/* Right Column - Layered Stack Visual */}
            <div className="lg:col-span-6 flex justify-end w-full lg:pl-4">
              <div className="w-full max-w-xl bg-zinc-950/40 backdrop-blur-md rounded-xl border border-white/5 shadow-2xl p-6 sm:p-8 flex flex-col gap-3 transform lg:translate-y-4">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">01 / Architecture Stack</span>
                {['Users / Teams', 'LuraLoop Operating Layer', 'Workflow Logic', 'Existing Systems', 'Responses / Actions'].map((layer, idx) => (
                  <div key={idx} className={`p-3 rounded-lg text-xs font-mono text-center border ${layer === 'LuraLoop Operating Layer' ? 'bg-zinc-900 border-orange-600/40 text-white shadow-lg' : 'bg-zinc-950/60 border-zinc-900 text-zinc-400'}`}>
                    {layer}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 🔮 CAPABILITY CARDS SECTION */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 border-t border-zinc-900">
          <div className="text-left mb-12">
            <span className="text-orange-500 font-mono tracking-widest text-xs font-semibold uppercase block mb-3">Core Modules</span>
            <h2 className="text-3xl font-bold text-white mb-4">Orchestration Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, idx) => (
              <div key={idx} className="bg-zinc-950/40 border border-zinc-900 rounded-xl p-6 hover:border-zinc-800 transition">
                <h3 className="text-white font-semibold text-base mb-2">{card.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 🔄 WORKFLOW SECTION */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 border-t border-zinc-900">
          <div className="text-left mb-12"><h2 className="text-3xl font-bold text-white">How It Works</h2></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', desc: 'Input enters from user or internal process' },
              { step: '02', desc: 'Operating layer interprets workflow context' },
              { step: '03', desc: 'Actions route across systems and teams' },
              { step: '04', desc: 'Response, escalation, or completion occurs' }
            ].map((item, idx) => (
              <div key={idx} className="bg-zinc-950/20 border border-zinc-900/60 rounded-xl p-6">
                <span className="text-orange-500 font-mono font-bold text-lg block mb-2">{item.step}</span>
                <p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 🔌 INTEGRATION SECTION */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 border-t border-zinc-900">
          <div className="text-left mb-6"><h2 className="text-2xl font-bold text-white">Connected to Existing Enterprise Systems</h2></div>
          <div className="flex flex-wrap gap-3">
            {['HMS / EMR', 'LMS / SIS', 'ERP / CRM', 'Internal Platforms', 'Custom APIs'].map((sys, idx) => (
              <div key={idx} className="bg-zinc-950/40 border border-zinc-900 px-6 py-4 rounded-xl font-mono text-xs text-zinc-300">{sys}</div>
            ))}
          </div>
        </section>

        {/* 🤝 PARTNER SECTION */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 border-t border-zinc-900 text-left">
          <span className="text-orange-500 font-mono tracking-widest text-xs font-semibold uppercase block mb-2">Delivery Layer</span>
          <h2 className="text-3xl font-bold text-white">Deploy an Operating Layer Without Rebuilding the Stack</h2>
        </section>

        {/* 🛡️ SECURITY MINI-BLOCK */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 border-t border-zinc-900">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Zero-Retention Processing', desc: 'Every request through the operating layer is processed in real-time with no data persisted after the action completes.' },
              { title: 'Scoped Access Logic', desc: 'The operating layer only accesses the specific systems and data fields required for each individual workflow action.' },
              { title: 'Client System Alignment', desc: 'Permission structures mirror the client\'s existing governance model, so no new access policies need to be created.' },
            ].map((sec, idx) => (
              <div key={idx} className="bg-zinc-950/20 border border-zinc-900/60 p-5 rounded-lg">
                <h4 className="text-white font-semibold text-sm mb-1">{sec.title}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">{sec.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 🔗 RELATED CAPABILITIES */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 border-t border-zinc-900">
          <span className="text-orange-500 font-mono tracking-widest text-xs font-semibold uppercase block mb-3">Related Capabilities</span>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-3xl">
            Explore how this connects with our <Link href="/multi-agent-infrastructure" className="text-white hover:text-orange-400 underline underline-offset-4 transition-colors">Multi-Agent Infrastructure</Link>, <Link href="/business-process-automation" className="text-white hover:text-orange-400 underline underline-offset-4 transition-colors">Business Process Automation</Link>, and <Link href="/decision-intelligence" className="text-white hover:text-orange-400 underline underline-offset-4 transition-colors">Decision Intelligence</Link> modules, or see how <Link href="/ai-employees" className="text-white hover:text-orange-400 underline underline-offset-4 transition-colors">AI Employees</Link> power the front-line of these workflows.
          </p>
        </section>

        {/* ❓ FAQ SECTION */}
        <section className="max-w-4xl mx-auto px-6 md:px-8 py-12 border-t border-zinc-900">
          <span className="text-orange-500 font-mono tracking-widest text-xs font-semibold uppercase block mb-3">Common Questions</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-zinc-950/40 border border-zinc-900 rounded-lg p-5">
                <h3 className="text-white font-semibold text-sm mb-2">{faq.q}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 🎯 FINAL CTA BLOCK */}
        <section className="max-w-5xl mx-auto px-6 py-20 text-center border-t border-zinc-900">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Deploy an AI Operating Layer Without Replacing Core Systems</h2>
          <div className="flex items-center justify-center gap-4">
            <Link href="#contact" className="bg-orange-600 text-white font-medium px-8 py-3 rounded-lg">Book A Demo</Link>
          </div>
        </section>

      </main>
    </>
  );
}