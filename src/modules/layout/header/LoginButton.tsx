import { Button } from '@/components/ui/button'
import { pageList } from '@/constants'
import Link from 'next/link'

const LoginButton = () => {
	return (
		<Link href={pageList.login.href}>
			<Button>Login</Button>
		</Link>
	)
}

export default LoginButton
