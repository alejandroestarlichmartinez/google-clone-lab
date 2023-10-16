// vendors
import { Inter } from 'next/font/google'
// styles
import './globals.scss'
// components
import Head from './head'
import { Footer } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
      <body className={`relative min-h-screen ${inter.className}`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
