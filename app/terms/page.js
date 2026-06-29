import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="luxury-ambient-bg min-h-screen text-zinc-100 selection:bg-orange-600/30 overflow-x-hidden pt-24 pb-20">
      <article className="max-w-3xl mx-auto px-6 md:px-8 py-16">
        <Link href="/" className="inline-flex items-center text-zinc-500 hover:text-orange-400 text-sm transition-colors mb-8">
          ← Back to Home
        </Link>
        
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-zinc-500 text-sm font-mono">Last updated: June 2026</p>
        </div>

        <div className="space-y-10 text-zinc-400 text-sm leading-relaxed">
          <section>
            <h2 className="text-white font-semibold text-xl mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using LuraLoop's services, you agree to be bound by these Terms of Service.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">2. Services Provided</h2>
            <p>LuraLoop provides white-label AI automation infrastructure, including AI agents, workflow orchestration, and business process automation, delivered through partner agencies, consultants, and system integrators.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">3. Partner Relationship</h2>
            <p>LuraLoop operates on a B2B2B model. Our direct relationship is with delivery partners (agencies, consultants, system integrators), who in turn serve their own end clients.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">4. Zero-Data-Retention Commitment</h2>
            <p>LuraLoop does not permanently store client or end-user data. All processing occurs ephemerally as described in our Privacy Policy.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">5. Service Level Agreements</h2>
            <p>Specific SLA terms are defined per partner agreement, including deployment timelines and uptime commitments.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">6. Limitation of Liability</h2>
            <p>LuraLoop is not liable for business decisions made based on AI agent outputs. Partners and clients should verify critical information independently.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">7. Intellectual Property</h2>
            <p>The underlying LuraLoop platform, architecture, and orchestration logic remain the property of LuraLoop. White-label branding rights are granted per partner agreement.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">8. Termination</h2>
            <p>Either party may terminate the partner agreement per the terms specified in the individual partnership contract.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">9. Contact</h2>
            <p>For questions about these terms, contact: <a href="mailto:legal@luraloop.com" className="text-orange-400 hover:text-orange-300 transition-colors">legal@luraloop.com</a></p>
          </section>
        </div>
      </article>
    </main>
  );
}
