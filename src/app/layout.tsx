import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { absoluteUrl, siteConfig } from "@/lib/site-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: 'Che Construction PLC | Construction Company in Ethiopia',
    template: '%s | Che Construction PLC',
  },
  description: siteConfig.defaultDescription,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_ET',
    siteName: 'Che Construction PLC',
    url: siteConfig.siteUrl,
    images: [{ url: siteConfig.ogImagePath, width: 1200, height: 630, alt: siteConfig.defaultTitle }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      logo: absoluteUrl(siteConfig.encodedLogoPath),
      email: siteConfig.email,
      telephone: siteConfig.phoneDisplay,
    },
    {
      '@type': 'ConstructionCompany',
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      image: absoluteUrl(siteConfig.ogImagePath),
      logo: absoluteUrl(siteConfig.encodedLogoPath),
      telephone: siteConfig.phoneDisplay,
      email: siteConfig.email,
      address: {
        '@type': 'PostalAddress',
        ...siteConfig.address,
      },
      areaServed: siteConfig.serviceAreas.map((location) => ({
        '@type': 'City',
        name: location.name,
      })),
    },
    {
      '@type': 'WebSite',
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-surface min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
