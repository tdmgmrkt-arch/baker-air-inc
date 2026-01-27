import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Baker Air Inc., a family-owned HVAC company serving Temecula Valley since day one. Meet our team and discover our commitment to quality service.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Baker Air Inc. | Family-Owned HVAC Company',
    description:
      'Learn about Baker Air Inc., a family-owned HVAC company serving Temecula Valley. Meet our team and discover our commitment to quality service.',
    url: '/about',
    images: [
      {
        url: '/og-about.png',
        width: 1200,
        height: 630,
        alt: 'About Baker Air Inc. - Family-Owned HVAC Company',
      },
    ],
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
