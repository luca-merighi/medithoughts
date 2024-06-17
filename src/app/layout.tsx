import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from '@/contexts/theme'
import { SessionProvider } from '@/contexts/session'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Medithoughts',
  description: 'Generated by create next app',
  authors: [{ name: 'Luca Merighi' }]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider>
      <SessionProvider>
        <html lang="pt-BR" className="antialiased">
          <body className={inter.className}>{children}</body>
        </html>
      </SessionProvider>
    </ThemeProvider>
  )
}
