import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'
import { locales, pathnames } from './i18n-config'

export const { usePathname, Link } = createLocalizedPathnamesNavigation({
	locales,
	pathnames,
})
