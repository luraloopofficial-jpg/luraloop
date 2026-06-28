import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <main className="luxury-ambient-bg min-h-screen text-zinc-100 selection:bg-orange-600/30 overflow-x-hidden pt-24 pb-20">
      <article className="max-w-3xl mx-auto px-6 md:px-8 py-16">
        <Link href="/" className="inline-flex items-center text-zinc-500 hover:text-orange-400 text-sm transition-colors mb-8">
          ← Back to Home
        </Link>
        
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-zinc-500 text-sm font-mono">Last updated: June 2026</p>
        </div>

        <div className="space-y-10 text-zinc-400 text-sm leading-relaxed">
          <section>
            <h2 className="text-white font-semibold text-xl mb-3">1. Introduction</h2>
            <p>LuraLoop ("we", "our", "us") is committed to protecting privacy through a Zero-Data-Retention architecture.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">2. Zero-Data-Retention Policy</h2>
            <p>LuraLoop does NOT store patient, client, or end-user data permanently. We operate as a processing layer only. All data remains within our partners' clients' existing systems (HMS, CRM, ERP, LMS).</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">3. Data We Process</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Temporary session data during active AI agent conversations only</li>
              <li>Session data is automatically cleared upon conversation termination</li>
              <li>We never copy, sell, or share data with third parties</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">4. How Data Flows</h2>
            <p>Data flows in real-time between end users (via WhatsApp, web, or voice channels), LuraLoop's AI agents, and the client's existing systems. No data is persisted on LuraLoop infrastructure at any point in this flow.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">5. Partner Responsibilities</h2>
            <p>Delivery partners (agencies, consultants, system integrators) are responsible for ensuring their end clients are informed about data processing practices in accordance with applicable local regulations (including DPDP Act in India, GDPR in the EU, and HIPAA in the US where applicable).</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">6. Security Measures</h2>
            <p>All data exchanged is encrypted in transit. Access to any processing layer is scoped and authenticated per request under our Zero Trust Architecture.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">7. Your Rights</h2>
            <p>Since no data is retained, there is no stored personal data to access, modify, or delete. For questions about specific data flows in your deployment, contact your delivery partner or LuraLoop directly.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">8. Contact</h2>
            <p><a href="mailto:official.luraloop@gmail.com" className="text-orange-400 hover:text-orange-300 transition-colors">official.luraloop@gmail.com</a></p>
          </section>
        </div>
      </article>
    </main>
  );
}
