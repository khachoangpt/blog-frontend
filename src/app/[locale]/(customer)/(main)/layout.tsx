import { getTheme } from '@/actions'
import '@/app/globals.css'
import { Container } from '@/components/ui/container'
import { Header } from '@/modules/layout/header'
import { Fragment, type ReactNode } from 'react'

type MainLayoutProps = Readonly<{
	children: ReactNode
	params: { locale: string }
}>

export default function RootLayout({
	children,
	params: { locale },
}: MainLayoutProps) {
	const theme = getTheme()

	return (
		<Fragment>
			<Header theme={theme} locale={locale} />
			<Container className="mx-auto my-10 max-w-5xl select-none max-lg:px-4">
				{children}
			</Container>
		</Fragment>
	)
}
