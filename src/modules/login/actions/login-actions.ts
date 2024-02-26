'use server'

import { cookies } from 'next/headers'

import { COOKIES } from '@/constants'
import { ApiError, AuthService, LoginParams } from '$/backend'

export const login = async (loginParams: LoginParams) => {
  try {
    const loginDTO = await AuthService.login({ requestBody: loginParams })
    cookies().set({
      name: COOKIES.IS_AUTH,
      value: 'true',
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    })
    return { loginDTO }
  } catch (error) {
    return { error: (error as ApiError)?.body?.message }
  }
}
