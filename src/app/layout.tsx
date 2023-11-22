import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Space Labs',
  description: 'A proving ground for tools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            <main className="h-screen w-screen overflow-auto text-foreground bg-background p-8">
              {children}
            </main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
