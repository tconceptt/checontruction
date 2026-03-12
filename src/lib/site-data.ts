export const siteConfig = {
  name: "Che Construction PLC",
  shortName: "Che Construction",
  siteUrl: "https://checonstruction.et",
  defaultTitle: "Best Construction Company in Ethiopia | Che Construction PLC",
  defaultDescription:
    "Che Construction PLC is a trusted construction company in Ethiopia delivering building construction, road infrastructure, and renovation projects across Addis Ababa, Hawassa, Bahir Dar, and Dire Dawa.",
  primaryKeyword: "best construction company in Ethiopia",
  phoneDisplay: "+251 911 084 409",
  phoneHref: "+251911084409",
  email: "info@checonstruction.et",
  logoPath: "/Logos/t-che 2 as.png",
  encodedLogoPath: "/Logos/t-che%202%20as.png",
  ogImagePath: "/opengraph-image.jpg",
  updatedAt: "2026-03-12",
  address: {
    streetAddress: "Brix Building, Lemi Kura, 1st Floor",
    addressLocality: "Addis Ababa",
    addressRegion: "Addis Ababa",
    addressCountry: "ET",
  },
  addressLabel: ["Brix Building, Lemi Kura, 1st Floor", "Addis Ababa, Ethiopia"],
  serviceAreas: [
    {
      name: "Addis Ababa",
      slug: "addis-ababa",
      summary:
        "Commercial building construction, residential development, and renovation services in Addis Ababa.",
    },
    {
      name: "Hawassa",
      slug: "hawassa",
      summary:
        "Industrial, civil, and infrastructure project delivery for Hawassa and nearby growth corridors.",
    },
    {
      name: "Bahir Dar",
      slug: "bahir-dar",
      summary:
        "Road works, public infrastructure, and construction delivery across Bahir Dar and the Amhara region.",
    },
    {
      name: "Dire Dawa",
      slug: "dire-dawa",
      summary:
        "Renovation, commercial upgrades, and civil construction support in Dire Dawa.",
    },
  ],
  valuePoints: [
    "Integrated delivery across buildings, roads, and renovation work.",
    "Experienced project teams based in Addis Ababa and deployed across Ethiopia.",
    "Clear communication, schedule control, and disciplined quality management.",
    "Practical construction solutions tailored to Ethiopian project conditions.",
  ],
  faq: [
    {
      question: "What makes Che Construction PLC a strong choice in Ethiopia?",
      answer:
        "Che Construction PLC combines building construction, road infrastructure, and renovation capability under one contractor. The company highlights work across Addis Ababa, Hawassa, Bahir Dar, and Dire Dawa, giving clients one delivery partner for multiple project types.",
    },
    {
      question: "What construction services does Che Construction PLC offer?",
      answer:
        "The company focuses on building construction, road and infrastructure construction, and renovation and remodeling services for commercial, civil, industrial, and residential projects in Ethiopia.",
    },
    {
      question: "Which cities does Che Construction PLC serve?",
      answer:
        "Che Construction PLC presents Addis Ababa, Hawassa, Bahir Dar, and Dire Dawa as core service areas while supporting projects across Ethiopia.",
    },
    {
      question: "How can a client request a construction quote?",
      answer:
        "Clients can contact Che Construction PLC by phone at +251 911 084 409, by email at info@checonstruction.et, or through the contact page to discuss scope, location, and timelines.",
    },
  ],
} as const

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.siteUrl).toString()
}

export function formatPhoneHref(phoneHref: string) {
  return `tel:${phoneHref}`
}
