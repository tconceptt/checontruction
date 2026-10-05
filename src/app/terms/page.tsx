import type { Metadata } from 'next'
import LegalPage, { type LegalSection } from '@/components/LegalPage'
import { absoluteUrl, siteConfig } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms governing use of the ${siteConfig.name} website and applications.`,
  alternates: { canonical: absoluteUrl('/terms') },
}

const sections: LegalSection[] = [
  {
    heading: 'Acceptance of these terms',
    paragraphs: [
      `These Terms of Service govern your use of ${siteConfig.siteUrl} and any application or integration operated by ${siteConfig.name} ("we", "us", "our"), including applications that connect to TikTok. By using them, you agree to these terms. If you do not agree, please do not use them.`,
    ],
  },
  {
    heading: 'Website information',
    paragraphs: [
      'Content on this website is provided for general information about our company and services. It does not constitute an offer, quotation, or contract. Project scope, pricing, schedules, and warranties are agreed only in a separate written contract signed by both parties.',
    ],
  },
  {
    heading: 'Acceptable use',
    bullets: [
      'Do not use the website or our applications for any unlawful purpose or in breach of these terms.',
      'Do not attempt to gain unauthorized access to, interfere with, or disrupt our systems or data.',
      'Do not copy, scrape, or republish substantial parts of the website without our written permission.',
    ],
  },
  {
    heading: 'TikTok integration',
    paragraphs: [
      "Some of our applications use TikTok Login Kit and TikTok's Display API to retrieve basic profile information and public video statistics from TikTok accounts that have authorized them, for internal analytics. Use of TikTok remains subject to TikTok's own Terms of Service and policies. You can revoke access at any time from your TikTok account settings. Our handling of this data is described in our Privacy Policy at " +
        absoluteUrl('/privacy') +
        '.',
    ],
  },
  {
    heading: 'Intellectual property',
    paragraphs: [
      `All content on this website, including text, photographs, project images, logos, and design, is owned by or licensed to ${siteConfig.name} and protected by applicable intellectual property laws. You may view and share links to pages for personal or internal business use, but you may not reuse our content without permission.`,
    ],
  },
  {
    heading: 'Third-party links and services',
    paragraphs: [
      'The website and our applications may link to or rely on third-party services. We are not responsible for the content, policies, or practices of those third parties.',
    ],
  },
  {
    heading: 'Disclaimer',
    paragraphs: [
      'The website and our applications are provided "as is" and "as available". We make reasonable efforts to keep information accurate and up to date, but we do not guarantee that it is complete, current, or error-free, or that the services will be uninterrupted.',
    ],
  },
  {
    heading: 'Limitation of liability',
    paragraphs: [
      'To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential loss arising from your use of, or inability to use, the website or our applications. Nothing in these terms limits liability that cannot be limited under applicable law.',
    ],
  },
  {
    heading: 'Governing law',
    paragraphs: [
      'These terms are governed by the laws of the Federal Democratic Republic of Ethiopia. Any dispute will be subject to the jurisdiction of the competent courts in Addis Ababa.',
    ],
  },
  {
    heading: 'Changes to these terms',
    paragraphs: [
      'We may update these terms from time to time. The effective date at the top of this page shows when they were last revised. Continued use after changes means you accept the updated terms.',
    ],
  },
  {
    heading: 'Contact us',
    paragraphs: [
      `Questions about these terms can be sent to ${siteConfig.email} or ${siteConfig.phoneDisplay}.`,
    ],
  },
]

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      effectiveDate="5 October 2026"
      intro={`Please read these terms carefully before using the ${siteConfig.name} website or any of our applications.`}
      sections={sections}
    />
  )
}
