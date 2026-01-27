export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    name: 'Baker Air Inc.',
    image: 'https://bakerairinc.com/baker.logo.webp',
    logo: 'https://bakerairinc.com/baker.logo.webp',
    url: 'https://bakerairinc.com',
    telephone: '+1-951-348-0686',
    email: 'office.bakerair@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '32675 Ashford Ln',
      addressLocality: 'Winchester',
      addressRegion: 'CA',
      postalCode: '92596',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.7076,
      longitude: -117.0842,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Temecula',
        '@id': 'https://en.wikipedia.org/wiki/Temecula,_California',
      },
      {
        '@type': 'City',
        name: 'Menifee',
      },
      {
        '@type': 'City',
        name: 'Murrieta',
      },
      {
        '@type': 'City',
        name: 'Winchester',
      },
      {
        '@type': 'City',
        name: 'Wildomar',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Check',
    sameAs: [
      'https://www.facebook.com/profile.php?id=61562574151435',
      'https://www.instagram.com/bakerairinc/',
      'https://www.yelp.com/biz/baker-air-winchester-3',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'HVAC Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'HVAC Installation & Upgrades',
            description: 'Professional AC and heating system installation including central AC, mini-splits, and furnaces.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AC & Heating Repair',
            description: 'Fast, reliable HVAC repair service with same-day availability.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Preventative Maintenance',
            description: 'Seasonal HVAC tune-ups and The Comfy Club membership program.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Indoor Air Quality',
            description: 'Whole-home air purifiers, UV air treatment, and MERV filtration systems.',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Baker Air Inc.',
    url: 'https://bakerairinc.com',
    publisher: {
      '@type': 'Organization',
      name: 'Baker Air Inc.',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bakerairinc.com/baker.logo.webp',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceSchema({
  name,
  description,
  url,
  image,
}: {
  name: string
  description: string
  url: string
  image?: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    image: image || 'https://bakerairinc.com/baker.logo.webp',
    provider: {
      '@type': 'HVACBusiness',
      name: 'Baker Air Inc.',
      url: 'https://bakerairinc.com',
    },
    areaServed: {
      '@type': 'State',
      name: 'California',
    },
    serviceType: 'HVAC Service',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
