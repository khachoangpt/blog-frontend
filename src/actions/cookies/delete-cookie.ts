import { COOKIES } from '@/constants'
import { cookies } from 'next/headers'

export const deleteJWT = () => {
	cookies().delete({ name: COOKIES.JWT })
}
