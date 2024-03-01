'use client'

import { changeTheme } from '@/actions/theme/change-theme'
import { Button } from '@/components/ui/button'
import { THEME } from '@/constants'
import { MoonIcon, SunIcon } from 'lucide-react'

type Props = {
	theme?: THEME
}

const ThemeButton = ({ theme }: Props) => {
	const setTheme = async () => {
		changeTheme(theme === THEME.DARK ? THEME.LIGHT : THEME.DARK)
	}

	return (
		<Button variant="ghost" onClick={setTheme}>
			{theme === THEME.DARK ? <MoonIcon /> : <SunIcon />}
		</Button>
	)
}

export default ThemeButton
