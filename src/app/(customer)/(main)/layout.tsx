import { getTheme } from '@/actions'
import '@/app/globals.css'
import { Container } from '@/components/ui/container'
import { Toaster } from '@/components/ui/sonner'
import { fontSans } from '@/configs/font'
import { cn } from '@/lib/utils'
import { Header } from '@/modules/layout/header'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
	title: 'Blog',
	description: 'IT Blog',
}

type MainLayoutProps = Readonly<{
	children: ReactNode
}>

export default async function RootLayout({ children }: MainLayoutProps) {
	const theme = getTheme()

	return (
		<html lang="en" className={theme}>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fontSans.variable,
				)}
			>
				<Header theme={theme} />
				<Container className="mx-auto my-10 max-w-5xl select-none max-lg:px-4">
					{children}
				</Container>
				<Toaster position="top-center" richColors />
			</body>
		</html>
	)
}
