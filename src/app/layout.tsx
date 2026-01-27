import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { LocalBusinessSchema, WebsiteSchema } from '@/components/structured-data'
import { GoogleAnalytics, GoogleTagManager, GoogleTagManagerNoScript } from '@/components/analytics'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const baseUrl = 'https://bakerairinc.com'

// Check if we're in production - if not, noindex the site
const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === 'production' ||
                     process.env.VERCEL_ENV === 'production' ||
                     process.env.NODE_ENV === 'production'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Baker Air Inc. | Temecula Valley HVAC Services',
    template: '%s | Baker Air Inc.',
  },
  description:
    'Family-owned HVAC company serving Temecula, Menifee, Murrieta & Winchester, CA. AC installation, repair, maintenance & air quality services.',
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
    'Baker Air',
    'HVAC contractor',
    'furnace repair',
    'air conditioning installation',
  ],
  authors: [{ name: 'Baker Air Inc.' }],
  creator: 'Baker Air Inc.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: 'Baker Air Inc. | Quality Heating & Air Services',
    description:
      'Family-owned HVAC company serving the Temecula Valley with professional heating and air conditioning services.',
    siteName: 'Baker Air Inc.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Baker Air Inc. - Quality HVAC Services in Temecula Valley',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baker Air Inc. | Quality Heating & Air Services',
    description:
      'Family-owned HVAC company serving the Temecula Valley with professional heating and air conditioning services.',
    images: ['/og-image.png'],
  },
  robots: isProduction
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      }
    : {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
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
      <head>
        <LocalBusinessSchema />
        <WebsiteSchema />
        <GoogleAnalytics />
        <GoogleTagManager />
      </head>
      <body className="min-h-screen flex flex-col">
        <GoogleTagManagerNoScript />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
