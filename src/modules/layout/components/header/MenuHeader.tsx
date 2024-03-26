'use client'

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { pageList } from '@/constants'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const MenuHeader = () => {
	const pathname = usePathname()
	const t = useTranslations('Common.header')
	const headers: { href: string; title: string }[] = [
		{ href: pageList.home.href, title: t('home') },
		{ href: pageList.blogList.href, title: t('blog') },
	]

	return (
		<NavigationMenu>
			<NavigationMenuList>
				{headers.map((header) => (
					<NavigationMenuItem key={header.href}>
						<Link href={header.href} legacyBehavior passHref>
							<NavigationMenuLink
								active={pathname === header.href}
								className={navigationMenuTriggerStyle()}
							>
								{header.title}
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	)
}
