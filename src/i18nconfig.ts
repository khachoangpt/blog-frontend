import type { Locale } from '@/types/i18n.types'

export const defaultLocale: Locale = 'en'

export const locales: Locale[] = ['en', 'vi']

export const localeNames: Record<Locale, string> = {
	en: 'English',
	vi: 'Tiếng Việt',
}
