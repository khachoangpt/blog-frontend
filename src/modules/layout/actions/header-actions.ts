'use server'

import { deleteJWT } from '@/actions'

export const logout = async () => {
	deleteJWT()
}
