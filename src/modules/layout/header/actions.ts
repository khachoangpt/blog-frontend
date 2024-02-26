'use server'

import { cookies } from 'next/headers'

import { COOKIES } from '@/constants'

export const logout = async () => {
  cookies().delete(COOKIES.IS_AUTH)
}
