import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Indoor Air Quality Solutions',
  description:
    'Breathe cleaner air with Baker Air\'s indoor air quality solutions. Whole-home purifiers, UV air treatment, and MERV filtration for Temecula Valley homes.',
  openGraph: {
    title: 'Indoor Air Quality Solutions | Baker Air Inc.',
    description:
      'Breathe cleaner air with whole-home purifiers, UV air treatment, and MERV filtration systems.',
  },
}

export default function IndoorAirQualityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
