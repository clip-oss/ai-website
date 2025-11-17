import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ReceptAI - Never Miss a Call Again | AI Phone Receptionist',
  description: 'AI receptionist that works 24/7. Book appointments automatically. Save $100K+ annually. Setup in 7 days. Transform your business with intelligent call handling.',
  keywords: 'AI receptionist, AI phone answering, automated booking, call handling, business automation, AI chatbot, workflow automation',
  authors: [{ name: 'ReceptAI' }],
  openGraph: {
    title: 'ReceptAI - Never Miss a Call Again',
    description: 'AI receptionist that works 24/7. Save $100K+ annually with intelligent call handling.',
    url: 'https://receptai.io',
    siteName: 'ReceptAI',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ReceptAI - AI Phone Receptionist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReceptAI - Never Miss a Call Again',
    description: 'AI receptionist that works 24/7. Save $100K+ annually.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
