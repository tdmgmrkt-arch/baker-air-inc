import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Preventative Maintenance & The Comfy Club',
  description:
    'Join The Comfy Club for priority HVAC maintenance. 2 visits per year, 15% repair discount, and $97 service fee waived. Keep your system running efficiently.',
  alternates: {
    canonical: '/preventative-maintenance',
  },
  openGraph: {
    title: 'Preventative Maintenance & The Comfy Club | Baker Air Inc.',
    description:
      'Join The Comfy Club for priority HVAC maintenance. 2 visits per year, 15% repair discount, and exclusive member benefits.',
    url: '/preventative-maintenance',
    images: [
      {
        url: '/og-maintenance.png',
        width: 1200,
        height: 630,
        alt: 'HVAC Preventative Maintenance - The Comfy Club - Baker Air Inc.',
      },
    ],
  },
}

export default function PreventativeMaintenanceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
