'use server'

import { setTheme } from '@/actions'

/**
 * Sets the theme for the application.
 *
 * @param {string} theme - The theme to be set.
 * @return {Promise<void>} A promise that resolves once the theme is set.
 */
export const changeTheme = async (theme: string): Promise<void> => {
	setTheme(theme)
}
