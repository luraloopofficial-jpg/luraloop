export default function sitemap() {
  const baseUrl = 'https://luraloop.vercel.app'
  const lastModified = new Date()

  // Base routes
  const routes = [
    '',
    '/ai-employees',
    '/ai-operating-systems',
    '/multi-agent-infrastructure',
    '/business-process-automation',
    '/decision-intelligence',
    '/blog',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
