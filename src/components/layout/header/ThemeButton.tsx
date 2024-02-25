'use client'

import { MoonIcon, SunIcon } from 'lucide-react'

import { changeTheme } from '@/actions/theme/change-theme'
import { Button } from '@/components/ui/button'

type Props = {
  theme?: string
}

const ThemeButton = ({ theme }: Props) => {
  const setTheme = async () => {
    changeTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button variant={'ghost'} onClick={setTheme}>
      {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}

export default ThemeButton
