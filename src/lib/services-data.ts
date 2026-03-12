export type ServiceFaq = {
  question: string
  answer: string
}

export type Service = {
  slug: string
  title: string
  shortTitle: string
  summary: string
  heroDescription: string
  overview: string
  metaTitle: string
  metaDescription: string
  image: string
  imageAlt: string
  primaryCityLabel: string
  cities: string[]
  deliverables: string[]
  differentiators: string[]
  keywords: string[]
  updatedAt: string
  faq: ServiceFaq[]
}

export const services: Service[] = [
  {
    slug: "building-construction",
    title: "Building Construction in Ethiopia",
    shortTitle: "Building Construction",
    summary:
      "Commercial buildings, office towers, residential developments, and institutional facilities delivered across Addis Ababa and Ethiopia.",
    heroDescription:
      "Che Construction PLC delivers building construction projects in Ethiopia for clients who need disciplined planning, strong site execution, and durable finished assets.",
    overview:
      "Our building construction teams manage structural works, MEP coordination, envelope delivery, interior fit-out, and final handover for commercial, residential, and institutional projects. We focus on practical execution that fits Ethiopian site conditions, procurement timelines, and client reporting requirements.",
    metaTitle: "Building Construction Company in Ethiopia | Che Construction PLC",
    metaDescription:
      "Che Construction PLC delivers building construction in Ethiopia, including commercial, residential, and institutional projects across Addis Ababa and major cities.",
    image: "/images/project-1.jpg",
    imageAlt: "Commercial building construction in Addis Ababa, Ethiopia",
    primaryCityLabel: "Addis Ababa",
    cities: ["Addis Ababa", "Hawassa", "Bahir Dar"],
    deliverables: [
      "Commercial office buildings and mixed-use developments",
      "Residential towers and housing blocks",
      "Institutional, hospitality, and industrial buildings",
      "Structural, finishing, and MEP coordination",
    ],
    differentiators: [
      "Clear project sequencing from groundworks to handover",
      "Coordination across structural, architectural, and MEP scopes",
      "Execution built around schedule discipline and site safety",
    ],
    keywords: [
      "building construction company in Ethiopia",
      "commercial construction Addis Ababa",
      "general contractor Ethiopia",
    ],
    updatedAt: "2026-03-12",
    faq: [
      {
        question: "Does Che Construction handle commercial and residential buildings?",
        answer:
          "Yes. The building construction scope shown on the site covers commercial buildings, office towers, residential developments, and institutional facilities.",
      },
      {
        question: "Where does Che Construction deliver building projects?",
        answer:
          "The company positions Addis Ababa as a core market and also references project delivery in Hawassa and Bahir Dar, alongside broader work across Ethiopia.",
      },
    ],
  },
  {
    slug: "road-infrastructure",
    title: "Road and Infrastructure Construction in Ethiopia",
    shortTitle: "Road & Infrastructure",
    summary:
      "Road networks, bridges, drainage systems, and civil infrastructure delivered for urban and regional projects in Ethiopia.",
    heroDescription:
      "Che Construction PLC builds road and infrastructure projects that improve access, mobility, and long-term project performance across Ethiopia.",
    overview:
      "Our infrastructure teams support road construction, drainage, pavement works, structural elements, and supporting civil systems. We focus on reliable execution, constructability, and quality control from earthworks through surfacing and handover.",
    metaTitle: "Road Construction Company in Ethiopia | Che Construction PLC",
    metaDescription:
      "Che Construction PLC delivers road and infrastructure construction in Ethiopia, including civil works, drainage, pavement, and regional connectivity projects.",
    image: "/images/project-5.jpg",
    imageAlt: "Road and infrastructure construction project in Bahir Dar, Ethiopia",
    primaryCityLabel: "Hawassa, Bahir Dar",
    cities: ["Hawassa", "Bahir Dar", "Addis Ababa"],
    deliverables: [
      "Urban and regional road construction",
      "Drainage, culverts, and supporting civil works",
      "Bridges and structural infrastructure elements",
      "Pavement, access roads, and connectivity upgrades",
    ],
    differentiators: [
      "Civil execution tailored to high-mobility public works",
      "Quality control across earthworks, drainage, and surfacing",
      "Practical delivery support for regional project conditions",
    ],
    keywords: [
      "road construction company Ethiopia",
      "infrastructure contractor Ethiopia",
      "civil construction Ethiopia",
    ],
    updatedAt: "2026-03-12",
    faq: [
      {
        question: "What infrastructure works does Che Construction cover?",
        answer:
          "The site highlights road networks, bridges, culverts, drainage, and broader civil infrastructure delivered in cities such as Hawassa and Bahir Dar.",
      },
      {
        question: "Is Che Construction suitable for public and private infrastructure jobs?",
        answer:
          "The positioning and project examples indicate capability for both public-facing infrastructure and private development support works where reliable civil execution is needed.",
      },
    ],
  },
  {
    slug: "renovation-remodeling",
    title: "Renovation and Remodeling in Ethiopia",
    shortTitle: "Renovation & Remodeling",
    summary:
      "Building upgrades, modernization, fit-outs, and structural renewal projects across Addis Ababa, Dire Dawa, and other Ethiopian markets.",
    heroDescription:
      "Che Construction PLC helps owners improve, modernize, and extend the value of existing buildings through renovation and remodeling services in Ethiopia.",
    overview:
      "Our renovation teams assess existing conditions, phase work to reduce disruption, and deliver interior fit-outs, facade upgrades, structural strengthening, and MEP modernization. We focus on making existing assets safer, more efficient, and better aligned to current operational needs.",
    metaTitle: "Renovation Company in Ethiopia | Che Construction PLC",
    metaDescription:
      "Che Construction PLC provides renovation and remodeling services in Ethiopia, including structural upgrades, facade improvements, fit-outs, and modernization.",
    image: "/images/company-values.jpg",
    imageAlt: "Building renovation and remodeling in Addis Ababa, Ethiopia",
    primaryCityLabel: "Addis Ababa, Dire Dawa",
    cities: ["Addis Ababa", "Dire Dawa"],
    deliverables: [
      "Interior remodeling and functional upgrades",
      "Facade improvements and envelope refreshes",
      "Structural reinforcement and selective rebuilding",
      "MEP modernization and occupied-site delivery planning",
    ],
    differentiators: [
      "Renovation planning that respects active sites and existing operations",
      "Balanced structural and aesthetic upgrade strategy",
      "Execution aligned with current Ethiopian building standards",
    ],
    keywords: [
      "renovation company Addis Ababa",
      "building remodeling Ethiopia",
      "construction renovation Ethiopia",
    ],
    updatedAt: "2026-03-12",
    faq: [
      {
        question: "Can Che Construction renovate occupied buildings?",
        answer:
          "Yes. The site positions the company to work inside existing and constrained urban buildings while maintaining safety and quality controls.",
      },
      {
        question: "Where does the company focus its renovation work?",
        answer:
          "The core renovation focus on the site is Addis Ababa and Dire Dawa, with support for broader Ethiopian project needs.",
      },
    ],
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}
