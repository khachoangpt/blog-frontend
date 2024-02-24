'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

export const MenuHeader = () => {
  const headers: { href: string; title: string }[] = [
    { href: '/', title: 'Home' },
    { href: '/blog', title: 'Blog' },
  ]

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {headers.map((header) => (
          <NavigationMenuItem key={header.href}>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              href={header.href}
            >
              {header.title}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
