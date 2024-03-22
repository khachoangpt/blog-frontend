import { getTheme } from '@/actions'
import '@/app/globals.css'
import { fontSans } from '@/configs/font'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type AdminLayoutProps = Readonly<{
	children: ReactNode
}>

const AdminLayout = ({ children }: AdminLayoutProps) => {
	const theme = getTheme()

	return (
		<html lang="en" className={theme}>
			<body
				className={cn(
					'min-h-screen bg-base font-sans antialiased',
					fontSans.variable,
				)}
			>
				{children}
			</body>
		</html>
	)
}

export default AdminLayout
