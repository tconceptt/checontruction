import type { Metadata } from 'next'
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import CompanyValues from "@/components/CompanyValues";
import FAQSection from '@/components/FAQSection';
import LocationsSection from '@/components/LocationsSection';
import { siteConfig } from '@/lib/site-data';

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.defaultTitle,
  },
  description:
    "Che Construction PLC is a construction company in Ethiopia delivering building construction, road infrastructure, and renovation projects across Addis Ababa and key regional cities.",
  alternates: { canonical: siteConfig.siteUrl },
  openGraph: {
    title: siteConfig.defaultTitle,
    description:
      "Building construction, road infrastructure, and renovation services across Addis Ababa, Hawassa, Bahir Dar, and Dire Dawa.",
    url: siteConfig.siteUrl,
    images: [{ url: siteConfig.ogImagePath, width: 1200, height: 630, alt: 'Che Construction PLC — Building Ethiopia' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: siteConfig.defaultTitle,
      url: siteConfig.siteUrl,
      description:
        "Che Construction PLC is a construction company in Ethiopia delivering building construction, road infrastructure, and renovation projects across Addis Ababa and key regional cities.",
    },
    {
      '@type': 'FAQPage',
      mainEntity: siteConfig.faq.map((item) => ({
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
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteConfig.siteUrl,
        },
      ],
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <Hero />
      <Services />
      <FeaturedProjects />
      <CompanyValues />
      <LocationsSection />
      <FAQSection
        title="Questions About Choosing a Construction Company in Ethiopia"
        intro="These answers reinforce the core entity details, service coverage, and location signals that both search engines and AI systems look for when evaluating local authority."
        items={siteConfig.faq}
      />
    </>
  );
}
