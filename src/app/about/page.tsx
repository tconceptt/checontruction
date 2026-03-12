import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQSection from '@/components/FAQSection'
import LocationsSection from '@/components/LocationsSection'
import { absoluteUrl, siteConfig } from '@/lib/site-data'

export const metadata: Metadata = {
  title: {
    absolute: 'About Che Construction PLC | Construction Company in Ethiopia',
  },
  description:
    'Learn about Che Construction PLC, its headquarters in Addis Ababa, core service lines, and project delivery approach across Ethiopia.',
  alternates: { canonical: absoluteUrl('/about') },
  openGraph: {
    title: 'About Che Construction PLC | Construction Company in Ethiopia',
    description:
      'Company profile, service coverage, and project delivery focus for Che Construction PLC in Ethiopia.',
    url: absoluteUrl('/about'),
    images: [{ url: siteConfig.ogImagePath, width: 1200, height: 630, alt: 'About Che Construction PLC' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      name: 'About Che Construction PLC',
      url: absoluteUrl('/about'),
      description:
        'Company profile for Che Construction PLC, a construction company in Ethiopia delivering building, infrastructure, and renovation projects.',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.siteUrl },
        { '@type': 'ListItem', position: 2, name: 'About', item: absoluteUrl('/about') },
      ],
    },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <section className="pt-28 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'About' }]} />
          <div className="max-w-4xl mt-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">About</p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-6">
              A Construction Company Built for Ethiopia&apos;s Project Demands
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Che Construction PLC presents itself as a multidisciplinary contractor delivering building
              construction, road infrastructure, and renovation services from Addis Ababa into major regional
              markets. The company focuses on dependable delivery, practical execution, and long-term value
              for clients building across Ethiopia.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Company Profile</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-5">
              Built around capability, discipline, and reliability
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Che Construction PLC is structured around the needs clients care about most: capable teams,
              disciplined delivery, and strong coordination from planning through handover. The company brings
              together building construction, infrastructure delivery, and renovation support under one brand.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From its base in Addis Ababa, the company highlights work across several major Ethiopian markets
              while keeping quality, communication, and schedule control at the center of each project.
            </p>
          </div>

          <div className="rounded-sm border border-gray-200 bg-white p-8">
            <p className="text-sm uppercase tracking-[0.15em] text-gray-500 mb-6">Why Clients Choose Che Construction</p>
            <ul className="space-y-4">
              {siteConfig.valuePoints.map((point) => (
                <li key={point} className="text-gray-700 leading-relaxed border-l-2 border-primary pl-4">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Core Services</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-5">
              One company, three major construction disciplines
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Che Construction PLC&apos;s work is presented across three core disciplines: building
              construction, road and infrastructure delivery, and renovation and remodeling. Together, these
              service lines reflect the breadth of work the company undertakes across Ethiopia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/services/building-construction" className="rounded-sm border border-gray-200 p-6 hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Building Construction</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Commercial, residential, and institutional building delivery across Addis Ababa and wider Ethiopian markets.
              </p>
            </Link>
            <Link href="/services/road-infrastructure" className="rounded-sm border border-gray-200 p-6 hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Road &amp; Infrastructure</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Civil works, transport links, and supporting infrastructure across regional growth corridors.
              </p>
            </Link>
            <Link href="/services/renovation-remodeling" className="rounded-sm border border-gray-200 p-6 hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Renovation &amp; Remodeling</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Functional upgrades, modernization, and building renewal for active and existing sites.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <LocationsSection />

      <FAQSection
        title="Questions About Che Construction PLC"
        intro="These answers give a clearer overview of the company, its service areas, and the way it approaches project delivery."
        items={siteConfig.faq}
      />
    </>
  )
}
