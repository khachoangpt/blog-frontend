import { locales } from '@/constants/languages'
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'

export const { usePathname, Link } = createLocalizedPathnamesNavigation({
	locales,
	pathnames: {},
})
