import '@/app/globals.css'
import { Container } from '@/components/ui/container'
import { Toaster } from '@/components/ui/sonner'
import { fontSans } from '@/configs/font'
import { COOKIES, THEME } from '@/constants'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
	title: 'Blog',
	description: 'IT Blog',
}

type MainLayoutProps = Readonly<{
	children: ReactNode
}>

export default async function RootLayout({ children }: MainLayoutProps) {
	const theme = (cookies().get(COOKIES.THEME)?.value ?? THEME.DARK) as THEME

	return (
		<html lang="en" className={theme}>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fontSans.variable,
				)}
			>
				<Container className="mx-auto h-[100vh] flex items-center max-w-5xl max-lg:px-4">
					{children}
				</Container>
				<Toaster position="top-center" richColors />
			</body>
		</html>
	)
}
