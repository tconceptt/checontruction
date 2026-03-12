export type Project = {
  slug: string
  title: string
  category: string
  city: string
  description: string
  longDescription: string
  image: string
  alt: string
  scope: string[]
  result: string
  relatedServiceSlug: string
  updatedAt: string
}

export const projects: Project[] = [
  {
    slug: "bole-district-office-tower",
    title: "Bole District Office Tower",
    category: "Commercial High-Rise",
    city: "Addis Ababa",
    description:
      "A 14-storey commercial office tower in the Bole business district delivering Grade A office space.",
    longDescription:
      "This featured commercial building reflects Che Construction PLC's focus on structured delivery for complex urban projects in Addis Ababa. The scheme combines vertical construction coordination, site logistics, and fit-out planning suited to dense commercial districts.",
    image: "/images/project-1.jpg",
    alt: "Bole District Office Tower construction project in Addis Ababa by Che Construction",
    scope: [
      "High-rise structural construction",
      "Commercial floor plate delivery",
      "Envelope, finishing, and site coordination",
    ],
    result:
      "The project demonstrates capability in commercial building delivery for Ethiopia's urban business market.",
    relatedServiceSlug: "building-construction",
    updatedAt: "2026-03-12",
  },
  {
    slug: "hawassa-industrial-park",
    title: "Hawassa Industrial Park",
    category: "Industrial Complex",
    city: "Hawassa",
    description:
      "Large-scale industrial park development supporting Ethiopia's manufacturing growth in the SNNPR region.",
    longDescription:
      "The Hawassa Industrial Park example reinforces the company's position in industrial and infrastructure-linked construction. It reflects large-format site delivery, coordination across multiple work fronts, and structured execution in a regional growth market.",
    image: "/images/project-2.jpg",
    alt: "Hawassa Industrial Park construction in Ethiopia by Che Construction PLC",
    scope: [
      "Industrial building construction",
      "Site infrastructure coordination",
      "Regional project planning and delivery",
    ],
    result:
      "The project supports the company's visibility for industrial construction and regional delivery capability in Ethiopia.",
    relatedServiceSlug: "building-construction",
    updatedAt: "2026-03-12",
  },
  {
    slug: "meskel-square-commercial-complex",
    title: "Meskel Square Commercial Complex",
    category: "Commercial",
    city: "Addis Ababa",
    description:
      "Mixed-use commercial complex near Meskel Square combining retail, office, and hospitality spaces.",
    longDescription:
      "This mixed-use project showcases city-center construction capability with multiple user requirements in one development. It strengthens the firm's relevance for commercial construction searches tied to Addis Ababa.",
    image: "/images/project-3.jpg",
    alt: "Meskel Square Commercial Complex under construction in Addis Ababa by Che Construction",
    scope: [
      "Mixed-use commercial build",
      "Retail and office delivery coordination",
      "Urban construction management",
    ],
    result:
      "The project adds depth to the company's commercial portfolio within Addis Ababa's core business districts.",
    relatedServiceSlug: "building-construction",
    updatedAt: "2026-03-12",
  },
  {
    slug: "cmc-residential-development",
    title: "CMC Residential Development",
    category: "Residential",
    city: "Addis Ababa",
    description:
      "Premium residential towers in the CMC area offering modern living for Addis Ababa's growing professional class.",
    longDescription:
      "The CMC Residential Development illustrates residential construction capability in one of Addis Ababa's major growth areas. It supports visibility for housing, apartment, and tower-related search intent.",
    image: "/images/project-4.jpg",
    alt: "CMC Residential Development project in Addis Ababa, Ethiopia by Che Construction PLC",
    scope: [
      "Residential tower construction",
      "Apartment block delivery",
      "Finishing and infrastructure coordination",
    ],
    result:
      "The project expands the company's relevance for residential construction searches in Addis Ababa.",
    relatedServiceSlug: "building-construction",
    updatedAt: "2026-03-12",
  },
  {
    slug: "bahir-dar-ring-road",
    title: "Bahir Dar Ring Road",
    category: "Road & Infrastructure",
    city: "Bahir Dar",
    description:
      "Major ring road construction connecting Bahir Dar's expanding districts with modern asphalt highway infrastructure.",
    longDescription:
      "The Bahir Dar Ring Road project supports the company's road and infrastructure positioning with a clear regional transport example. It reflects civil works delivery tied to connectivity and network expansion.",
    image: "/images/project-5.jpg",
    alt: "Bahir Dar Ring Road infrastructure construction project in Ethiopia by Che Construction",
    scope: [
      "Road alignment and pavement works",
      "Drainage and supporting civil systems",
      "Regional transport infrastructure delivery",
    ],
    result:
      "The project strengthens ranking potential for road construction and civil infrastructure terms in Ethiopia.",
    relatedServiceSlug: "road-infrastructure",
    updatedAt: "2026-03-12",
  },
  {
    slug: "dire-dawa-heritage-renovation",
    title: "Dire Dawa Heritage Renovation",
    category: "Renovation",
    city: "Dire Dawa",
    description:
      "Comprehensive renovation of a heritage commercial building, preserving architectural character while modernizing interiors.",
    longDescription:
      "This renovation project shows the company's ability to improve existing assets while respecting context and continued usability. It supports visibility for restoration, renovation, and building upgrade terms in Ethiopia.",
    image: "/images/project-6.jpg",
    alt: "Dire Dawa Heritage Renovation project in Ethiopia by Che Construction PLC",
    scope: [
      "Heritage-sensitive renovation planning",
      "Interior modernization and building upgrades",
      "Selective structural and finish renewal",
    ],
    result:
      "The project adds authority for renovation and remodeling searches centered on Dire Dawa and similar urban contexts.",
    relatedServiceSlug: "renovation-remodeling",
    updatedAt: "2026-03-12",
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
