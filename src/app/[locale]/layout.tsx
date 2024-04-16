import { getTheme } from '@/actions/cookies'
import '@/app/globals.css'
import { Toaster } from '@/components/ui/sonner'
import { fontSans } from '@/configs/font'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
	title: 'Blog',
	description: 'IT Blog',
}

type LocaleLayoutProps = Readonly<{
	children: ReactNode
	params: { locale: string }
}>

export default function LocaleLayout({
	children,
	params: { locale },
}: LocaleLayoutProps) {
	const theme = getTheme()
	const messages = useMessages()

	return (
		<html lang={locale} className={theme}>
			<body
				className={cn(
					'min-h-screen bg-base font-sans antialiased',
					fontSans.variable,
				)}
			>
				<NextIntlClientProvider locale={locale} messages={messages}>
					{children}
				</NextIntlClientProvider>
				<Toaster theme={theme} position="top-center" richColors />
			</body>
		</html>
	)
}
