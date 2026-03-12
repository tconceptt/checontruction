import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQSection from '@/components/FAQSection'
import { absoluteUrl, formatPhoneHref, siteConfig } from '@/lib/site-data'

export const metadata: Metadata = {
  title: {
    absolute: 'Contact Che Construction PLC | Request a Quote in Ethiopia',
  },
  description:
    'Contact Che Construction PLC in Addis Ababa to discuss building construction, infrastructure, or renovation projects anywhere in Ethiopia.',
  alternates: { canonical: absoluteUrl('/contact') },
  openGraph: {
    title: 'Contact Che Construction PLC | Request a Quote in Ethiopia',
    description:
      'Reach Che Construction PLC by phone, email, or office visit in Addis Ababa for projects across Ethiopia.',
    url: absoluteUrl('/contact'),
    images: [{ url: siteConfig.ogImagePath, width: 1200, height: 630, alt: 'Contact Che Construction PLC' }],
  },
}

const faq = [
  {
    question: 'How do I request a quote from Che Construction PLC?',
    answer:
      'Use the phone number, email address, or contact details on this page and share the project type, site location, timeline, and any available scope documents.',
  },
  {
    question: 'Where is Che Construction PLC located?',
    answer:
      'The company headquarters shown on the site is Brix Building, Lemi Kura, 1st Floor, Addis Ababa, Ethiopia.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      name: 'Contact Che Construction PLC',
      url: absoluteUrl('/contact'),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: absoluteUrl('/contact') },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
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

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <section className="pt-28 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Contact' }]} />
          <div className="max-w-4xl mt-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Contact</p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-6">
              Contact Che Construction PLC
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              This page gives search engines and clients one reliable source for the company&apos;s phone, email,
              office address, and quote request path. Keeping these details consistent across the site helps
              local SEO and AI citation quality.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-sm border border-gray-200 bg-white p-8">
            <MapPin className="w-6 h-6 text-primary mb-5" />
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Headquarters</h2>
            <p className="text-gray-600 leading-relaxed">
              {siteConfig.addressLabel[0]}
              <br />
              {siteConfig.addressLabel[1]}
            </p>
          </div>

          <div className="rounded-sm border border-gray-200 bg-white p-8">
            <Phone className="w-6 h-6 text-primary mb-5" />
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Phone</h2>
            <a
              href={formatPhoneHref(siteConfig.phoneHref)}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>

          <div className="rounded-sm border border-gray-200 bg-white p-8">
            <Mail className="w-6 h-6 text-primary mb-5" />
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Email</h2>
            <a href={`mailto:${siteConfig.email}`} className="text-gray-700 hover:text-primary transition-colors">
              {siteConfig.email}
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">Request Scope</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-5">
              Helpful details to send with your inquiry
            </h2>
            <ul className="space-y-4 text-gray-600 leading-relaxed">
              <li>Project type: building construction, road infrastructure, or renovation.</li>
              <li>Project location: Addis Ababa, Hawassa, Bahir Dar, Dire Dawa, or another Ethiopian site.</li>
              <li>Approximate scope, timeline, and procurement stage.</li>
              <li>Any drawings, BOQs, or early planning documents available for review.</li>
            </ul>
          </div>

          <div className="rounded-sm border border-gray-200 bg-surface p-8">
            <p className="text-sm uppercase tracking-[0.15em] text-gray-500 mb-6">Explore Before Contacting</p>
            <div className="space-y-4">
              <Link href="/services" className="block text-lg font-medium text-gray-900 hover:text-primary transition-colors">
                View construction services
              </Link>
              <Link href="/projects" className="block text-lg font-medium text-gray-900 hover:text-primary transition-colors">
                Review project examples
              </Link>
              <Link href="/locations" className="block text-lg font-medium text-gray-900 hover:text-primary transition-colors">
                See areas served across Ethiopia
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title="Contact Questions"
        intro="These FAQ entries reinforce the core contact details and the intended path for inquiries."
        items={faq}
      />
    </>
  )
}
