import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Multi-Agent Infrastructure | LuraLoop Orchestration',
  description: 'Orchestrate multiple specialized AI agents across business functions with secure delegation, shared context, and controlled escalation logic.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://luraloop.vercel.app/multi-agent-infrastructure' },
  openGraph: {
    title: 'Multi-Agent Infrastructure | LuraLoop',
    description: 'Orchestrate multiple specialized AI agents across business functions with secure delegation, shared context, and controlled escalation logic.',
    url: 'https://luraloop.vercel.app/multi-agent-infrastructure',
    siteName: 'LuraLoop',
    images: [{ url: 'https://luraloop.vercel.app/og-default.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multi-Agent Infrastructure | LuraLoop',
    description: 'Orchestrate multiple specialized AI agents across business functions with secure delegation, shared context, and controlled escalation logic.',
    images: ['https://luraloop.vercel.app/og-default.jpg'],
  },
};

const cards = [
  { title: 'Specialized Agent Roles', desc: 'Each agent is configured with domain-specific training — intake, scheduling, support, or operations — ensuring focused, accurate execution for every task type.' },
  { title: 'Delegation Between Agents', desc: 'Agents automatically pass context and tasks to one another, eliminating manual handoffs between departments and reducing response time.' },
  { title: 'Exception Handling', desc: 'When an agent encounters a request outside its scope, it escalates instantly to the appropriate agent or human operator — no silent failures.' },
  { title: 'Shared Context Routing', desc: 'All agents in a workflow share conversation context in real-time, so users never have to repeat information across different touchpoints.' },
  { title: 'Cross-Function Orchestration', desc: 'Agents coordinate across departments — sales, support, operations — executing multi-step processes that span traditional team boundaries.' },
  { title: 'Scalable Agent Networks', desc: 'Add new specialized agents to an existing network without rebuilding the orchestration layer, allowing systems to grow with business needs.' },
];

const faqs = [
  { q: 'What is multi-agent AI infrastructure?', a: 'Multi-agent AI infrastructure is a system where multiple specialized AI agents work together, each handling a specific role like intake, scheduling, or support, while sharing context and delegating tasks automatically.' },
  { q: 'How does LuraLoop handle data in multi-agent systems?', a: 'LuraLoop processes all agent coordination ephemerally with zero data retention. No conversation context or operational data is stored after a session ends.' },
  { q: 'Who is this designed for?', a: 'Multi-agent infrastructure is designed for agencies, consultants, and system integrators delivering enterprise automation to clients in regulated industries.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Multi-Agent Infrastructure',
      provider: { '@type': 'Organization', name: 'LuraLoop', url: 'https://luraloop.vercel.app' },
      description: 'Orchestrate multiple specialized AI agents across business functions with secure delegation, shared context, and controlled escalation logic.',
      areaServed: 'Worldwide',
      audience: { '@type': 'Audience', audienceType: 'IT Agencies, System Integrators, Enterprise Consultants' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://luraloop.vercel.app' },
        { '@type': 'ListItem', position: 2, name: 'Multi-Agent Infrastructure', item: 'https://luraloop.vercel.app/multi-agent-infrastructure' },
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

export default function MultiAgentInfrastructurePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="luxury-ambient-bg min-h-screen text-zinc-100 selection:bg-orange-600/30 overflow-x-hidden pt-24 pb-16">

        {/* 🚀 HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="text-orange-500 font-mono tracking-widest text-xs font-semibold uppercase mb-4">MULTI-AGENT INFRASTRUCTURE</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-4">
                Orchestrate Multiple AI Agents <br /> Across Business Functions
              </h1>
              {/* AEO Answer Paragraph */}
              <p className="text-orange-100/60 text-sm font-mono leading-relaxed mb-5 border-l-2 border-orange-600/40 pl-4 max-w-[64ch]">
                Multi-agent AI infrastructure is a system of multiple specialized AI agents that work together to handle complex business workflows — each agent managing a specific task like intake, scheduling, or escalation, while sharing context with one another in real-time.
              </p>
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
            {[
              { title: 'Role-Aware Agent Boundaries', desc: 'Each agent operates within strict permission scopes, preventing unauthorized data access or task execution across workflow boundaries.' },
              { title: 'Controlled Workflow Escalation', desc: 'Escalation paths are pre-defined and auditable, ensuring critical requests always reach the correct authority level without manual routing.' },
              { title: 'Zero-Retention Coordination', desc: 'All inter-agent context is processed ephemerally. No conversation state or operational data is retained after a session concludes.' },
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
            <Link href="/ai-operating-systems" className="text-white hover:text-orange-400 underline underline-offset-4 transition-colors">AI Operating Layer</Link>,{' '}
            <Link href="/ai-employees" className="text-white hover:text-orange-400 underline underline-offset-4 transition-colors">AI Employees</Link>,{' '}
            <Link href="/business-process-automation" className="text-white hover:text-orange-400 underline underline-offset-4 transition-colors">Business Process Automation</Link>, and{' '}
            <Link href="/decision-intelligence" className="text-white hover:text-orange-400 underline underline-offset-4 transition-colors">Decision Intelligence</Link> modules.
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Deploy Coordinated AI Agents Across Enterprise Operations</h2>
          <div className="flex items-center justify-center gap-4">
            <Link href="#contact" className="bg-orange-600 text-white font-medium px-8 py-3 rounded-lg">Book A Demo</Link>
          </div>
        </section>

      </main>
    </>
  );
}