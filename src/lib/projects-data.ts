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
      "The project reflects the company's capacity for industrial construction and coordinated delivery in a major regional growth market.",
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
      "This mixed-use project showcases city-center construction capability with multiple user requirements in one development. It highlights the firm's ability to deliver commercial work in Addis Ababa's urban core.",
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
      "The CMC Residential Development illustrates residential construction capability in one of Addis Ababa's major growth areas. It reflects the company's ability to deliver housing and tower projects in fast-developing neighborhoods.",
    image: "/images/project-4.jpg",
    alt: "CMC Residential Development project in Addis Ababa, Ethiopia by Che Construction PLC",
    scope: [
      "Residential tower construction",
      "Apartment block delivery",
      "Finishing and infrastructure coordination",
    ],
    result:
      "The project adds depth to the company's residential construction portfolio in Addis Ababa.",
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
      "The project demonstrates experience in road construction and regional civil infrastructure delivery.",
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
      "This renovation project shows the company's ability to improve existing assets while respecting context and continued usability. It reflects a practical approach to modernization, restoration, and building renewal.",
    image: "/images/project-6.jpg",
    alt: "Dire Dawa Heritage Renovation project in Ethiopia by Che Construction PLC",
    scope: [
      "Heritage-sensitive renovation planning",
      "Interior modernization and building upgrades",
      "Selective structural and finish renewal",
    ],
    result:
      "The project demonstrates renovation capability in Dire Dawa and similar urban settings where existing buildings need careful renewal.",
    relatedServiceSlug: "renovation-remodeling",
    updatedAt: "2026-03-12",
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
