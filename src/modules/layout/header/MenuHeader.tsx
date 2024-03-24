'use client'

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { pageList } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
	homeText: string
	blogText: string
}

export const MenuHeader = ({ blogText, homeText }: Props) => {
	const pathname = usePathname()
	const headers: { href: string; title: string }[] = [
		{ href: pageList.home.href, title: homeText },
		{ href: pageList.blogList.href, title: blogText },
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
