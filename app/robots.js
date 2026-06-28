export default function robots() {
  return {
    rules: [
      { userAgent: '*',            allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'GPTBot',       allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'ClaudeBot',    allow: '/' },
      { userAgent: 'PerplexityBot',allow: '/' },
    ],
    sitemap: 'https://luraloop.vercel.app/sitemap.xml',
  };
}

