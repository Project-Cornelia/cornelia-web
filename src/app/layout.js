import './globals.css'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: 'Home | Project Cornelia AINA Foundation',
  description: 'Making every woman\'s voice central to all conversations that matter',
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
