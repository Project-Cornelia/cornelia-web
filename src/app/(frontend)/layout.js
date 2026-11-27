import './globals.css'
import { Crimson_Pro, Manrope } from 'next/font/google'
import SiteLoader from '@/components/motion/SiteLoader'

const displayFont = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://projectcornelia.org'),
  title: 'Project Cornelia AINA Foundation',
  description: "Making every woman's voice central to all conversations that matter",
  openGraph: {
    title: 'Project Cornelia AINA Foundation',
    description: "Making every woman's voice central to all conversations that matter",
    type: 'website',
  },
  icons: {
    icon: '/images/p_cornelia_logo.svg',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable} bg-surface font-sans text-on-surface antialiased`}>
        <SiteLoader />
        {children}
      </body>
    </html>
  )
}
