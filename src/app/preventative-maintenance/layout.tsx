import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Preventative Maintenance & The Comfy Club',
  description:
    'Join The Comfy Club for priority HVAC maintenance. 2 visits per year, 15% repair discount, and $97 service fee waived. Keep your system running efficiently.',
  openGraph: {
    title: 'Preventative Maintenance & The Comfy Club | Baker Air Inc.',
    description:
      'Join The Comfy Club for priority HVAC maintenance. 2 visits per year, 15% repair discount, and exclusive member benefits.',
  },
}

export default function PreventativeMaintenanceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
