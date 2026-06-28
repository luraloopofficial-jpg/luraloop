import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | LuraLoop',
  description: 'LuraLoop Terms of Service — governing the use of our enterprise AI automation infrastructure, white-label delivery platform, and partner programs.',
  alternates: { canonical: 'https://luraloop.vercel.app/terms' },
};

export default function TermsPage() {
  return (
    <main className="luxury-ambient-bg min-h-screen text-zinc-100 selection:bg-orange-600/30 overflow-x-hidden pt-24 pb-20">
      <article className="max-w-3xl mx-auto px-6 md:px-8 py-16">

        <div className="mb-12">
          <span className="text-orange-500 font-mono tracking-widest text-xs font-semibold uppercase block mb-3">Legal</span>
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-zinc-500 text-sm font-mono">Last updated: June 2025</p>
        </div>

        <div className="space-y-10 text-zinc-400 text-sm leading-relaxed">

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using the LuraLoop platform, partner portal, or any related services ("Services"), you agree to be bound by these Terms of Service. If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these Terms.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">2. Description of Services</h2>
            <p>LuraLoop provides an enterprise AI automation infrastructure platform offering white-label AI agent deployment, multi-agent orchestration, business process automation, and decision intelligence tools. Our services are designed for B2B delivery partners including IT agencies, system integrators, and enterprise consultants.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">3. Partner Delivery Model</h2>
            <p>LuraLoop operates on a B2B2B model. Registered partners are authorized to resell and deploy LuraLoop infrastructure to their end clients under white-label arrangements. Partners are solely responsible for their relationship with end clients, including client contracts, SLAs, billing, and support.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">4. Acceptable Use</h2>
            <p className="mb-3">You agree not to use the Services to:</p>
            <ul className="list-disc pl-6 space-y-1 text-zinc-500">
              <li>Violate any applicable local, national, or international law or regulation</li>
              <li>Transmit any unauthorized advertising, promotional material, or spam</li>
              <li>Attempt to gain unauthorized access to any part of the platform or its related systems</li>
              <li>Deploy the platform for purposes that violate data protection laws in applicable jurisdictions</li>
              <li>Reverse engineer, decompile, or disassemble any component of the Services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">5. Zero-Data-Retention Architecture</h2>
            <p>LuraLoop operates under a strict zero-data-retention policy. All AI agent interactions and workflow processing are ephemeral. No end-user data, conversation context, or client operational data is permanently stored by LuraLoop beyond the duration of an active session.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">6. Intellectual Property</h2>
            <p>All platform components, agent frameworks, workflow logic templates, and infrastructure tooling developed by LuraLoop are the exclusive intellectual property of LuraLoop. Partners receive a limited, non-exclusive, non-transferable license to deploy the platform under their white-label configuration as specified in their partner agreement.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">7. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, LuraLoop shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, goodwill, or other intangible losses, resulting from your use of or inability to use the Services.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">8. Modifications to Terms</h2>
            <p>LuraLoop reserves the right to modify these Terms at any time. We will provide notice of significant changes by updating the date at the top of this page. Continued use of the Services after changes constitutes acceptance of the revised Terms.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">9. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Kerala, India.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">10. Contact</h2>
            <p>For questions about these Terms, please contact us at <a href="mailto:official.luraloop@gmail.com" className="text-orange-400 hover:text-orange-300 transition-colors">official.luraloop@gmail.com</a>.</p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-wrap gap-4">
          <Link href="/privacy-policy" className="text-zinc-500 hover:text-orange-400 text-sm transition-colors">Privacy Policy →</Link>
          <Link href="/cookie-policy" className="text-zinc-500 hover:text-orange-400 text-sm transition-colors">Cookie Policy →</Link>
          <Link href="/" className="text-zinc-500 hover:text-orange-400 text-sm transition-colors">← Back to Home</Link>
        </div>
      </article>
    </main>
  );
}
