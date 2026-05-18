// Middleware disabled - using maintenance page as homepage only
// To re-enable routing middleware in the future, restore this file

export function middleware(request) {
  // No middleware active - all routes load normally
  return null
}

export const config = {
  matcher: [],
}
