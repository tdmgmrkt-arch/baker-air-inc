import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'Baker Air Inc. | Quality Heating & Air Services in Temecula Valley',
    template: '%s | Baker Air Inc.',
  },
  description:
    'Family-owned HVAC company serving Temecula, Menifee, Wildomar, Winchester & Murrieta, CA. Professional AC installation, repair, maintenance & indoor air quality services.',
  keywords: [
    'HVAC',
    'air conditioning',
    'heating',
    'AC repair',
    'AC installation',
    'Temecula HVAC',
    'Menifee HVAC',
    'Murrieta AC repair',
    'Winchester heating',
    'Wildomar air conditioning',
    'indoor air quality',
    'preventative maintenance',
  ],
  authors: [{ name: 'Baker Air Inc.' }],
  creator: 'Baker Air Inc.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bakerairinc.com',
    title: 'Baker Air Inc. | Quality Heating & Air Services',
    description:
      'Family-owned HVAC company serving the Temecula Valley with professional heating and air conditioning services.',
    siteName: 'Baker Air Inc.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baker Air Inc. | Quality Heating & Air Services',
    description:
      'Family-owned HVAC company serving the Temecula Valley with professional heating and air conditioning services.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
