'use server'

import { COOKIES } from '@/constants'
import { cookies } from 'next/headers'

export const checkAuth = async (error: string) => {
	if (error) {
		cookies().set({ name: COOKIES.JWT, value: '' })
	}
}
