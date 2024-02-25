import { cookies } from 'next/headers'

import { Container } from '@/components/ui/container'

import { MenuHeader } from '.'
import ThemeButton from './ThemeButton'

export const Header = () => {
  const cookie = cookies()
  const theme = cookie.get('theme')?.value

  return (
    <Container className="flex items-center justify-between border-b-2 px-8 py-4 shadow-2xl">
      <MenuHeader />
      <ThemeButton theme={theme} />
    </Container>
  )
}
