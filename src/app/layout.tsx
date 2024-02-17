import './globals.css'

import type { Metadata } from 'next'

import { Container } from '@/components/ui/container'
import { fontSans } from '@/configs/font'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'IT Blog',
}

type MainLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: MainLayoutProps) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          'min-h-screen select-none bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Header />
        <Container className="mx-auto my-10 max-w-5xl max-lg:px-4">
          {children}
        </Container>
      </body>
    </html>
  )
}

const Header = () => {
  return <Container className="border-b-2 px-8 py-4 shadow-2xl">Blog</Container>
}
