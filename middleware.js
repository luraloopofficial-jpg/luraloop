import { NextResponse } from 'next/server';

// List of known aggressive/abusive scraping bots to block
const BLOCKED_BOTS = [
  'bytespider',
  'ahrefsbot',
  'semrushbot',
  'mj12bot',
  'dotbot',
  'petalbot',
  'rogerbot',
  'exabot',
  'blexbot',
  'spbot',
  'megaindex'
];

export function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';
  const lowerUserAgent = userAgent.toLowerCase();

  // Check if the user agent matches any of our blocked bots
  const isBlocked = BLOCKED_BOTS.some((bot) => lowerUserAgent.includes(bot));

  if (isBlocked) {
    // Return a 403 Forbidden response to block the scraper
    return new NextResponse('Access Denied: Abusive scraper detected.', { status: 403 });
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Ensure middleware only runs on actual page routes or API, not static assets
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (static assets)
     */
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
