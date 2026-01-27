import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Indoor Air Quality Solutions',
  description:
    'Breathe cleaner air with Baker Air\'s indoor air quality solutions. Whole-home purifiers, UV air treatment, and MERV filtration for Temecula Valley homes.',
  alternates: {
    canonical: '/indoor-air-quality',
  },
  openGraph: {
    title: 'Indoor Air Quality Solutions | Baker Air Inc.',
    description:
      'Breathe cleaner air with whole-home purifiers, UV air treatment, and MERV filtration systems.',
    url: '/indoor-air-quality',
    images: [
      {
        url: '/og-air-quality.png',
        width: 1200,
        height: 630,
        alt: 'Indoor Air Quality Solutions - Baker Air Inc.',
      },
    ],
  },
}

export default function IndoorAirQualityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
