import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HVAC Installation & Upgrades',
  description:
    'Professional AC and heating installation in Temecula Valley. Central AC, mini-splits, furnaces & smart thermostats. Energy-efficient systems that save you money.',
  openGraph: {
    title: 'HVAC Installation & Upgrades | Baker Air Inc.',
    description:
      'Professional AC and heating installation in Temecula Valley. Energy-efficient systems that save you money long-term.',
  },
}

export default function InstallationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
