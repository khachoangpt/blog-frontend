import { COOKIES } from '@/constants'
import { cookies } from 'next/headers'

const defaultConfig = {
	maxAge: 60 * 60 * 24 * 30,
	path: '/',
}

/**
 * Sets the theme in the cookies.
 *
 * @param {string} theme - the theme to be set
 * @return {void}
 */
export const setTheme = (theme: string): void => {
	cookies().set({
		name: COOKIES.THEME,
		value: theme,
		...defaultConfig,
	})
}

/**
 * Sets a JWT cookie with the provided JWT string.
 *
 * @param {string} jwt - The JWT string to be set in the cookie.
 * @return {void}
 */
export const setJWT = (jwt: string): void => {
	cookies().set({
		name: COOKIES.JWT,
		value: jwt,
		...defaultConfig,
	})
}
