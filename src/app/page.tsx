import type { Metadata } from 'next'
import type { WithContext, GeneralContractor } from 'schema-dts'
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import CompanyValues from "@/components/CompanyValues";

export const metadata: Metadata = {
  title: {
    absolute: 'Best Construction Company in Ethiopia | Che Construction PLC',
  },
  description: "Che Construction PLC — Ethiopia's leading general contractor. Building construction, road infrastructure, and renovation projects across Addis Ababa and Ethiopia.",
  alternates: { canonical: 'https://checonstruction.et' },
  openGraph: {
    title: 'Best Construction Company in Ethiopia | Che Construction PLC',
    description: "Ethiopia's trusted general contractor. Projects across Addis Ababa, Hawassa, Bahir Dar, and Dire Dawa.",
    url: 'https://checonstruction.et',
    images: [{ url: '/opengraph-image.jpg', width: 1200, height: 630, alt: 'Che Construction PLC — Building Ethiopia' }],
  },
}

const jsonLd: WithContext<GeneralContractor> = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'Che Construction PLC',
  url: 'https://checonstruction.et',
  telephone: '+251911084409',
  email: 'info@checonstruction.et',
  logo: 'https://checonstruction.et/Logos/t-che-2-as.png',
  description: 'Best construction company in Ethiopia offering building construction, road infrastructure, and renovation services.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Brix Building, 1st Floor',
    addressLocality: 'Lemi Kura, Addis Ababa',
    addressRegion: 'Addis Ababa',
    addressCountry: 'ET',
  },
  areaServed: [
    { '@type': 'City', name: 'Addis Ababa' },
    { '@type': 'City', name: 'Hawassa' },
    { '@type': 'City', name: 'Bahir Dar' },
    { '@type': 'City', name: 'Dire Dawa' },
    { '@type': 'Country', name: 'Ethiopia' },
  ],
  knowsAbout: ['Building Construction', 'Road Construction', 'Infrastructure Development', 'Renovation'],
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
    </>
  );
}
