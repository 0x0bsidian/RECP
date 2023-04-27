import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware (request: NextRequest) {
  const connected = request.cookies.get('connected')?.value
  if (!connected) {
    const url = request.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/nfts', '/nfts/:path*', '/contact-us', '/my-nfts', '/about-us']
}