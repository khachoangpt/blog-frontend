import { type NextRequest, NextResponse } from 'next/server'
import { COOKIES, THEME, pageList } from './constants'
import { findRouteByPathname } from './utils/find-route'

export async function middleware(request: NextRequest) {
	const url = request.nextUrl
	const response = NextResponse.next()
	const cookies = request.cookies
	const theme = cookies.get(COOKIES.THEME)?.value
	const isAuth = cookies.get(COOKIES.IS_AUTH)?.value
	const role = cookies.get(COOKIES.ROLE)?.value
	const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE_MODE

	// check route is exist
	const requestIsRouter = await findRouteByPathname(url.pathname, {})
	if (!requestIsRouter) {
		return NextResponse.next()
	}
	// access to admin page with role customer
	if (requestIsRouter.pattern.at(0) === 'admin' && role !== 'admin') {
		const redirectUrl = new URL(pageList.home.href, request.url)
		return NextResponse.redirect(redirectUrl)
	}
	// access to admin page with role admin
	if (requestIsRouter.pattern.at(0) === 'admin' && role === 'admin') {
		return NextResponse.next()
	}
	// check route is auth and customer not logged in
	if (isAuth !== 'true' && requestIsRouter.isAuth) {
		const redirectUrl = new URL(pageList.login.href, request.url)
		return NextResponse.redirect(redirectUrl)
	}
	// access to login page while logged in
	if (isAuth === 'true' && requestIsRouter.href === pageList.login.href) {
		const redirectUrl = new URL(pageList.home.href, request.url)
		return NextResponse.redirect(redirectUrl)
	}
	if (isMaintenance === 'true' && url.pathname !== pageList.maintenance.href) {
		// maintenance mode is enabled
		const redirectUrl = new URL(pageList.maintenance.href, request.url)
		return NextResponse.redirect(redirectUrl)
	}
	// access to maintenance page while maintenance node is disabled
	if (isMaintenance !== 'true' && url.pathname === pageList.maintenance.href) {
		const redirectUrl = new URL(pageList.home.href, request.url)
		return NextResponse.redirect(redirectUrl)
	}
	response.cookies.set(COOKIES.THEME, theme ?? THEME.DARK)
	return response
}

export const config = {
	matcher: [
		'/((?!api|_next|images|fonts|manifest|serviceworker|favicon.ico|robots.txt).*)',
		'/',
	],
}
