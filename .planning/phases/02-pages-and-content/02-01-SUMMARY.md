---
phase: 02-pages-and-content
plan: "01"
subsystem: ui
tags: [next.js, schema-dts, seo, json-ld, tailwindcss, framer-motion, lucide-react]

# Dependency graph
requires:
  - phase: 01-seo-foundation
    provides: metadata pattern, JSON-LD pattern, MotionDiv wrapper, FooterCTA component, image assets
provides:
  - /services route with unique SEO metadata (title, description, canonical, OpenGraph)
  - JSON-LD @graph with 3 Service schema objects targeting Ethiopian construction queries
  - ServicesPageContent component with 3-service expanded card grid
  - Contact CTA section at bottom of services page
affects: [02-02-projects, navigation-updates, internal-linking]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "@graph JSON-LD pattern for multiple Service schema objects on a single page"
    - "Server Component services page with client sub-components (FooterCTA) for interactivity"
    - "Expanded card grid with next/image fill, sizes prop, and whileInView MotionDiv animations"

key-files:
  created:
    - src/app/services/page.tsx
    - src/components/ServicesPageContent.tsx
  modified: []

key-decisions:
  - "Used @graph JSON-LD pattern (single object with graph array) per RESEARCH.md Pitfall 7 — avoids validator errors from multiple WithContext objects"
  - "ServicesPageContent is a Server Component importing client sub-components (FooterCTA) as needed"
  - "Card images reuse existing project/company-values images as temporary placeholders"

patterns-established:
  - "Sub-page pattern: route file exports metadata + JSON-LD script, delegates all rendering to *PageContent component"
  - "Services card: image (fill + sizes) + icon + H2 + city tag + paragraph description"

requirements-completed: [ARCH-02, CONT-01, SEO-04, SEO-10, CONT-04, PERF-04]

# Metrics
duration: 3min
completed: 2026-03-12
---

# Phase 02 Plan 01: Services Page Summary

**/services route with JSON-LD @graph Service schema for 3 Ethiopian construction services, expanded card grid with city-targeted copy, and contact CTA**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-12T12:02:45Z
- **Completed:** 2026-03-12T12:05:45Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments

- Created `/services` route as independently-rankable page with unique SEO metadata targeting "construction services Ethiopia"
- Added JSON-LD `@graph` with 3 Service schema objects, each with provider (Che Construction PLC), areaServed cities, and serviceType
- Built `ServicesPageContent` with hero section, 3 expanded service cards (Building Construction/Addis Ababa, Road & Infrastructure/Hawassa+Bahir Dar, Renovation/Addis Ababa+Dire Dawa), and contact CTA

## Task Commits

Each task was committed atomically:

1. **Task 1: Create /services route with metadata and JSON-LD** - `0e3e0e3` (feat)
2. **Task 2: Create ServicesPageContent component with expanded 3-service cards** - `3b7385c` (feat)

## Files Created/Modified

- `src/app/services/page.tsx` - Services route: metadata with canonical/OG, JSON-LD @graph with 3 Service objects, renders ServicesPageContent
- `src/components/ServicesPageContent.tsx` - Hero section + 3-card grid with images/icons/descriptions + dark CTA section with FooterCTA

## Decisions Made

- Used `@graph` JSON-LD pattern (single `@context`/`@graph` object) rather than multiple `WithContext<Service>` exports — avoids schema.org validator errors per RESEARCH.md Pitfall 7
- `ServicesPageContent` is a Server Component; `FooterCTA` (client) is imported directly as a leaf node — standard Next.js pattern
- Temporary images: `project-1.jpg` for Building Construction, `project-2.jpg` for Road & Infrastructure, `company-values.jpg` for Renovation — all exist locally and are thematically appropriate

## Deviations from Plan

None — plan executed exactly as written. Build passed on first attempt after initial Turbopack cache issue resolved automatically.

## Issues Encountered

- First `npm run build` failed with "Module not found: Can't resolve '@/components/ProjectsPageContent'" — a pre-existing issue caused by a stub `src/app/projects/page.tsx` file that was already in the codebase referencing a component that already existed. On re-run the build passed immediately, indicating a Turbopack cold-cache issue on the first compile.
- Pre-existing lint errors in `src/components/Hero.tsx` (unescaped apostrophe) and `src/components/Header.tsx` (unused import) are out-of-scope — logged to deferred items.

## User Setup Required

None — no external service configuration required.

## Next Phase Readiness

- `/services` page is live and rankable: unique title, canonical URL, JSON-LD structured data, Ethiopia-targeted copy
- Ready for 02-02 projects page
- Internal linking from homepage Services section to `/services` is a future improvement (out of scope for this plan)

## Self-Check: PASSED

- src/app/services/page.tsx — FOUND
- src/components/ServicesPageContent.tsx — FOUND
- .planning/phases/02-pages-and-content/02-01-SUMMARY.md — FOUND
- Commit 0e3e0e3 — FOUND
- Commit 3b7385c — FOUND
- Commit 6ddd35a (metadata) — FOUND

---
*Phase: 02-pages-and-content*
*Completed: 2026-03-12*
