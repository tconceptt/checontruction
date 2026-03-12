import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getProjectBySlug, projects } from '@/lib/projects-data'
import { getServiceBySlug } from '@/lib/services-data'
import { absoluteUrl, siteConfig } from '@/lib/site-data'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {}
  }

  const title = `${project.title} in ${project.city} | Che Construction PLC`

  return {
    title: {
      absolute: title,
    },
    description: project.longDescription,
    alternates: { canonical: absoluteUrl(`/projects/${project.slug}`) },
    openGraph: {
      title,
      description: project.longDescription,
      url: absoluteUrl(`/projects/${project.slug}`),
      images: [{ url: project.image, alt: project.alt }],
    },
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const relatedService = getServiceBySlug(project.relatedServiceSlug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: `${project.title} in ${project.city}`,
        url: absoluteUrl(`/projects/${project.slug}`),
        description: project.longDescription,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Projects', item: absoluteUrl('/projects') },
          { '@type': 'ListItem', position: 3, name: project.title, item: absoluteUrl(`/projects/${project.slug}`) },
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
              { href: '/projects', label: 'Projects' },
              { label: project.title },
            ]}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Project Detail</p>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-5">
                {project.title}
              </h1>
              <p className="text-sm uppercase tracking-[0.15em] text-gray-500 mb-5">
                {project.category} • {project.city}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-5">{project.description}</p>
              <p className="text-gray-600 leading-relaxed">{project.longDescription}</p>
            </div>

            <div className="relative min-h-[360px] rounded-sm overflow-hidden shadow-lg">
              <Image src={project.image} alt={project.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="rounded-sm border border-gray-200 bg-white p-8">
            <p className="text-sm uppercase tracking-[0.15em] text-gray-500 mb-6">Project Scope</p>
            <ul className="space-y-4 text-gray-700 leading-relaxed">
              {project.scope.map((item) => (
                <li key={item} className="border-l-2 border-primary pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-sm border border-gray-200 bg-white p-8">
            <p className="text-sm uppercase tracking-[0.15em] text-gray-500 mb-6">Search Relevance</p>
            <p className="text-gray-700 leading-relaxed mb-5">{project.result}</p>
            {relatedService ? (
              <Link href={`/services/${relatedService.slug}`} className="text-primary font-semibold hover:text-primary-dark transition-colors">
                Related service: {relatedService.shortTitle}
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-5">
            Need a similar project delivered in Ethiopia?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Explore the related service page or contact Che Construction PLC to discuss your site, scope, and
            project location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {relatedService ? (
              <Link href={`/services/${relatedService.slug}`} className="inline-flex border border-primary text-primary px-8 py-4 font-semibold rounded-sm">
                View related service
              </Link>
            ) : null}
            <Link href="/contact" className="inline-flex bg-primary text-white px-8 py-4 font-semibold rounded-sm">
              Contact the team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
