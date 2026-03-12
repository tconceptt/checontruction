import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQSection from '@/components/FAQSection'
import { getLocationBySlug, locations } from '@/lib/locations-data'
import { projects } from '@/lib/projects-data'
import { getServiceBySlug } from '@/lib/services-data'
import { absoluteUrl, siteConfig } from '@/lib/site-data'

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const location = getLocationBySlug(slug)

  if (!location) {
    return {}
  }

  const title = `${location.headline} | Che Construction PLC`

  return {
    title: {
      absolute: title,
    },
    description: location.summary,
    alternates: { canonical: absoluteUrl(`/locations/${location.slug}`) },
    openGraph: {
      title,
      description: location.summary,
      url: absoluteUrl(`/locations/${location.slug}`),
      images: [{ url: siteConfig.ogImagePath, width: 1200, height: 630, alt: title }],
    },
  }
}

export default async function LocationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const location = getLocationBySlug(slug)

  if (!location) {
    notFound()
  }

  const serviceLinks = location.primaryServices
    .map((slug) => getServiceBySlug(slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service))

  const locationProjects = projects.filter((project) => project.city.toLowerCase().replace(/\s+/g, '-') === location.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Place',
        name: location.name,
        description: location.summary,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: absoluteUrl('/locations') },
          { '@type': 'ListItem', position: 3, name: location.name, item: absoluteUrl(`/locations/${location.slug}`) },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: location.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <section className="pt-28 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { href: '/', label: 'Home' },
              { href: '/locations', label: 'Locations' },
              { label: location.name },
            ]}
          />
          <div className="max-w-4xl mt-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Location Detail</p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-6">
              {location.headline}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-5">{location.intro}</p>
            <p className="text-gray-600 leading-relaxed">{location.summary}</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="rounded-sm border border-gray-200 bg-white p-8">
            <p className="text-sm uppercase tracking-[0.15em] text-gray-500 mb-6">Relevant Services</p>
            <div className="space-y-4">
              {serviceLinks.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="block hover:text-primary transition-colors">
                  <p className="text-lg font-semibold text-gray-900 mb-2">{service.shortTitle}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.summary}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-sm border border-gray-200 bg-white p-8">
            <p className="text-sm uppercase tracking-[0.15em] text-gray-500 mb-6">Why This City Page Matters</p>
            <p className="text-gray-700 leading-relaxed">
              Google often rewards local relevance when a business publishes city-level landing pages that
              align service copy, project examples, and company identity. This page gives {location.name} its
              own indexable context instead of relying only on brief homepage mentions.
            </p>
          </div>
        </div>
      </section>

      {locationProjects.length ? (
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Featured Projects</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-5">
                Project examples in {location.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {locationProjects.map((project) => (
                <Link key={project.slug} href={`/projects/${project.slug}`} className="rounded-sm border border-gray-200 p-6 hover:border-primary/40 transition-colors">
                  <p className="text-sm uppercase tracking-[0.15em] text-gray-500 mb-3">{project.category}</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <FAQSection
        title={`Questions About ${location.name}`}
        intro="These entries support local relevance and reinforce the city-level construction intent."
        items={location.faq}
      />
    </>
  )
}
