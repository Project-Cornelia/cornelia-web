import { NextResponse } from 'next/server'

export function proxy(request) {
  const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true'

  if (maintenanceMode) {
    if (request.nextUrl.pathname === '/maintenance') {
      return NextResponse.next()
    }

    if (
      request.nextUrl.pathname.startsWith('/_next') ||
      request.nextUrl.pathname.startsWith('/api') ||
      request.nextUrl.pathname.startsWith('/images') ||
      request.nextUrl.pathname.startsWith('/public')
    ) {
      return NextResponse.next()
    }

    return NextResponse.rewrite(new URL('/maintenance', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
