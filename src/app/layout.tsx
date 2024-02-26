import './globals.css'

import type { Metadata } from 'next'
import { cookies } from 'next/headers'

import { Header } from '@/components/layout/header'
import { Container } from '@/components/ui/container'
import { fontSans } from '@/configs/font'
import { THEME } from '@/constants'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'IT Blog',
}

type MainLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default async function RootLayout({ children }: MainLayoutProps) {
  const theme = (cookies().get('theme')?.value ?? THEME.DARK) as THEME

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
      </body>
    </html>
  )
}
