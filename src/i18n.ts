import { locales } from '@/constants/languages'
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'
import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ locale }) => ({
	messages: {
		...(await import(`#/messages/${locale}/common.json`)).default,
		...(await import(`#/messages/${locale}/login.json`)).default,
	},
}))

export const { usePathname, Link } = createLocalizedPathnamesNavigation({
	locales,
	pathnames: {},
})
