import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Baker Air Inc.',
    short_name: 'Baker Air',
    description: 'Family-owned HVAC company serving the Temecula Valley with professional heating and air conditioning services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#f47b52',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['business', 'utilities'],
    shortcuts: [
      {
        name: 'Call Us',
        url: 'tel:9513480686',
        description: 'Call Baker Air directly',
      },
      {
        name: 'Get a Quote',
        url: '/contact-us',
        description: 'Request a free HVAC quote',
      },
      {
        name: 'Services',
        url: '/services',
        description: 'View our HVAC services',
      },
    ],
  }
}
