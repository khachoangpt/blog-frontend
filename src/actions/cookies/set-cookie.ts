import { COOKIES } from '@/constants'
import { cookies } from 'next/headers'

const defaultConfig = {
	maxAge: 60 * 60 * 24 * 30,
	path: '/',
}

export const setTheme = (theme: string) => {
	cookies().set({
		name: COOKIES.THEME,
		value: theme,
		...defaultConfig,
	})
}

export const setJWT = (jwt: string) => {
	cookies().set({
		name: COOKIES.JWT,
		value: jwt,
		...defaultConfig,
	})
}
