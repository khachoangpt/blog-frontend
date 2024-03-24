import { getTheme } from '@/actions'
import '@/app/globals.css'
import { Container } from '@/components/ui/container'
import { Header } from '@/modules/layout/header'
import type { ReactNode } from 'react'

type MainLayoutProps = Readonly<{
	children: ReactNode
}>

export default function RootLayout({ children }: MainLayoutProps) {
	const theme = getTheme()

	return (
		<>
			<Header theme={theme} />
			<Container className="mx-auto my-10 max-w-5xl select-none max-lg:px-4">
				{children}
			</Container>
		</>
	)
}
