import '@/app/globals.css'
import { Container } from '@/components/ui/container'
import type { ReactNode } from 'react'

type RootLayoutProps = Readonly<{
	children: ReactNode
}>

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<Container className="mx-auto h-[100vh] flex items-center max-w-5xl max-lg:px-4">
			{children}
		</Container>
	)
}
