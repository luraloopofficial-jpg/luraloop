export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://luraloop.vercel.app/sitemap.xml',
  };
}
