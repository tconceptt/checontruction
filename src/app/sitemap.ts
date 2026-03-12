import type { MetadataRoute } from 'next'
import { locations } from '@/lib/locations-data'
import { projects } from '@/lib/projects-data'
import { services } from '@/lib/services-data'
import { siteConfig } from '@/lib/site-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteConfig.siteUrl,
      lastModified: siteConfig.updatedAt,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteConfig.siteUrl}/about`,
      lastModified: siteConfig.updatedAt,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteConfig.siteUrl}/contact`,
      lastModified: siteConfig.updatedAt,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteConfig.siteUrl}/services`,
      lastModified: siteConfig.updatedAt,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteConfig.siteUrl}/projects`,
      lastModified: siteConfig.updatedAt,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteConfig.siteUrl}/locations`,
      lastModified: siteConfig.updatedAt,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.siteUrl}/services/${service.slug}`,
    lastModified: service.updatedAt,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteConfig.siteUrl}/projects/${project.slug}`,
    lastModified: project.updatedAt,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const locationPages: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${siteConfig.siteUrl}/locations/${location.slug}`,
    lastModified: location.updatedAt,
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  return [...staticPages, ...servicePages, ...projectPages, ...locationPages]
}
