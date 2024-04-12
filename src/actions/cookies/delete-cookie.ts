import { COOKIES } from '@/constants'
import { cookies } from 'next/headers'

/**
 * Deletes the JWT cookie.
 *
 * @return {void}
 */
export const deleteJWT = () => {
	cookies().delete({ name: COOKIES.JWT })
}
