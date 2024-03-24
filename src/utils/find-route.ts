import type { LOCALE } from '@/constants'
import { pageList, pathList } from '@/constants/routes'
import { defaultLocale } from '@/i18n-config'

export const findRouteByPathname = async (
	fullPath: string,
	config: object,
	locale: LOCALE,
) => {
	if (fullPath === pageList.home.href) {
		return pageList.home
	}

	const routeArray = fullPath.split('/').slice(1)
	if (locale && locale !== defaultLocale) {
		routeArray.shift()
	}
	const meta = pathList.find((pageMeta) => {
		const meta = typeof pageMeta === 'function' ? pageMeta(config) : pageMeta
		const routeRegex = createRegexFromRoute(meta.pattern)
		return (
			routeArray.length === meta.pattern.length && routeRegex.test(fullPath)
		)
	})
	if (typeof meta === 'function') {
		return meta(config)
	}
	return meta
}

const createRegexFromRoute = (routeArray: string[]) => {
	let regex = ''
	for (const element of routeArray) {
		if (element !== '') {
			regex += `\/${element}`
		} else {
			regex += '/.+'
		}
	}
	return new RegExp(regex)
}
