import { NextResponse } from 'next/server';

// List of known aggressive/abusive scraping bots to block
const BLOCKED_BOTS = [
  'bytespider', 'ahrefsbot', 'semrushbot', 'mj12bot', 'dotbot',
  'petalbot', 'rogerbot', 'exabot', 'blexbot', 'spbot', 'megaindex'
];

// Routes that require authentication
const PROTECTED_ROUTES = [
  '/dashboard',
  '/settings',
  '/workspace',
];

// Routes that should redirect to dashboard if already authenticated
const AUTH_ROUTES = ['/login', '/signup'];

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const userAgent = request.headers.get('user-agent') || '';
  const lowerUserAgent = userAgent.toLowerCase();

  // ── Scraper detection ──────────────────────────────────────────────────
  if (BLOCKED_BOTS.some((bot) => lowerUserAgent.includes(bot))) {
    return new NextResponse('Access Denied: Abusive scraper detected.', { status: 403 });
  }

  // ── Session detection ──────────────────────────────────────────────────
  const sessionToken =
    request.cookies.get('luraloop-session')?.value ||
    request.cookies.get('next-auth.session-token')?.value ||
    request.cookies.get('__Secure-next-auth.session-token')?.value;

  const isAuthenticated = Boolean(sessionToken);

  // ── Auth route guard ───────────────────────────────────────────────────
  if (isAuthenticated && AUTH_ROUTES.some((r) => pathname.startsWith(r))) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // ── Protected route guard ──────────────────────────────────────────────
  if (!isAuthenticated && PROTECTED_ROUTES.some((r) => pathname.startsWith(r))) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // ── Security headers on the response ──────────────────────────────────
  const response = NextResponse.next();
  response.headers.delete('Server');
  response.headers.delete('X-Powered-By');

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2)$).*)',
  ],
};
