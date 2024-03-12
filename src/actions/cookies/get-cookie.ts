import { COOKIES, THEME } from '@/constants'
import { cookies } from 'next/headers'

export const getTheme = () =>
	(cookies().get(COOKIES.THEME)?.value ?? THEME.DARK) as THEME
