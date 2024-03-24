import type { Pathnames } from 'next-intl/navigation'
import { LOCALE } from './constants'

export const defaultLocale: LOCALE = LOCALE.english

export const locales: LOCALE[] = [LOCALE.english, LOCALE.vietnamese]

export const pathnames = {
	'/': '/',
} satisfies Pathnames<typeof locales>
