import { CustomerService } from '$/backend'
import { unstable_noStore as noStore } from 'next/cache'

export const getMe = async () => {
	noStore()
	try {
		const customer = await CustomerService.getCustomer()
		return { customer }
	} catch {
		return { error: 'Customer not found' }
	}
}
