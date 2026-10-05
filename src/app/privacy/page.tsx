import type { Metadata } from 'next'
import LegalPage, { type LegalSection } from '@/components/LegalPage'
import { absoluteUrl, siteConfig } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${siteConfig.name} collects, uses, and protects personal information.`,
  alternates: { canonical: absoluteUrl('/privacy') },
}

const sections: LegalSection[] = [
  {
    heading: 'Who we are',
    paragraphs: [
      `${siteConfig.name} ("we", "us", "our") is a construction company headquartered at ${siteConfig.addressLabel.join(', ')}. This policy explains how we handle personal information collected through ${siteConfig.siteUrl} and through the digital tools and integrations we operate, including our use of TikTok's developer APIs.`,
    ],
  },
  {
    heading: 'Information we collect',
    bullets: [
      'Information you give us: your name, email address, phone number, company, and any project details you share when you contact us by email, phone, or through the website.',
      'Usage data: anonymous, aggregated analytics about how visitors use the website (such as pages viewed, referring site, device type, and country), collected through Vercel Analytics without cookies.',
      'TikTok account data: if a TikTok account holder authorizes one of our applications through TikTok Login Kit, we receive the data covered by the permissions they approve — basic profile information (such as open ID, display name, and avatar) and a list of their public videos with related metadata and statistics (such as title, publish date, duration, and view, like, comment, and share counts).',
    ],
  },
  {
    heading: 'How we use information',
    bullets: [
      'To respond to enquiries, prepare quotations, and deliver and manage construction projects.',
      'To operate, maintain, secure, and improve the website.',
      'To produce internal performance reports on our own TikTok content (for example, average views per video). TikTok data is used only for this purpose.',
      'To meet legal, regulatory, accounting, and contractual obligations.',
    ],
  },
  {
    heading: 'How we share information',
    paragraphs: [
      'We do not sell or rent personal information. We share it only with service providers that help us run our business (such as website hosting, email, and analytics providers) under appropriate confidentiality obligations, with professional advisers, or when required by law or to protect our rights.',
      'Data received from TikTok is not shared with third parties, not used for advertising, and not combined with other data to identify individuals.',
    ],
  },
  {
    heading: 'Data retention',
    paragraphs: [
      'We keep enquiry and project information for as long as needed for the purposes described above and to meet legal and accounting requirements. TikTok access tokens and video statistics are stored on our own systems only while the integration is in use, and are deleted when access is revoked or no longer needed.',
    ],
  },
  {
    heading: 'Your choices and rights',
    bullets: [
      'You may ask us to access, correct, or delete the personal information we hold about you by contacting us using the details below.',
      'You can revoke our access to your TikTok account at any time from TikTok: Settings and privacy → Security & permissions → Apps and services. After revocation we can no longer retrieve data from your account, and you may ask us to delete data already collected.',
    ],
  },
  {
    heading: 'Security',
    paragraphs: [
      'We use reasonable technical and organisational measures to protect personal information, including encrypted connections (HTTPS) and restricted access to credentials. No method of transmission or storage is completely secure, but we work to protect the information entrusted to us.',
    ],
  },
  {
    heading: "Children's privacy",
    paragraphs: [
      'Our website and services are intended for businesses and adults. We do not knowingly collect personal information from children under 18.',
    ],
  },
  {
    heading: 'Changes to this policy',
    paragraphs: [
      'We may update this policy from time to time. The effective date at the top of this page shows when it was last revised.',
    ],
  },
  {
    heading: 'Contact us',
    paragraphs: [
      `Questions or requests about this policy can be sent to ${siteConfig.email} or ${siteConfig.phoneDisplay}, or by post to ${siteConfig.name}, ${siteConfig.addressLabel.join(', ')}.`,
    ],
  },
]

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      effectiveDate="5 October 2026"
      intro={`This Privacy Policy describes how ${siteConfig.name} collects, uses, and protects personal information when you visit our website, contact us, or authorize one of our applications.`}
      sections={sections}
    />
  )
}
