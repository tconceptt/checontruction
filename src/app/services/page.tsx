import type { Metadata } from 'next'
import ServicesPageContent from '@/components/ServicesPageContent'

export const metadata: Metadata = {
  title: {
    absolute: 'Construction Services in Ethiopia | Che Construction PLC',
  },
  description:
    'Che Construction PLC offers building construction, road infrastructure, and renovation services across Addis Ababa and Ethiopia. Expert general contractors for commercial, civil, and residential projects.',
  alternates: { canonical: 'https://checonstruction.et/services' },
  openGraph: {
    title: 'Construction Services in Ethiopia | Che Construction PLC',
    description:
      'Building construction, road infrastructure, and renovation services across Addis Ababa, Hawassa, Bahir Dar, and Dire Dawa.',
    url: 'https://checonstruction.et/services',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Che Construction PLC — Construction Services in Ethiopia',
      },
    ],
  },
}

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Building Construction in Ethiopia',
      description:
        'Commercial buildings, office towers, and high-end residential facilities across Addis Ababa and Ethiopia, delivered with precision craftsmanship and proven engineering expertise.',
      provider: {
        '@type': 'GeneralContractor',
        name: 'Che Construction PLC',
        url: 'https://checonstruction.et',
      },
      areaServed: [
        { '@type': 'City', name: 'Addis Ababa' },
        { '@type': 'Country', name: 'Ethiopia' },
      ],
      serviceType: 'Building Construction',
      url: 'https://checonstruction.et/services',
    },
    {
      '@type': 'Service',
      name: 'Road & Infrastructure Construction in Ethiopia',
      description:
        'Road networks, bridges, and critical civil infrastructure projects connecting communities across Ethiopia, including Hawassa and Bahir Dar.',
      provider: {
        '@type': 'GeneralContractor',
        name: 'Che Construction PLC',
        url: 'https://checonstruction.et',
      },
      areaServed: [
        { '@type': 'City', name: 'Hawassa' },
        { '@type': 'City', name: 'Bahir Dar' },
        { '@type': 'Country', name: 'Ethiopia' },
      ],
      serviceType: 'Road & Infrastructure Construction',
      url: 'https://checonstruction.et/services',
    },
    {
      '@type': 'Service',
      name: 'Renovation & Remodeling in Ethiopia',
      description:
        'Comprehensive renovation and remodeling services for existing structures across Addis Ababa and Dire Dawa, modernizing buildings to meet current Ethiopian standards.',
      provider: {
        '@type': 'GeneralContractor',
        name: 'Che Construction PLC',
        url: 'https://checonstruction.et',
      },
      areaServed: [
        { '@type': 'City', name: 'Addis Ababa' },
        { '@type': 'City', name: 'Dire Dawa' },
        { '@type': 'Country', name: 'Ethiopia' },
      ],
      serviceType: 'Renovation & Remodeling',
      url: 'https://checonstruction.et/services',
    },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <ServicesPageContent />
    </>
  )
}
