import { Container } from '@/components/ui/container'
import { THEME } from '@/constants'

import { MenuHeader } from '.'
import ThemeButton from './ThemeButton'

type Props = {
  theme: THEME
}

export const Header = ({ theme }: Props) => {
  return (
    <Container className="flex items-center justify-between border-b-2 px-8 py-4 shadow-2xl">
      <MenuHeader />
      <ThemeButton theme={theme} />
    </Container>
  )
}
