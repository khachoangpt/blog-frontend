'use server'

import { setTheme } from '@/actions'

export const changeTheme = async (theme: string) => {
	setTheme(theme)
}
