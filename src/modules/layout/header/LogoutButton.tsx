'use client'

import { Button } from '@/components/ui/button'
import { pageList } from '@/constants'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { logout } from './actions'

const LogoutButton = () => {
	const router = useRouter()
	const t = useTranslations('Common.header')

	const handleLogout = async () => {
		await logout()
		router.push(pageList.home.href)
	}
	return (
		<Button variant="danger" onClick={handleLogout}>
			{t('button-logout')}
		</Button>
	)
}

export default LogoutButton
