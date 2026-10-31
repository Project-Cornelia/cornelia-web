import './globals.css'
import { Fraunces, Inter_Tight, JetBrains_Mono } from 'next/font/google'
import SmoothScroll from '@/components/Motion/SmoothScroll'
import Cursor from '@/components/Motion/Cursor'

const display = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['SOFT', 'WONK', 'opsz'],
  variable: '--font-display',
  display: 'swap',
})

const sans = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Home | Project Cornelia AINA Foundation',
  description: 'Making every woman\'s voice central to all conversations that matter',
  charset: 'utf-8',
  icons: {
    icon: '/images/p_cornelia_logo.svg',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#120D16',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-surface text-on-surface font-sans">
        <SmoothScroll />
        <Cursor />
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
