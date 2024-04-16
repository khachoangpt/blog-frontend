'use server'

import {
	type ApiError,
	AuthService,
	type LoginParams,
	type LoginResponse,
} from '$/backend'
import { setJWT } from '@/actions'

/**
 * Logs in to the server with the given login credentials.
 *
 * @param {LoginParams} loginParams - The login parameters.
 * @return {Promise<{loginResponse?: LoginResponse, error?: string}>} - The login response or an error message.
 */
export const login = async (
	loginParams: LoginParams,
): Promise<{ loginResponse?: LoginResponse; error?: string }> => {
	try {
		const loginResponse = await AuthService.login({ requestBody: loginParams })
		setJWT(loginResponse.token ?? '')
		return { loginResponse }
	} catch (error) {
		return {
			error: ((error as ApiError)?.body as { message?: string })?.message,
		}
	}
}
