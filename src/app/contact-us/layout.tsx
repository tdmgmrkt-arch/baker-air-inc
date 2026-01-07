import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Baker Air Inc. for a free HVAC quote. Call (951) 348-0686 or fill out our form. Serving Temecula, Menifee, Wildomar, Winchester & Murrieta, CA.',
  openGraph: {
    title: 'Contact Baker Air Inc. | Get a Free HVAC Quote',
    description:
      'Contact Baker Air Inc. for a free HVAC quote. Call (951) 348-0686 or fill out our form. Serving Temecula Valley.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
