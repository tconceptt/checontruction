# Requirements: Che Construction PLC Website

**Defined:** 2026-03-11
**Core Value:** Rank #1 for Ethiopian construction-related search queries while presenting Che Construction as credible and professional

## v1 Requirements

### SEO Infrastructure

- [x] **SEO-01**: Site has `metadataBase` configured in root layout with production domain
- [x] **SEO-02**: Each page exports unique `generateMetadata` with targeted title, description, and keywords
- [x] **SEO-03**: Homepage has JSON-LD structured data using `GeneralContractor` schema with `areaServed` covering major Ethiopian cities
- [x] **SEO-04**: Services page has JSON-LD `Service` schema for each service offered
- [x] **SEO-05**: Projects page has JSON-LD `ItemList` schema for project showcases
- [x] **SEO-06**: Site serves `sitemap.xml` via native `sitemap.ts`
- [x] **SEO-07**: Site serves `robots.txt` via native `robots.ts`
- [x] **SEO-08**: All pages have Open Graph and Twitter Card meta tags
- [x] **SEO-09**: Proper semantic HTML with correct H1-H6 heading hierarchy on every page
- [x] **SEO-10**: All page copy targets Ethiopian construction search queries ("best construction company in Ethiopia", "construction company Addis Ababa", etc.)

### Architecture

- [x] **ARCH-01**: Static display components converted from `"use client"` to Server Components
- [x] **ARCH-02**: `/services` exists as a proper Next.js route (not anchor link)
- [x] **ARCH-03**: `/projects` exists as a proper Next.js route (not anchor link)
- [x] **ARCH-04**: Header navigation updated to use route links instead of anchor links

### Content

- [x] **CONT-01**: Services page with detailed descriptions for building construction, road & infrastructure, and renovation
- [x] **CONT-02**: Projects page showcasing 6+ realistic placeholder construction projects
- [x] **CONT-03**: All placeholder images replaced with Ethiopia/Addis Ababa relevant construction photos (locally hosted)
- [x] **CONT-04**: Contact information and CTAs present on every page
- [x] **CONT-05**: Footer includes company address, phone, email for NAP consistency

### Performance

- [x] **PERF-01**: All images hosted locally in `/public/images/` (not remote URLs)
- [x] **PERF-02**: Hero image uses `priority` prop for LCP optimization
- [x] **PERF-03**: All images use proper `sizes` prop and descriptive alt text
- [x] **PERF-04**: Mobile-responsive design maintained across all new pages

## v2 Requirements

### Content Marketing

- **BLOG-01**: Blog section for construction industry articles (SEO content marketing)
- **BLOG-02**: Individual blog post pages with article schema

### Localization

- **L10N-01**: Amharic language version of all pages
- **L10N-02**: Language switcher in header

### Analytics

- **ANAL-01**: Google Analytics 4 integration
- **ANAL-02**: Google Search Console verification

## Out of Scope

| Feature | Reason |
|---------|--------|
| City-specific landing pages | `areaServed` schema achieves national coverage without thin duplicate pages |
| CMS / admin panel | Static site is sufficient for company website |
| Client portal | Not relevant for marketing site |
| Real-time chat | Unnecessary complexity for v1 |
| Multi-language (Amharic) | Deferred to v2 |
| `next-sitemap` or `next-seo` packages | Redundant — Next.js App Router has native equivalents |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| SEO-01 | Phase 1 | Complete |
| SEO-02 | Phase 1 | Complete |
| SEO-03 | Phase 1 | Complete |
| SEO-04 | Phase 2 | Complete |
| SEO-05 | Phase 2 | Complete |
| SEO-06 | Phase 1 | Complete |
| SEO-07 | Phase 1 | Complete |
| SEO-08 | Phase 1 | Complete |
| SEO-09 | Phase 1 | Complete |
| SEO-10 | Phase 2 | Complete |
| ARCH-01 | Phase 1 | Complete |
| ARCH-02 | Phase 2 | Complete |
| ARCH-03 | Phase 2 | Complete |
| ARCH-04 | Phase 2 | Complete |
| CONT-01 | Phase 2 | Complete |
| CONT-02 | Phase 2 | Complete |
| CONT-03 | Phase 2 | Complete |
| CONT-04 | Phase 2 | Complete |
| CONT-05 | Phase 1 | Complete |
| PERF-01 | Phase 1 | Complete |
| PERF-02 | Phase 1 | Complete |
| PERF-03 | Phase 1 | Complete |
| PERF-04 | Phase 2 | Complete |

**Coverage:**
- v1 requirements: 23 total
- Mapped to phases: 23
- Unmapped: 0 ✓

---
*Requirements defined: 2026-03-11*
*Last updated: 2026-03-11 after roadmap creation*
