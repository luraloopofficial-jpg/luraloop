import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Employees | LuraLoop Enterprise Infrastructure',
  description: 'Deploy role-specific AI employees across customer-facing and internal workflows under your own white-label delivery model.',
};

export default function AIEmployeesPage() {
  return (
    <div className="luxury-ambient-bg min-h-screen text-zinc-100 selection:bg-orange-600/30 overflow-x-hidden pt-24 pb-16">
      
      {/* 🚀 HERO SECTION (Large) */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (48% width) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-orange-500 font-mono tracking-widest text-xs font-semibold uppercase mb-4">
              AI EMPLOYEES
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6 max-w-[11 words]">
              Deploy AI Employees <br />
              Across Enterprise Operations
            </h1>
            <p className="text-zinc-300 text-lg sm:text-xl font-medium leading-relaxed mb-[18px] max-w-[64ch]">
              Role-specific AI employees that handle enquiries, scheduling, support, coordination, routing, and repetitive operational tasks across customer-facing and internal workflows.
            </p>
            <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-[60ch]">
              Built for agencies, consultants, and enterprise delivery teams, LuraLoop AI Employees operate as task-specific digital workers that integrate with existing systems, follow operational logic, and scale service capacity without expanding headcount.
            </p>
            
            {/* Core Value Props Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full">
              {[
                { title: 'Role-Specific Execution', desc: 'Configured for precise domain workflows.' },
                { title: 'Multi-Channel Deployment', desc: 'WhatsApp, web, voice, and email ready.' },
                { title: 'Workflow-Aware Actions', desc: 'Triggers context-driven ecosystem steps.' },
                { title: 'Enterprise Control', desc: 'Access-scoped and securely audited.' },
              ].map((prop, idx) => (
                <div key={idx} className="border-l-2 border-orange-600/50 pl-4 py-1">
                  <h4 className="text-white text-sm font-semibold">{prop.title}</h4>
                  <p className="text-zinc-500 text-xs">{prop.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Row & Support Line */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-[18px] w-full">
              <Link href="#demo" className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-medium px-6 py-3 rounded-lg text-center transition duration-200 shadow-lg shadow-orange-600/10">
                Book A Demo
              </Link>
              <Link href="#architecture" className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-medium px-6 py-3 rounded-lg text-center transition duration-200">
                View Architecture
              </Link>
            </div>
            <p className="text-zinc-500 font-mono text-xs tracking-wider">
              Channels: WhatsApp · Web Chat · Voice · Email · Internal Dashboards · API & Webhooks
            </p>
          </div>

          {/* Right Column (52% width) - n8n Inspired Command Module */}
          <div className="lg:col-span-6 flex justify-end w-full lg:pl-4">
            <div className="w-full max-w-xl bg-zinc-950/40 backdrop-blur-md rounded-xl border border-white/5 shadow-2xl p-6 sm:p-8 flex flex-col gap-6 transform lg:translate-y-4">
              
              {/* Top: Channels */}
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-3">01 / Input Channels</span>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-md text-xs font-medium text-zinc-300">WhatsApp</span>
                  <span className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-md text-xs font-medium text-zinc-300">Customer Enquiries</span>
                  <span className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-md text-xs font-medium text-zinc-300">Email Drop</span>
                </div>
              </div>

              {/* Middle: AI Employee Roles */}
              <div className="border-y border-zinc-900 py-4 my-1">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-3">02 / Orchestrated Digital Workforce</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-zinc-900/60 border border-orange-600/30 p-3 rounded-lg flex flex-col justify-between">
                    <span className="text-xs font-semibold text-white block">Scheduling Agent</span>
                    <span className="text-[10px] text-orange-500 font-mono mt-1">Active Loop</span>
                  </div>
                  <div className="bg-zinc-900/40 border border-zinc-800 p-3 rounded-lg flex flex-col justify-between opacity-70">
                    <span className="text-xs font-semibold text-zinc-300 block">Support Agent</span>
                    <span className="text-[10px] text-zinc-600 font-mono mt-1">Standby</span>
                  </div>
                  <div className="bg-zinc-900/40 border border-zinc-800 p-3 rounded-lg flex flex-col justify-between opacity-70">
                    <span className="text-xs font-semibold text-zinc-300 block">Coordination Agent</span>
                    <span className="text-[10px] text-zinc-600 font-mono mt-1">Standby</span>
                  </div>
                </div>
              </div>

              {/* Bottom: Connected Systems */}
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-3">03 / Connected Ecosystems</span>
                <div className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-3 text-xs font-mono text-zinc-400 flex items-center justify-between">
                  <span>CRM / ERP / HMS / Internal Tools</span>
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 🔮 CAPABILITY CARDS SECTION (Medium) */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 border-t border-zinc-900">
        <div className="text-left mb-12">
          <span className="text-orange-500 font-mono tracking-widest text-xs font-semibold uppercase block mb-3">What AI Employees Include</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Role-Specific Automation Across Frontline and Internal Operations</h2>
          <p className="text-zinc-400 max-w-2xl text-base">AI Employees can be configured for customer interaction, internal coordination, task routing, and operational execution across high-volume business workflows.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { id: 1, title: 'Front-Office Operations', desc: 'Automate first-response handling, intake workflows, and customer interaction routing across inbound channels.' },
            { id: 2, title: 'Customer Support Automation', desc: 'Manage service queries, issue categorization, response delivery, and escalation workflows.' },
            { id: 3, title: 'Scheduling & Booking', desc: 'Coordinate appointments, reminders, confirmations, and availability checks with connected systems.' },
            { id: 4, title: 'Lead Qualification', desc: 'Filter inbound leads, gather context, classify intent, and route qualified opportunities to teams.' },
            { id: 5, title: 'Internal Coordination', desc: 'Trigger team notifications, status updates, and internal follow-up tasks across departments.' },
            { id: 6, title: 'Multi-Channel Engagement', desc: 'Operate consistently across WhatsApp, web, portal, email, voice, and internal dashboard environments.' }
          ].map((card) => (
            <div key={card.id} className="bg-zinc-950/40 border border-zinc-900 rounded-xl p-6 flex flex-col justify-between hover:border-zinc-800 transition duration-200">
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">{card.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-900/60 font-mono text-[10px] text-zinc-500">
                <span>· Workflow-aware</span>
                <span>· System-connected</span>
                <span>· Role-specific</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔄 WORKFLOW SECTION (Medium) */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 border-t border-zinc-900">
        <div className="text-left mb-12">
          <span className="text-orange-500 font-mono tracking-widest text-xs font-semibold uppercase block mb-3">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">From Incoming Request to Completed Action</h2>
          <p className="text-zinc-400 max-w-2xl text-base">Each AI Employee follows a structured path from inbound trigger to system-connected response.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { step: '01', title: 'Trigger', desc: 'A request enters through WhatsApp, voice, web chat, email, or an internal workflow channel.' },
            { step: '02', title: 'AI Processing', desc: 'The AI Employee identifies intent, applies role-specific logic, and determines the right workflow action.' },
            { step: '03', title: 'System Action', desc: 'The agent interacts with connected systems, triggers routing, updates workflows, or escalates tasks.' },
            { step: '04', title: 'Response & Completion', desc: 'The user receives a response, the internal team is notified, or the process moves to the next operational step.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-zinc-950/20 border border-zinc-900/60 rounded-xl p-6 relative">
              <span className="text-orange-500 font-mono font-bold text-lg block mb-3">{item.step}</span>
              <h4 className="text-white font-semibold mb-2 text-base">{item.title}</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Operational Diagram Strip */}
        <div className="bg-zinc-950/50 border border-zinc-900 rounded-xl p-4 flex flex-col md:flex-row items-center justify-around font-mono text-xs text-zinc-400 text-center gap-4">
          <div className="px-4 py-2 bg-zinc-900 rounded border border-zinc-800">Customer / Staff</div>
          <span className="hidden md:inline text-orange-500">→</span>
          <div className="px-4 py-2 bg-zinc-900 rounded border border-orange-900/30 text-white">AI Employee</div>
          <span className="hidden md:inline text-orange-500">→</span>
          <div className="px-4 py-2 bg-zinc-900 rounded border border-zinc-800">Workflow Logic</div>
          <span className="hidden md:inline text-orange-500">→</span>
          <div className="px-4 py-2 bg-zinc-900 rounded border border-zinc-800">Business Systems</div>
          <span className="hidden md:inline text-orange-500">→</span>
          <div className="px-4 py-2 bg-orange-600 text-white rounded">Response / Escalation</div>
        </div>
      </section>

      {/* 📱 SUPPORTED CHANNELS SECTION (Compact) */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 border-t border-zinc-900">
        <div className="text-left mb-8">
          <span className="text-orange-500 font-mono tracking-widest text-xs font-semibold uppercase block mb-2">Supported Channels</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Available Across the Channels Your Teams Already Use</h2>
          <p className="text-zinc-400 text-sm max-w-xl">LuraLoop AI Employees can be deployed across customer-facing and internal environments without disrupting current operating patterns.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {[
            { name: 'WhatsApp', tag: 'Inbound messaging' },
            { name: 'Telegram', tag: 'Service workflows' },
            { name: 'Web Chat', tag: 'Inbound messaging' },
            { name: 'Voice Calls', tag: 'Service workflows' },
            { name: 'Email', tag: 'Operational coordination' },
            { name: 'Internal Dashboards', tag: 'Operational coordination' },
            { name: 'API & Webhooks', tag: 'Structured automation' }
          ].map((chan, idx) => (
            <div key={idx} className="bg-zinc-950/60 border border-zinc-900/60 p-4 rounded-lg flex flex-col justify-between text-left">
              <span className="text-white font-semibold text-sm block mb-1">{chan.name}</span>
              <span className="text-[10px] text-zinc-500 font-mono tracking-tight">{chan.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 🔌 INTEGRATION SECTION (Medium) */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 border-t border-zinc-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 text-left">
            <span className="text-orange-500 font-mono tracking-widest text-xs font-semibold uppercase block mb-3">Integration</span>
            <h2 className="text-3xl font-bold text-white mb-4">Connected to Existing Enterprise Systems</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">AI Employees operate above the current stack, enabling automation without forcing rip-and-replace software decisions.</p>
            <p className="text-zinc-500 text-xs leading-relaxed">LuraLoop AI Employees use structured integration layers to access workflow context, trigger actions, and support business processes while remaining aligned with client-side systems and governance models.</p>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
            {['HMS / EMR', 'LMS / SIS', 'ERP / CRM', 'Internal Platforms', 'Custom API Layer'].map((sys, idx) => (
              <div key={idx} className="bg-zinc-950/40 border border-zinc-900 p-5 rounded-xl flex items-center justify-center font-mono text-sm text-zinc-300 font-medium">
                {sys}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🤝 FOR DELIVERY PARTNERS SECTION (Medium) */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 border-t border-zinc-900">
        <div className="text-left mb-12">
          <span className="text-orange-500 font-mono tracking-widest text-xs font-semibold uppercase block mb-3">For Delivery Partners</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Deploy AI Employees Under Your Delivery Model</h2>
          <p className="text-zinc-400 max-w-2xl text-base">LuraLoop enables agencies, consultants, and system integrators to offer AI Employee deployments without building the orchestration and operational stack internally.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Agency Delivery', desc: 'Offer AI Employees under your brand while LuraLoop powers the infrastructure layer.' },
            { title: 'Consulting Engagements', desc: 'Add operational AI deployment to transformation projects without extending internal engineering complexity.' },
            { title: 'Systems Integration', desc: 'Embed AI Employees into broader enterprise delivery programs using controlled integration paths.' }
          ].map((partner, idx) => (
            <div key={idx} className="bg-zinc-950/40 border border-zinc-900 rounded-xl p-6 hover:border-orange-600/20 transition duration-200">
              <h3 className="text-white font-semibold text-base mb-3">{partner.title}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">{partner.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🛡️ SECURITY MINI-BLOCK (Compact) */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 border-t border-zinc-900">
        <div className="text-left mb-8">
          <span className="text-orange-500 font-mono tracking-widest text-xs font-semibold uppercase block mb-2">Security & Governance</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Controlled by the Same Enterprise Architecture as the LuraLoop Platform</h2>
          <p className="text-zinc-400 text-sm max-w-xl">AI Employees operate within the same zero-retention, access-scoped, enterprise-aligned architecture used across all LuraLoop deployments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Zero-Retention Processing', desc: 'Requests are processed ephemerally without becoming a persistent storage layer.' },
            { title: 'Role-Aware Access Controls', desc: 'Agents operate within scoped permissions and workflow boundaries.' },
            { title: 'Client System Alignment', desc: 'Automation sits above current systems instead of replacing them.' }
          ].map((sec, idx) => (
            <div key={idx} className="bg-zinc-950/20 border border-zinc-900/60 p-5 rounded-lg">
              <h4 className="text-white font-semibold text-sm mb-1">{sec.title}</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">{sec.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📊 OPTIONAL OUTCOMES STRIP */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-12 border-t border-zinc-900">
        <span className="text-orange-500 font-mono tracking-widest text-xs font-semibold uppercase block mb-3 text-left">Operational Outcomes</span>
        <h3 className="text-xl font-bold text-white mb-6 text-left">Built to Improve Capacity Without Expanding Headcount</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            'Faster response handling',
            'Lower manual task load',
            'More consistent workflow execution',
            'Better cross-channel service continuity'
          ].map((metric, idx) => (
            <div key={idx} className="bg-zinc-950/30 border border-zinc-900 p-4 rounded-lg flex items-center gap-3 text-left">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0"></span>
              <span className="text-zinc-300 text-xs font-medium">{metric}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ❓ FAQ SECTION (Medium) */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-zinc-900">
        <div className="text-left mb-10">
          <span className="text-orange-500 font-mono tracking-widest text-xs font-semibold uppercase block mb-2">Common Questions</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Frequently Asked Inquiries</h2>
        </div>

        <div className="space-y-4">
          {[
            { q: 'What is an AI Employee?', a: 'A role-specific AI-driven operational worker configured to handle tasks, responses, routing, and system-connected actions within defined workflow boundaries.' },
            { q: 'Can AI Employees connect to our client’s current systems?', a: 'Yes. LuraLoop is designed to operate above current enterprise software through integration adapters and custom API layers.' },
            { q: 'Do AI Employees replace human teams?', a: 'No. They reduce repetitive work, accelerate workflows, and support teams through automation and controlled escalation.' },
            { q: 'Can this be delivered under our brand?', a: 'Yes. LuraLoop is structured for white-label partner delivery models.' },
            { q: 'How is data handled?', a: 'AI Employees run within LuraLoop’s zero-retention, access-scoped architecture, aligned to enterprise workflow controls.' }
          ].map((faq, idx) => (
            <div key={idx} className="bg-zinc-950/40 border border-zinc-900 rounded-lg p-5 text-left">
              <h4 className="text-white font-semibold text-sm mb-2">{faq.q}</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🎯 FINAL CTA BLOCK (Large) */}
      <section id="demo" className="max-w-5xl mx-auto px-6 py-20 text-center border-t border-zinc-900">
        <span className="text-orange-500 font-mono tracking-widest text-xs font-semibold uppercase block mb-4">READY TO DEPLOY</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">Deploy AI Employees Without Expanding Headcount</h2>
        <p className="text-zinc-400 text-base max-w-2xl mx-auto mb-8">
          Add role-specific AI Employees to your client delivery stack or internal operations through a controlled, enterprise-grade deployment model.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Link href="#contact" className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-medium px-8 py-3.5 rounded-lg text-center transition duration-200 shadow-lg shadow-orange-600/10">
            Book A Demo
          </Link>
          <Link href="#contact" className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-medium px-8 py-3.5 rounded-lg text-center transition duration-200">
            Talk to the Platform Team
          </Link>
        </div>
        <p className="text-zinc-500 font-mono text-[11px] tracking-wider">
          White-label ready · Multi-channel capable · System-connected
        </p>
      </section>

    </div>
  );
}