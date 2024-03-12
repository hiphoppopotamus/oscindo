import './/ui/globals.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Gabarito } from 'next/font/google'
import { Manrope } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const gabarito = Gabarito({ subsets: ['latin'] })
const manrope = Manrope({ subsets: ['latin'] })

export const metadata = {
  title: "Overseas Study Centre",
  description: "Study in New Zealand with OSC",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={manrope.className}>{children}</body>
    </html>
  )
}