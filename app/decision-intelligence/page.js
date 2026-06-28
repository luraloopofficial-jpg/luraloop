import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Decision Intelligence | LuraLoop Operational Context',
  description: 'Turn live workflow signals into structured, faster operational decisions with AI-assisted recommendations, priority detection, and escalation guidance.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://luraloop.vercel.app/decision-intelligence' },
  openGraph: {
    title: 'Decision Intelligence | LuraLoop',
    description: 'Turn live workflow signals into structured, faster operational decisions with AI-assisted recommendations, priority detection, and escalation guidance.',
    url: 'https://luraloop.vercel.app/decision-intelligence',
    siteName: 'LuraLoop',
    images: [{ url: 'https://luraloop.vercel.app/og-default.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decision Intelligence | LuraLoop',
    description: 'Turn live workflow signals into structured, faster operational decisions with AI-assisted recommendations, priority detection, and escalation guidance.',
    images: ['https://luraloop.vercel.app/og-default.jpg'],
  },
};

const cards = [
  { title: 'Recommendation Engines', desc: 'AI analyzes live workflow data to surface the next best action for operational teams, reducing decision fatigue during high-volume periods.' },
  { title: 'Decision Routing', desc: 'Critical decisions are automatically routed to the right authority level based on impact, risk, or value thresholds.' },
  { title: 'Priority Detection', desc: 'The system identifies high-priority cases automatically by analyzing urgency signals within incoming requests.' },
  { title: 'Exception Visibility', desc: 'Operational anomalies are flagged in real-time dashboards before they escalate into larger issues.' },
  { title: 'Escalation Guidance', desc: 'When a case requires human judgment, the system provides structured context and recommended next steps to the receiving team.' },
  { title: 'Operational Insight Layers', desc: 'Layered analytics show patterns across workflows, helping teams identify recurring bottlenecks and optimization opportunities.' },
];

const faqs = [
  { q: 'What is decision intelligence?', a: 'Decision intelligence uses live workflow data to surface recommendations, detect priorities, and support faster operational decisions through AI-assisted analysis.' },
  { q: 'Does decision intelligence replace human judgment?', a: 'No. It provides structured context and recommendations to support human decision-makers, particularly for cases requiring escalation.' },
  { q: 'What kind of data does this analyze?', a: 'It analyzes live workflow signals such as request volume, urgency markers, and operational patterns — without storing personal or client data.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Decision Intelligence',
      provider: { '@type': 'Organization', name: 'LuraLoop', url: 'https://luraloop.vercel.app' },
      description: 'Turn live workflow signals into structured, faster operational decisions with AI-assisted recommendations, priority detection, and escalation guidance.',
      areaServed: 'Worldwide',
      audience: { '@type': 'Audience', audienceType: 'IT Agencies, System Integrators, Enterprise Consultants' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://luraloop.vercel.app' },
        { '@type': 'ListItem', position: 2, name: 'Decision Intelligence', item: 'https://luraloop.vercel.app/decision-intelligence' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
};

export default function DecisionIntelligencePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="luxury-ambient-bg min-h-screen text-zinc-100 selection:bg-orange-600/30 overflow-x-hidden pt-24 pb-16">

        {/* 🚀 HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="text-orange-500 font-mono tracking-widest text-xs font-semibold uppercase mb-4">DECISION INTELLIGENCE</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-4">
                Turn Workflow Signals <br /> Into Faster Operational Decisions
              </h1>
              {/* AEO Answer Paragraph */}
              <p className="text-orange-100/60 text-sm font-mono leading-relaxed mb-5 border-l-2 border-orange-600/40 pl-4 max-w-[64ch]">
                Decision intelligence uses live workflow data and AI-assisted analysis to surface actionable recommendations, detect operational priorities, and support faster decisions — reducing manual interpretation and enabling teams to respond with context and confidence.
              </p>
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
            {cards.map((card, idx) => (
              <div key={idx} className="bg-zinc-950/40 border border-zinc-900 rounded-xl p-6 hover:border-zinc-800 transition">
                <h3 className="text-white font-semibold text-base mb-2">{card.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 🛡️ SECURITY MINI-BLOCK */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 border-t border-zinc-900">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Access-Scoped Intelligence', desc: 'Recommendations are generated using only data the requesting team is authorized to view, respecting existing access boundaries.' },
              { title: 'Controlled Recommendation Logic', desc: 'AI suggestions follow pre-approved decision frameworks rather than open-ended reasoning, ensuring consistency and compliance.' },
              { title: 'Enterprise-Aligned Data Handling', desc: 'All decision signals are processed in real-time and discarded after the recommendation is delivered — nothing is stored.' },
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
            Explore how this connects with our{' '}
            <Link href="/ai-employees" className="text-white hover:text-orange-400 underline underline-offset-4 transition-colors">AI Employees</Link>,{' '}
            <Link href="/ai-operating-systems" className="text-white hover:text-orange-400 underline underline-offset-4 transition-colors">AI Operating Layer</Link>,{' '}
            <Link href="/multi-agent-infrastructure" className="text-white hover:text-orange-400 underline underline-offset-4 transition-colors">Multi-Agent Infrastructure</Link>, and{' '}
            <Link href="/business-process-automation" className="text-white hover:text-orange-400 underline underline-offset-4 transition-colors">Business Process Automation</Link> modules.
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Support Faster Decisions Across Enterprise Operations</h2>
          <div className="flex items-center justify-center gap-4">
            <Link href="#contact" className="bg-orange-600 text-white font-medium px-8 py-3 rounded-lg">Book A Demo</Link>
          </div>
        </section>

      </main>
    </>
  );
}