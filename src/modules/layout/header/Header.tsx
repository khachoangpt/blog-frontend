import { getJWT } from '@/actions'
import { getMe } from '@/actions/customer/get-me'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Container } from '@/components/ui/container'
import type { THEME } from '@/constants'
import { MenuHeader } from '.'
import LocaleSwitcher from './LocaleSwitcher'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import ThemeButton from './ThemeButton'

type Props = {
	theme: THEME
	locale: string
}

export const Header = async ({ theme, locale }: Props) => {
	const jwt = await getJWT()
	const { customer } = await getMe()

	return (
		<Container className="flex items-center justify-between border-b-2 px-8 py-4 shadow-2xl">
			<MenuHeader />
			<Container className="flex items-center gap-x-5">
				{jwt ? (
					<>
						<LogoutButton />
						<Avatar>
							<AvatarImage src="/#" />
							<AvatarFallback>
								{customer?.first_name?.substring(0, 1)}
							</AvatarFallback>
						</Avatar>
					</>
				) : (
					<LoginButton />
				)}
				<LocaleSwitcher locale={locale} />
				<ThemeButton theme={theme} />
			</Container>
		</Container>
	)
}
