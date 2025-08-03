import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/next"

import './globals.css'

export const metadata: Metadata = {
  title: 'Campfire Films',
  description: 'A film studio in Dayton, Ohio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
    <Analytics />
    <html lang="en">
      <body>{children}</body>
    </html>
    </>
  )
}
