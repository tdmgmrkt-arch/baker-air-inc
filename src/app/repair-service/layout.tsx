import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AC & Heating Repair Service',
  description:
    'Fast, reliable AC and heating repair in Temecula Valley. Same-day service available. Baker Air technicians diagnose and fix problems right the first time.',
  openGraph: {
    title: 'AC & Heating Repair | Baker Air Inc.',
    description:
      'Fast, reliable AC and heating repair in Temecula Valley. Same-day service available from certified technicians.',
  },
}

export default function RepairServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
