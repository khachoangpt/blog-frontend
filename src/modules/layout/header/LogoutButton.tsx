'use client'

import { Button } from '@/components/ui/button'
import { pageList } from '@/constants'
import { useRouter } from 'next/navigation'
import { logout } from './actions'

const LogoutButton = () => {
	const router = useRouter()

	const handleLogout = async () => {
		await logout()
		router.push(pageList.home.href)
	}
	return (
		<Button variant="destructive" onClick={handleLogout}>
			Logout
		</Button>
	)
}

export default LogoutButton
