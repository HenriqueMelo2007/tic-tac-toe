import './globals.css'
import type { Metadata } from 'next'
import { Caveat } from 'next/font/google'

const caveat = Caveat({ subsets: ['latin'], weight: '700' })

export const metadata: Metadata = {
  title: 'Tic-Tac-Toe',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className='p-0 m-0 box-border'>
      <body className={caveat.className}>{children}</body>
    </html>
  )
}
