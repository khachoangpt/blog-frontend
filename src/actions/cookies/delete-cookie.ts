import { COOKIES } from '@/constants'
import { cookies } from 'next/headers'

/**
 * Deletes the JWT cookie.
 *
 * @return {void}
 */
export const deleteJWT = (): void => {
	cookies().delete({ name: COOKIES.JWT })
}
