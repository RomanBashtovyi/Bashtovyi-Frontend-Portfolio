import type { Metadata } from 'next'
import { Inter, Calistoga } from 'next/font/google'
import './globals.css'
import { twMerge } from 'tailwind-merge'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})
const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Bashtovyi — Frontend Portfolio',
  description:
    'Modern frontend portfolio by Roman Bashtovyi. React, TypeScript, Next.js.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          'bg-gray-900 text-white antialiased font-sans'
        )}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
