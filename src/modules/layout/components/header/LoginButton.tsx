import { Button } from '@/components/ui/button'
import { pageList } from '@/constants'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const LoginButton = () => {
	const t = useTranslations('Common.header')

	return (
		<Link href={pageList.login.href}>
			<Button>{t('button-login')}</Button>
		</Link>
	)
}

export default LoginButton
