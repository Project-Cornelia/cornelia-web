import { NextResponse } from 'next/server'

export function middleware(request) {
  // Check if Phase 0 maintenance mode is enabled
  const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true'

  if (maintenanceMode) {
    // Allow maintenance page to be accessed
    if (request.nextUrl.pathname === '/maintenance') {
      return NextResponse.next()
    }

    // Allow static assets, API routes, and CMS admin
    if (
      request.nextUrl.pathname.startsWith('/_next') ||
      request.nextUrl.pathname.startsWith('/api') ||
      request.nextUrl.pathname.startsWith('/admin') ||
      request.nextUrl.pathname.startsWith('/images') ||
      request.nextUrl.pathname.startsWith('/public')
    ) {
      return NextResponse.next()
    }

    // Redirect all other routes to maintenance page
    return NextResponse.rewrite(new URL('/maintenance', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
