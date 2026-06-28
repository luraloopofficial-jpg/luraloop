export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: ['/', '/api/og'] },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
    ],
    sitemap: 'https://luraloopofficial.vercel.app/sitemap.xml',
  };
}
