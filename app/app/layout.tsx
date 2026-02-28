import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vibeathon App',
  description: 'Built at St. Joseph Vibeathon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
