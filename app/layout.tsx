import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Badilsha Studios',
  description: 'Created with love by Badilsha Studios',
  generator: 'lubwama + v0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
