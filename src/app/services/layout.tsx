import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore Baker Air\'s complete HVAC services: AC installation, repair, preventative maintenance, and indoor air quality solutions for Temecula Valley homes.',
  openGraph: {
    title: 'HVAC Services | Baker Air Inc.',
    description:
      'Explore Baker Air\'s complete HVAC services: AC installation, repair, preventative maintenance, and indoor air quality solutions.',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
