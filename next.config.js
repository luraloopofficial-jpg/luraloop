/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://luraloop.vercel.app https://*.vercel.app https://cdn.sanity.io",
  "font-src 'self' data:",
  "connect-src 'self' https://vercel.live wss://ws-us3.pusher.com https://va.vercel-scripts.com https://*.sanity.io wss://*.sanity.io https://generativelanguage.googleapis.com",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "media-src 'self'",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  "block-all-mixed-content",
  "upgrade-insecure-requests",
].join('; ');

const PermissionsPolicy = [
  'camera=()',
  'microphone=()',
  'geolocation=()',
  'payment=()',
  'usb=()',
  'screen-wake-lock=()',
  'accelerometer=()',
  'gyroscope=()',
  'magnetometer=()',
  'ambient-light-sensor=()',
  'autoplay=(self)',
  'fullscreen=(self)',
].join(', ');

const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Content-Security-Policy', value: ContentSecurityPolicy },
  { key: 'Permissions-Policy', value: PermissionsPolicy },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'Cross-Origin-Embedder-Policy', value: 'unsafe-none' },
  { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
  { key: 'Cache-Control', value: 'no-store, max-age=0' },
];

const loginHeaders = [
  ...securityHeaders,
  { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate, max-age=0' },
  { key: 'Pragma', value: 'no-cache' },
];

const apiHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
  { key: 'Cache-Control', value: 'no-store, max-age=0' },
  { key: 'Access-Control-Allow-Origin', value: 'https://luraloop.vercel.app' },
  { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
  { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
];

const nextConfig = {
  async headers() {
    return [
      { source: '/(.*)', headers: securityHeaders },
      { source: '/(login|signup)', headers: loginHeaders },
      { source: '/api/(.*)', headers: apiHeaders },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'luraloop.vercel.app' },
      { protocol: 'https', hostname: 'cdn.sanity.io' }
    ],
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
