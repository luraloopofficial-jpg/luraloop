import Link from 'next/link';

export const metadata = {
  title: 'Cookie Policy | LuraLoop',
  description: 'LuraLoop Cookie Policy — how we use cookies and similar technologies on our enterprise AI infrastructure platform.',
  alternates: { canonical: 'https://luraloop.vercel.app/cookie-policy' },
};

export default function CookiePolicyPage() {
  return (
    <main className="luxury-ambient-bg min-h-screen text-zinc-100 selection:bg-orange-600/30 overflow-x-hidden pt-24 pb-20">
      <article className="max-w-3xl mx-auto px-6 md:px-8 py-16">

        <div className="mb-12">
          <span className="text-orange-500 font-mono tracking-widest text-xs font-semibold uppercase block mb-3">Legal</span>
          <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-zinc-500 text-sm font-mono">Last updated: June 2025</p>
        </div>

        <div className="space-y-10 text-zinc-400 text-sm leading-relaxed">

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">1. What Are Cookies?</h2>
            <p>Cookies are small text files placed on your device when you visit a website. They allow the site to recognize your device on subsequent visits and remember certain preferences or session states. We use cookies minimally and only where necessary for platform functionality.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">2. Cookies We Use</h2>
            <div className="space-y-4">
              <div className="bg-zinc-950/40 border border-zinc-900 rounded-lg p-4">
                <h3 className="text-white font-semibold text-sm mb-1">Essential Cookies</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">Required for authentication sessions, partner portal access, and platform security. These cannot be disabled without breaking core functionality.</p>
              </div>
              <div className="bg-zinc-950/40 border border-zinc-900 rounded-lg p-4">
                <h3 className="text-white font-semibold text-sm mb-1">Analytics Cookies</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">We use anonymized analytics (via Vercel Analytics) to understand how visitors interact with our marketing pages. No individual-level profiling is performed. Data is aggregated and non-identifiable.</p>
              </div>
              <div className="bg-zinc-950/40 border border-zinc-900 rounded-lg p-4">
                <h3 className="text-white font-semibold text-sm mb-1">No Third-Party Advertising Cookies</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">We do not use cookies for retargeting, behavioral advertising, or any third-party advertising networks. We do not sell user data collected through cookies.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">3. Cookie Duration</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-500">
              <li><strong className="text-zinc-400">Session cookies:</strong> Expire when you close your browser.</li>
              <li><strong className="text-zinc-400">Authentication cookies:</strong> Persist for up to 30 days to maintain partner session access.</li>
              <li><strong className="text-zinc-400">Analytics cookies:</strong> Retained for up to 12 months in aggregated, anonymized form.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">4. Managing Cookies</h2>
            <p className="mb-3">You can control and delete cookies through your browser settings. Most browsers allow you to:</p>
            <ul className="list-disc pl-6 space-y-1 text-zinc-500">
              <li>View what cookies are stored on your device</li>
              <li>Delete all or specific cookies</li>
              <li>Block cookies from specific websites</li>
              <li>Block all third-party cookies</li>
            </ul>
            <p className="mt-3">Note: Disabling essential cookies may impair partner portal functionality and platform authentication.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">5. Updates to This Policy</h2>
            <p>We may revise this Cookie Policy as our platform evolves. The date at the top of this page reflects the most recent update. Continued use of our platform following changes constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-lg mb-3">6. Contact</h2>
            <p>Cookie-related questions: <a href="mailto:official.luraloop@gmail.com" className="text-orange-400 hover:text-orange-300 transition-colors">official.luraloop@gmail.com</a></p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-wrap gap-4">
          <Link href="/terms" className="text-zinc-500 hover:text-orange-400 text-sm transition-colors">Terms of Service →</Link>
          <Link href="/privacy-policy" className="text-zinc-500 hover:text-orange-400 text-sm transition-colors">Privacy Policy →</Link>
          <Link href="/" className="text-zinc-500 hover:text-orange-400 text-sm transition-colors">← Back to Home</Link>
        </div>
      </article>
    </main>
  );
}
