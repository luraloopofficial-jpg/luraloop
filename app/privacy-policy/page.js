import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | LuraLoop',
  description: 'LuraLoop Privacy Policy — how we handle data under our zero-data-retention architecture and enterprise partner delivery model.',
  alternates: { canonical: 'https://luraloop.vercel.app/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="luxury-ambient-bg min-h-screen text-zinc-100 selection:bg-orange-600/30 overflow-x-hidden pt-24 pb-20">
      <article className="max-w-3xl mx-auto px-6 md:px-8 py-16">

        <div className="mb-12">
          <span className="text-orange-500 font-mono tracking-widest text-xs font-semibold uppercase block mb-3">Legal</span>
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-zinc-500 text-sm font-mono">Last updated: June 2025</p>
        </div>

        <div className="mb-8 p-5 bg-orange-600/10 border border-orange-600/30 rounded-lg">
          <p className="text-orange-200 text-sm font-mono leading-relaxed">
            <strong className="text-orange-400">Zero-Data-Retention Architecture:</strong> LuraLoop does not permanently store end-user conversation data, client workflow data, or operational session data. All AI processing is ephemeral by design.
          </p>
        </div>

        <div className="space-y-10 text-zinc-400 text-sm leading-relaxed">

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">1. Who We Are</h2>
            <p>LuraLoop is an enterprise AI automation infrastructure company based in Kerala, India. We provide white-label AI agent deployment, multi-agent orchestration, and business process automation tools to B2B delivery partners. Our registered contact email is <a href="mailto:official.luraloop@gmail.com" className="text-orange-400 hover:text-orange-300 transition-colors">official.luraloop@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">2. Data We Collect</h2>
            <p className="mb-3">We collect the following categories of data when you use our platform or contact us:</p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-500">
              <li><strong className="text-zinc-400">Partner Account Data:</strong> Name, company name, email address, and contact details provided during partner registration.</li>
              <li><strong className="text-zinc-400">Platform Usage Data:</strong> Aggregated, anonymized analytics on platform feature usage (no individual-level behavioral profiling).</li>
              <li><strong className="text-zinc-400">Communication Data:</strong> Messages sent to us via email or contact forms for support or partnership inquiries.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">3. Data We Do NOT Collect or Store</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-500">
              <li>End-user conversation content processed through AI agents</li>
              <li>Client operational data flowing through automated workflows</li>
              <li>Session-level interaction logs after a session concludes</li>
              <li>Any personal data of end-users served by partner-deployed agents</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">4. How We Use Your Data</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-500">
              <li>To manage your partner account and deliver agreed services</li>
              <li>To respond to inquiries and provide technical support</li>
              <li>To improve platform reliability and performance through anonymized analytics</li>
              <li>To communicate material updates to our services or terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">5. Data Sharing</h2>
            <p>We do not sell, rent, or trade your personal data to third parties. We may share data with trusted infrastructure providers (hosting, authentication) strictly necessary to operate our platform. All sub-processors are bound by confidentiality obligations.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">6. Data Retention</h2>
            <p>Partner account data is retained for the duration of the active partner relationship and up to 90 days following account closure, unless a longer retention period is required by law. All ephemeral processing data (AI session data) is discarded at session end with no persistent storage.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">7. Your Rights</h2>
            <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-1 text-zinc-500">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Data portability where applicable</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:official.luraloop@gmail.com" className="text-orange-400 hover:text-orange-300 transition-colors">official.luraloop@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">8. Security</h2>
            <p>We implement industry-standard technical and organizational measures to protect data under our control. This includes access controls, encrypted transmission (TLS), and scoped permission models for all platform operations.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. Material changes will be notified via email to active partners. The date at the top of this page reflects the most recent revision.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">10. Contact</h2>
            <p>Privacy-related inquiries: <a href="mailto:official.luraloop@gmail.com" className="text-orange-400 hover:text-orange-300 transition-colors">official.luraloop@gmail.com</a></p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-wrap gap-4">
          <Link href="/terms" className="text-zinc-500 hover:text-orange-400 text-sm transition-colors">Terms of Service →</Link>
          <Link href="/cookie-policy" className="text-zinc-500 hover:text-orange-400 text-sm transition-colors">Cookie Policy →</Link>
          <Link href="/" className="text-zinc-500 hover:text-orange-400 text-sm transition-colors">← Back to Home</Link>
        </div>
      </article>
    </main>
  );
}
