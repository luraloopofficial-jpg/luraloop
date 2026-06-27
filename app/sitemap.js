export default async function sitemap() {
  const baseUrl = 'https://luraloop.vercel.app';

  const routes = [
    '',
    '/blog',
    '/ai-employees',
    '/ai-operating-systems',
    '/multi-agent-infrastructure',
    '/business-process-automation',
    '/decision-intelligence',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...routes];
}
