# Roadmap: Che Construction PLC Website

## Overview

The site already exists but is SEO-blind. Phase 1 fixes the invisible foundation — metadata architecture, structured data, sitemap, robots, and performance. Phase 2 expands the indexable surface by creating dedicated `/services` and `/projects` routes with their own metadata, content, and Ethiopia-optimized copy. When both phases are done, the site has three independently-rankable pages targeting the Ethiopian construction market.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: SEO Foundation** - Fix metadata architecture, wire up structured data and crawlability infrastructure for the homepage
- [x] **Phase 2: Pages and Content** - Create `/services` and `/projects` routes with full content, copy, and image migration (completed 2026-03-12)

## Phase Details

### Phase 1: SEO Foundation
**Goal**: The homepage is fully crawlable, correctly structured, and emitting all ranking signals Google needs
**Depends on**: Nothing (first phase)
**Requirements**: ARCH-01, SEO-01, SEO-02, SEO-03, SEO-06, SEO-07, SEO-08, SEO-09, PERF-01, PERF-02, PERF-03, CONT-05
**Success Criteria** (what must be TRUE):
  1. Viewing page source on the homepage shows a unique `<title>` and `<meta name="description">` containing "construction company Ethiopia" or equivalent target phrase
  2. Visiting `/sitemap.xml` returns a valid XML sitemap listing at least the homepage URL
  3. Visiting `/robots.txt` returns a valid robots file that allows all crawlers and references the sitemap
  4. The homepage `<head>` includes `og:title`, `og:description`, and `og:image` tags with absolute URLs
  5. The hero image loads with `priority` and a `sizes` attribute, and the footer displays company name, address, phone, and email
**Plans:** 2/3 plans executed

Plans:
- [ ] 01-01-PLAN.md — Metadata, structured data, sitemap, robots, OG infrastructure
- [ ] 01-02-PLAN.md — Server Component conversion, copy rewrite, heading hierarchy, footer NAP
- [ ] 01-03-PLAN.md — Image migration to local hosting, sizes/alt optimization, Unsplash removal

### Phase 2: Pages and Content
**Goal**: Three independently-rankable pages exist at `/`, `/services`, and `/projects`, each with their own metadata, schema markup, and Ethiopia-specific copy
**Depends on**: Phase 1
**Requirements**: ARCH-02, ARCH-03, ARCH-04, CONT-01, CONT-02, CONT-03, CONT-04, SEO-04, SEO-05, SEO-10, PERF-04
**Success Criteria** (what must be TRUE):
  1. Navigating to `/services` loads a dedicated page (not a hash scroll) with detailed descriptions of building construction, road & infrastructure, and renovation services
  2. Navigating to `/projects` loads a dedicated page (not a hash scroll) showing 6 or more project cards with local construction imagery
  3. Page source for `/services` and `/projects` each contain unique `<title>` tags, JSON-LD schema blocks, and at least one mention of an Ethiopian city in the body copy
  4. All images load from `/public/images/` (no external Unsplash URLs in network requests), have descriptive alt text with location context, and the site is fully usable on mobile viewport
  5. Header navigation links point to `/services` and `/projects` routes, and every page has at least one visible contact CTA
**Plans:** 3/3 plans complete

Plans:
- [ ] 02-01-PLAN.md — Services page route with metadata, JSON-LD Service schema, and 3-service expanded card layout
- [ ] 02-02-PLAN.md — Projects page route with metadata, JSON-LD ItemList schema, 6-project grid, and 2 new images
- [ ] 02-03-PLAN.md — Navigation wiring (Header/Footer route links, homepage teaser cross-links, sitemap update)

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. SEO Foundation | 2/3 | In Progress|  |
| 2. Pages and Content | 3/3 | Complete   | 2026-03-12 |
