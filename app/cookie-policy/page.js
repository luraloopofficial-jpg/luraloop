import Link from 'next/link';

export default function CookiePolicyPage() {
  return (
    <main className="luxury-ambient-bg min-h-screen text-zinc-100 selection:bg-orange-600/30 overflow-x-hidden pt-24 pb-20">
      <article className="max-w-3xl mx-auto px-6 md:px-8 py-16">
        <Link href="/" className="inline-flex items-center text-zinc-500 hover:text-orange-400 text-sm transition-colors mb-8">
          ← Back to Home
        </Link>
        
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-zinc-500 text-sm font-mono">Last updated: June 2026</p>
        </div>

        <div className="space-y-10 text-zinc-400 text-sm leading-relaxed">
          <section>
            <h2 className="text-white font-semibold text-xl mb-3">1. What Are Cookies</h2>
            <p>Cookies are small text files stored on your device when you visit our website.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">2. How We Use Cookies</h2>
            <p className="mb-2">LuraLoop's website uses minimal cookies, primarily for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Essential site functionality (navigation, form submission)</li>
              <li>Basic analytics to understand site usage (anonymized where possible)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">3. Third-Party Cookies</h2>
            <p>We may use third-party services (such as analytics providers) that set their own cookies. We do not control these cookies directly.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">4. Managing Cookies</h2>
            <p>You can control or delete cookies through your browser settings. Disabling cookies may affect some website functionality.</p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">5. Contact</h2>
            <p><a href="mailto:official.luraloop@gmail.com" className="text-orange-400 hover:text-orange-300 transition-colors">official.luraloop@gmail.com</a></p>
          </section>
        </div>
      </article>
    </main>
  );
}
