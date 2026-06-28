export default async function sitemap() {
  const baseUrl = 'https://luraloop.vercel.app';

  const routes = [
    { path: '',          priority: 1.0, freq: 'daily' },
    { path: '/blog',     priority: 0.8, freq: 'daily' },
    { path: '/ai-employees',                priority: 0.9, freq: 'daily' },
    { path: '/ai-operating-systems',        priority: 0.9, freq: 'daily' },
    { path: '/multi-agent-infrastructure',  priority: 0.9, freq: 'daily' },
    { path: '/business-process-automation', priority: 0.9, freq: 'daily' },
    { path: '/decision-intelligence',       priority: 0.9, freq: 'daily' },
    { path: '/terms',          priority: 0.4, freq: 'monthly' },
    { path: '/privacy-policy', priority: 0.4, freq: 'monthly' },
    { path: '/cookie-policy',  priority: 0.3, freq: 'monthly' },
  ].map(({ path, priority, freq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: freq,
    priority,
  }));

  return [...routes];
}

