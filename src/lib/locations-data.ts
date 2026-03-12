export type Location = {
  slug: string
  name: string
  headline: string
  intro: string
  summary: string
  primaryServices: string[]
  keywords: string[]
  updatedAt: string
  faq: {
    question: string
    answer: string
  }[]
}

export const locations: Location[] = [
  {
    slug: "addis-ababa",
    name: "Addis Ababa",
    headline: "Construction Company in Addis Ababa",
    intro:
      "Addis Ababa is the company's base and one of its strongest markets for commercial buildings, residential developments, and renovation projects.",
    summary:
      "Che Construction PLC supports clients in Addis Ababa with building construction, renovation, and selected infrastructure delivery tailored to dense urban sites and schedule-sensitive projects.",
    primaryServices: ["building-construction", "renovation-remodeling", "road-infrastructure"],
    keywords: [
      "construction company in Addis Ababa",
      "building construction Addis Ababa",
      "renovation company Addis Ababa",
    ],
    updatedAt: "2026-03-12",
    faq: [
      {
        question: "Does Che Construction operate from Addis Ababa?",
        answer:
          "Yes. The site lists its headquarters at Brix Building, Lemi Kura, 1st Floor, Addis Ababa, Ethiopia.",
      },
      {
        question: "What project types does Che Construction handle in Addis Ababa?",
        answer:
          "The strongest Addis Ababa focus is on building construction, commercial development, residential delivery, and renovation work.",
      },
    ],
  },
  {
    slug: "hawassa",
    name: "Hawassa",
    headline: "Construction Projects in Hawassa",
    intro:
      "Hawassa features prominently in the company's regional delivery story, especially for industrial and infrastructure-linked work.",
    summary:
      "Che Construction PLC supports Hawassa projects that need reliable site execution, regional coordination, and practical construction management across industrial and civil scopes.",
    primaryServices: ["road-infrastructure", "building-construction"],
    keywords: [
      "construction company Hawassa",
      "industrial construction Hawassa",
      "infrastructure contractor Hawassa",
    ],
    updatedAt: "2026-03-12",
    faq: [
      {
        question: "What kind of work does Che Construction highlight in Hawassa?",
        answer:
          "The site uses Hawassa Industrial Park and infrastructure references to position the company for industrial and civil projects in the city.",
      },
      {
        question: "Is Hawassa included in the company's service area?",
        answer:
          "Yes. Hawassa is one of the core cities listed throughout the website and structured data.",
      },
    ],
  },
  {
    slug: "bahir-dar",
    name: "Bahir Dar",
    headline: "Construction and Infrastructure in Bahir Dar",
    intro:
      "Bahir Dar is positioned as a core regional market for road and infrastructure work delivered by Che Construction PLC.",
    summary:
      "The company highlights Bahir Dar for ring road and civil works, making this location page relevant for infrastructure-focused search intent in Ethiopia.",
    primaryServices: ["road-infrastructure", "building-construction"],
    keywords: [
      "construction company Bahir Dar",
      "road construction Bahir Dar",
      "infrastructure contractor Bahir Dar",
    ],
    updatedAt: "2026-03-12",
    faq: [
      {
        question: "What is Che Construction's Bahir Dar focus?",
        answer:
          "The strongest Bahir Dar positioning on the site is in road and infrastructure delivery, supported by the Bahir Dar Ring Road project example.",
      },
      {
        question: "Can Che Construction support regional civil works in Bahir Dar?",
        answer:
          "Yes. The site presents Bahir Dar as one of the regional markets where civil and transport-related projects are delivered.",
      },
    ],
  },
  {
    slug: "dire-dawa",
    name: "Dire Dawa",
    headline: "Renovation and Construction Support in Dire Dawa",
    intro:
      "Dire Dawa is a core market on the site for renovation, remodeling, and building upgrade work.",
    summary:
      "Che Construction PLC positions Dire Dawa as a strong fit for renovation-led projects where existing buildings need modernization, reinforcement, or full interior renewal.",
    primaryServices: ["renovation-remodeling", "building-construction"],
    keywords: [
      "construction company Dire Dawa",
      "renovation company Dire Dawa",
      "building upgrade Dire Dawa",
    ],
    updatedAt: "2026-03-12",
    faq: [
      {
        question: "Why is Dire Dawa important on this site?",
        answer:
          "Dire Dawa is repeatedly referenced as a service area and project location, especially for renovation and remodeling work.",
      },
      {
        question: "What Dire Dawa project example is featured?",
        answer:
          "The site includes the Dire Dawa Heritage Renovation project as a representative example of its renovation capability.",
      },
    ],
  },
]

export function getLocationBySlug(slug: string) {
  return locations.find((location) => location.slug === slug)
}
