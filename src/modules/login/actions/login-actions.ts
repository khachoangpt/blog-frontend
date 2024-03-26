'use server'

import { type ApiError, AuthService, type LoginParams } from '$/backend'
import { setJWT } from '@/actions'

export const login = async (loginParams: LoginParams) => {
	try {
		const loginResponse = await AuthService.login({ requestBody: loginParams })
		setJWT(loginResponse.token ?? '')
		return { loginResponse }
	} catch (error) {
		return { error: (error as ApiError)?.body?.message }
	}
}
