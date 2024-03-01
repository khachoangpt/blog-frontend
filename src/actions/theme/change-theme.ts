'use server'

import { cookies } from 'next/headers'

export const changeTheme = async (theme: string) => {
	cookies().set('theme', theme)
}
