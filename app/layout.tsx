import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Thelma Prado — Senior UX/UI Designer',
  description:
    'Senior UX/UI Designer with 10+ years crafting user-centered products. Open to AI-driven product teams.',
  openGraph: {
    title: 'Thelma Prado — Senior UX/UI Designer',
    description:
      'Senior UX/UI Designer with 10+ years crafting user-centered products. Open to AI-driven product teams.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans bg-white text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  )
}
