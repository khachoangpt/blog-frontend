import { Container } from '../../ui/container'
import { MenuHeader } from '.'

export const Header = () => {
  return (
    <Container className="border-b-2 px-8 py-4 shadow-2xl">
      <MenuHeader />
    </Container>
  )
}
