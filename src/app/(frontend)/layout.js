import { LinkrunnerScript } from '@linkrunner/web/next'
import './globals.css'

// Linkrunner Web SDK token (Linkrunner dashboard > Settings > Project Details). The SDK is
// skipped when it is unset, so local and preview builds send no events.
const linkrunnerToken = process.env.NEXT_PUBLIC_LINKRUNNER_WEB_TOKEN?.trim()

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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Crimson+Pro:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface">
        {children}
        {linkrunnerToken && <LinkrunnerScript token={linkrunnerToken} />}
      </body>
    </html>
  )
}
