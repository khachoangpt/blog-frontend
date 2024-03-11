'use server'

import { type ApiError, AuthService, type LoginParams } from '$/backend'
import { COOKIES } from '@/constants'
import { cookies } from 'next/headers'

export const login = async (loginParams: LoginParams) => {
	try {
		const loginResponse = await AuthService.login({ requestBody: loginParams })
		cookies().set({
			name: COOKIES.JWT,
			value: loginResponse.token ?? '',
			maxAge: 60 * 60 * 24 * 30,
			path: '/',
		})
		return { loginResponse }
	} catch (error) {
		return { error: (error as ApiError)?.body?.message }
	}
}
