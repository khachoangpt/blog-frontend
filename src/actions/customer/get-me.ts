import { CustomerService } from '$/backend'
import { getJWT } from '@/actions/cookies'
import { REVALIDATE_DEFAULT, queryTags } from '@/constants'

export const getMe = async () => {
	try {
		const jwt = await getJWT()
		if (!jwt) return { error: 'JWT not found' }
		const customer = await CustomerService.getMe({
			next: { revalidate: REVALIDATE_DEFAULT, tags: queryTags.me({ jwt }) },
		})
		return { customer }
	} catch {
		return { error: 'Customer not found' }
	}
}
