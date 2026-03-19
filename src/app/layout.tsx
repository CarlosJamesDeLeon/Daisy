import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Daisy – A Digital Sanctuary',
  description: 'A high-end boutique digital florist and gift experience. Curate your perfect bouquet.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
