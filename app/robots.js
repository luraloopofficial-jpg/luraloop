export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' }
    ],
    sitemap: 'https://luraloop.vercel.app/sitemap.xml',
  };
}
