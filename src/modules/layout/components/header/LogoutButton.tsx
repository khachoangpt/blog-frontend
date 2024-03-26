'use client'

import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import useHeaderController from '../../controllers/header-controller'

const LogoutButton = () => {
	const t = useTranslations('Common.header')
	const { handleLogout } = useHeaderController()

	return (
		<Button variant="danger" onClick={handleLogout}>
			{t('button-logout')}
		</Button>
	)
}

export default LogoutButton
