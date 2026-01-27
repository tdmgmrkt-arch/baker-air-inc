import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AC & Heating Repair Service',
  description:
    'Fast, reliable AC and heating repair in Temecula Valley. Same-day service available. Baker Air technicians diagnose and fix problems right the first time.',
  alternates: {
    canonical: '/repair-service',
  },
  openGraph: {
    title: 'AC & Heating Repair | Baker Air Inc.',
    description:
      'Fast, reliable AC and heating repair in Temecula Valley. Same-day service available from certified technicians.',
    url: '/repair-service',
    images: [
      {
        url: '/og-repair.png',
        width: 1200,
        height: 630,
        alt: 'AC & Heating Repair Service - Baker Air Inc.',
      },
    ],
  },
}

export default function RepairServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
