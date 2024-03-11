'use server'

import { COOKIES } from '@/constants'
import { cookies } from 'next/headers'

export const logout = async () => {
	cookies().delete(COOKIES.JWT)
}
