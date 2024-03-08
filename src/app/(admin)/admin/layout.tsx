import '@/app/globals.css'
import { fontSans } from '@/configs/font'
import { THEME } from '@/constants'
import { cn } from '@/lib/utils'
import { cookies } from 'next/headers'
import type { ReactNode } from 'react'

type AdminLayoutProps = Readonly<{
	children: ReactNode
}>

const AdminLayout = ({ children }: AdminLayoutProps) => {
	const theme = (cookies().get('theme')?.value ?? THEME.DARK) as THEME

	return (
		<html lang="en" className={theme}>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fontSans.variable,
				)}
			>
				{children}
			</body>
		</html>
	)
}

export default AdminLayout
