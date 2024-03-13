import { getMe } from '@/actions/customer/get-me'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Container } from '@/components/ui/container'
import { COOKIES, type THEME } from '@/constants'
import { cookies } from 'next/headers'
import { MenuHeader } from '.'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import ThemeButton from './ThemeButton'

type Props = {
	theme: THEME
}

export const Header = async ({ theme }: Props) => {
	const jwt = cookies().get(COOKIES.JWT)?.value
	const { customer } = await getMe()

	return (
		<Container className="flex items-center justify-between border-b-2 px-8 py-4 shadow-2xl">
			<MenuHeader />
			<Container className="flex items-start gap-x-5">
				{jwt ? (
					<>
						<LogoutButton />
						<Avatar>
							<AvatarImage src="/#" />
							<AvatarFallback>{customer?.first_name?.at(0)}</AvatarFallback>
						</Avatar>
					</>
				) : (
					<LoginButton />
				)}
				<ThemeButton theme={theme} />
			</Container>
		</Container>
	)
}
