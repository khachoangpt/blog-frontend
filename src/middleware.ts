import { NextRequest, NextResponse } from 'next/server'

import { THEME } from './constants'

export async function middleware(request: NextRequest) {
  const cookies = request.cookies
  const theme = cookies.get('theme')?.value
  const response = NextResponse.next()
  response.cookies.set('theme', theme ?? THEME.DARK)
  return response
}
