'use server'

import { deleteJWT } from '@/actions/cookies'

/**
 * Clears the JWT cookie and invalidates the session on the server.
 *
 * @return {Promise<void>}
 */
export const logout = async (): Promise<void> => {
	deleteJWT()
}
