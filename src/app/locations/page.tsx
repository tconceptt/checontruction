import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LocationsSection from '@/components/LocationsSection'
import { absoluteUrl, siteConfig } from '@/lib/site-data'

export const metadata: Metadata = {
  title: {
    absolute: 'Construction Locations in Ethiopia | Che Construction PLC',
  },
  description:
    'Explore the core Ethiopian markets served by Che Construction PLC, including Addis Ababa, Hawassa, Bahir Dar, and Dire Dawa.',
  alternates: { canonical: absoluteUrl('/locations') },
  openGraph: {
    title: 'Construction Locations in Ethiopia | Che Construction PLC',
    description:
      'Location landing pages for Addis Ababa, Hawassa, Bahir Dar, and Dire Dawa.',
    url: absoluteUrl('/locations'),
    images: [{ url: siteConfig.ogImagePath, width: 1200, height: 630, alt: 'Che Construction PLC locations' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      name: 'Construction Locations in Ethiopia',
      url: absoluteUrl('/locations'),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Locations', item: absoluteUrl('/locations') },
      ],
    },
  ],
}

export default function LocationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <section className="pt-28 pb-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Locations' }]} />
          <div className="max-w-4xl mt-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Locations</p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-6">
              Construction Coverage Across Ethiopia
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              These location pages highlight where Che Construction PLC works and how its services align with
              the needs of different cities and regional markets across Ethiopia.
            </p>
          </div>
        </div>
      </section>

      <LocationsSection />
    </>
  )
}
