'use client'

import { setTheme } from '@/actions/cookies'
import { Button } from '@/components/ui/button'
import { THEME } from '@/constants'
import { MoonIcon, SunIcon } from 'lucide-react'

type Props = {
	theme?: THEME
}

const ThemeButton = ({ theme }: Props) => {
	const onChangeTheme = async () => {
		const themeChange = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK
		setTheme(themeChange)
	}

	return (
		<Button variant="transparent" onClick={onChangeTheme}>
			{theme === THEME.DARK ? <MoonIcon /> : <SunIcon />}
		</Button>
	)
}

export default ThemeButton
