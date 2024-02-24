'use client'

import { Container } from '../../ui/container'
import { NavigationMenu } from '../../ui/navigation-menu'
import { MenuHeader } from '.'

export const Header = () => {
  return (
    <Container className="border-b-2 px-8 py-4 shadow-2xl">
      <NavigationMenu className="w-full">
        <MenuHeader />
      </NavigationMenu>
    </Container>
  )
}
