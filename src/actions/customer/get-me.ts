import { CustomerService } from '$/backend'
import { getJWT } from '@/actions/cookies'
import { unstable_noStore as noStore } from 'next/cache'

export const getMe = async () => {
	noStore()
	try {
		const jwt = await getJWT()
		if (!jwt) return { error: 'JWT not found' }
		const customer = await CustomerService.getMe()
		return { customer }
	} catch {
		return { error: 'Customer not found' }
	}
}
