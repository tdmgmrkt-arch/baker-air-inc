import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Baker Air Inc. for a free HVAC quote. Call (951) 348-0686 or fill out our form. Serving Temecula, Menifee, Wildomar, Winchester & Murrieta, CA.',
  alternates: {
    canonical: '/contact-us',
  },
  openGraph: {
    title: 'Contact Baker Air Inc. | Get a Free HVAC Quote',
    description:
      'Contact Baker Air Inc. for a free HVAC quote. Call (951) 348-0686 or fill out our form. Serving Temecula Valley.',
    url: '/contact-us',
    images: [
      {
        url: '/og-contact.png',
        width: 1200,
        height: 630,
        alt: 'Contact Baker Air Inc. - Get a Free HVAC Quote',
      },
    ],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
