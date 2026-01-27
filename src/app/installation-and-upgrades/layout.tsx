import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HVAC Installation & Upgrades',
  description:
    'Professional AC and heating installation in Temecula Valley. Central AC, mini-splits, furnaces & smart thermostats. Energy-efficient upgrades.',
  alternates: {
    canonical: '/installation-and-upgrades',
  },
  openGraph: {
    title: 'HVAC Installation & Upgrades | Baker Air Inc.',
    description:
      'Professional AC and heating installation in Temecula Valley. Energy-efficient systems that save you money long-term.',
    url: '/installation-and-upgrades',
    images: [
      {
        url: '/og-installation.png',
        width: 1200,
        height: 630,
        alt: 'HVAC Installation & Upgrades - Baker Air Inc.',
      },
    ],
  },
}

export default function InstallationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
