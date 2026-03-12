import type { Metadata } from 'next'
import type { WithContext, ItemList } from 'schema-dts'
import ProjectsPageContent from '@/components/ProjectsPageContent'

export const metadata: Metadata = {
  title: {
    absolute: 'Construction Projects in Ethiopia | Che Construction PLC',
  },
  description:
    'Explore Che Construction PLC\'s completed projects across Ethiopia — commercial high-rises, industrial complexes, residential towers, road infrastructure, and renovation works in Addis Ababa, Hawassa, Bahir Dar, and Dire Dawa.',
  alternates: { canonical: 'https://checonstruction.et/projects' },
  openGraph: {
    title: 'Construction Projects in Ethiopia | Che Construction PLC',
    description:
      'Commercial, industrial, residential, road, and renovation projects delivered across Addis Ababa and Ethiopia by Che Construction PLC.',
    url: 'https://checonstruction.et/projects',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Che Construction PLC — Projects Across Ethiopia',
      },
    ],
  },
}

const projectsJsonLd: WithContext<ItemList> = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Construction Projects by Che Construction PLC in Ethiopia',
  description:
    'Building, road, and renovation projects completed across Addis Ababa and Ethiopia.',
  numberOfItems: 6,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Bole District Office Tower — Addis Ababa',
      url: 'https://checonstruction.et/projects',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Hawassa Industrial Park — Hawassa',
      url: 'https://checonstruction.et/projects',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Meskel Square Commercial Complex — Addis Ababa',
      url: 'https://checonstruction.et/projects',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'CMC Residential Development — Addis Ababa',
      url: 'https://checonstruction.et/projects',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Bahir Dar Ring Road — Bahir Dar',
      url: 'https://checonstruction.et/projects',
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'Dire Dawa Heritage Renovation — Dire Dawa',
      url: 'https://checonstruction.et/projects',
    },
  ],
}

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectsJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <ProjectsPageContent />
    </>
  )
}
