'use client'

import Link from 'next/link'

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
            <Link href={header.href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {header.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
