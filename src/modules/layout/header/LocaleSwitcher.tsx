'use client'

import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu/dropdown-menu'
import { languages } from '@/constants'
import { Link, usePathname } from '@/navigation'

type Props = {
	locale: string
}

const LocaleSwitcher = ({ locale }: Props) => {
	const pathname = usePathname()
	const currentLanguage = languages.find((language) => language.code === locale)

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>{currentLanguage?.name}</DropdownMenuTrigger>
			<DropdownMenuContent>
				{languages.map((language) => (
					<DropdownMenuCheckboxItem
						checked={language.code === currentLanguage?.code}
						key={language.code}
						textValue={language.code}
					>
						<Link href={pathname} locale={language.code} replace>
							{language.name}
						</Link>
					</DropdownMenuCheckboxItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default LocaleSwitcher
