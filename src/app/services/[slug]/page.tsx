import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQSection from '@/components/FAQSection'
import { projects } from '@/lib/projects-data'
import { getServiceBySlug, services } from '@/lib/services-data'
import { absoluteUrl, siteConfig } from '@/lib/site-data'

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {}
  }

  return {
    title: {
      absolute: service.metaTitle,
    },
    description: service.metaDescription,
    alternates: { canonical: absoluteUrl(`/services/${service.slug}`) },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: absoluteUrl(`/services/${service.slug}`),
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const relatedProjects = projects.filter((project) => project.relatedServiceSlug === service.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: service.title,
        description: service.metaDescription,
        url: absoluteUrl(`/services/${service.slug}`),
        areaServed: service.cities.map((city) => ({ '@type': 'City', name: city })),
        provider: {
          '@type': 'ConstructionCompany',
          name: siteConfig.name,
          url: siteConfig.siteUrl,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: service.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Services', item: absoluteUrl('/services') },
          { '@type': 'ListItem', position: 3, name: service.shortTitle, item: absoluteUrl(`/services/${service.slug}`) },
        ],
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
              { href: '/services', label: 'Services' },
              { label: service.shortTitle },
            ]}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Service Detail</p>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-6">
                {service.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">{service.heroDescription}</p>
              <p className="text-gray-600 leading-relaxed">{service.overview}</p>
            </div>

            <div className="relative min-h-[360px] rounded-sm overflow-hidden shadow-lg">
              <Image src={service.image} alt={service.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="rounded-sm border border-gray-200 bg-white p-8">
            <p className="text-sm uppercase tracking-[0.15em] text-gray-500 mb-6">What We Deliver</p>
            <ul className="space-y-4 text-gray-700 leading-relaxed">
              {service.deliverables.map((item) => (
                <li key={item} className="border-l-2 border-primary pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-sm border border-gray-200 bg-white p-8">
            <p className="text-sm uppercase tracking-[0.15em] text-gray-500 mb-6">Why Clients Choose This Service</p>
            <ul className="space-y-4 text-gray-700 leading-relaxed">
              {service.differentiators.map((item) => (
                <li key={item} className="border-l-2 border-accent pl-4">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-gray-500 leading-relaxed">
              Relevant markets: {service.cities.join(', ')}.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Related Projects</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-5">
              Project examples tied to this service
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These project examples show how Che Construction PLC applies this service across different
              project types, categories, and locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="rounded-sm border border-gray-200 p-6 hover:border-primary/40 transition-colors">
                <p className="text-sm uppercase tracking-[0.15em] text-gray-500 mb-3">{project.city}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        title={`Questions About ${service.shortTitle}`}
        intro="These answers explain the scope of the service, where it is applied, and what clients can expect from delivery."
        items={service.faq}
      />

      <section className="py-20 bg-[#060b11]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-5">
            Need {service.shortTitle.toLowerCase()} support in Ethiopia?
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Talk to Che Construction PLC about scope, timeline, and location requirements for your next project.
          </p>
          <Link href="/contact" className="inline-flex bg-accent text-[#04080D] px-8 py-4 font-semibold rounded-sm">
            Contact the team
          </Link>
        </div>
      </section>
    </>
  )
}
