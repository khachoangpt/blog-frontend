import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'
import { locales } from './i18n-config'

export const { usePathname, Link } = createLocalizedPathnamesNavigation({
	locales,
	pathnames: {},
})
