import { cookies } from 'next/headers'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Container } from '@/components/ui/container'
import { COOKIES, THEME } from '@/constants'

import { MenuHeader } from '.'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import ThemeButton from './ThemeButton'

type Props = {
  theme: THEME
}

export const Header = ({ theme }: Props) => {
  const isLogin = cookies().get(COOKIES.IS_AUTH)?.value

  return (
    <Container className="flex items-center justify-between border-b-2 px-8 py-4 shadow-2xl">
      <MenuHeader />
      <Container className="flex items-start gap-x-5">
        {isLogin === 'true' ? (
          <>
            <LogoutButton />
            <Avatar>
              <AvatarImage src="/#" />
              <AvatarFallback>A</AvatarFallback>
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