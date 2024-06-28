import type { Metadata, Viewport } from 'next'
import '@/styles/globals.scss'

export const metadata: Metadata = {
  title: 'DATAWOW TEST',
  description: 'DATAWOW TEST',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  interactiveWidget: 'resizes-visual',
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
