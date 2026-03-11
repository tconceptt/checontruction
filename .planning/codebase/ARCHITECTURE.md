# Architecture

**Analysis Date:** 2026-03-11

## Pattern Overview

**Overall:** Component-driven Next.js static website with Client Components for interactivity

**Key Characteristics:**
- Server-rendered root layout with client-side interactive components
- Page composition via modular section components
- CSS-in-JS styling using Tailwind CSS with theme variables
- Event-driven modal communication using custom window events
- Animation-first UI using Framer Motion for scroll-triggered and page-load animations
- Images lazy-loaded from Unsplash CDN with Next.js Image optimization

## Layers

**Framework Layer:**
- Purpose: Next.js 16 App Router providing routing, rendering, and build infrastructure
- Location: `next.config.ts`, root entry point via `src/app/`
- Contains: Next.js configuration, layout wrapper, page routing
- Depends on: React 19, Node.js runtime
- Used by: All application components

**Layout & Shell Layer:**
- Purpose: Persistent page structure with header, main content area, footer, and modal
- Location: `src/app/layout.tsx`
- Contains: Root HTML element setup, font configuration, metadata, layout wrapper
- Depends on: Header, Footer, ContactModal components
- Used by: All pages rendered through App Router

**Page/Route Layer:**
- Purpose: Route-specific content composition
- Location: `src/app/page.tsx`
- Contains: Home page that orchestrates Hero, Services, FeaturedProjects, and CompanyValues sections
- Depends on: All section components
- Used by: Next.js App Router (rendered at `/`)

**Section Component Layer:**
- Purpose: Self-contained sections with isolated styling and state
- Location: `src/components/` (Hero, Services, FeaturedProjects, CompanyValues, Header, Footer)
- Contains: Semantic section elements with complete styling, layout, and animations
- Depends on: Framer Motion for animations, Lucide React icons, Next.js Image, utility functions
- Used by: Layout wrapper and page component

**Modal Component Layer:**
- Purpose: Global modal for contact information with event-driven lifecycle
- Location: `src/components/ContactModal.tsx`
- Contains: Modal state management, event listener registration, overlay and content rendering
- Depends on: useEffect, useState React hooks, Framer Motion, Lucide icons
- Used by: Root layout (rendered globally)

**Utility Layer:**
- Purpose: Shared helper functions for styling
- Location: `src/lib/utils.ts`
- Contains: `cn()` function for merging classnames with Tailwind conflict resolution
- Depends on: clsx, tailwind-merge
- Used by: All components for className merging

**Styling Layer:**
- Purpose: Global theme configuration and CSS utilities
- Location: `src/app/globals.css`
- Contains: Tailwind CSS theme variables (primary, accent, surface colors), custom background patterns (blueprint, grid, concrete, dot)
- Depends on: Tailwind CSS v4 PostCSS
- Used by: All components via classNames

## Data Flow

**Page Load & Rendering:**

1. Browser requests `/`
2. Next.js server renders `RootLayout` with metadata
3. Layout applies fonts (Geist Sans/Mono), imports global CSS, mounts Header component
4. Home page (`page.tsx`) renders section components in sequence
5. Each section uses `motion.div` with viewport-triggered animations
6. Images load from Unsplash CDN, optimized via Next.js Image component
7. Footer renders last with contact-opening button
8. ContactModal mounts globally but renders hidden

**Contact Modal Interaction:**

1. User clicks "Request Quote" or "Contact Us" button in Header, Hero, or Footer
2. Button dispatches custom `'open-contact'` event via `window.dispatchEvent()`
3. ContactModal's `useEffect` listener catches event and sets `isOpen = true`
4. AnimatePresence renders overlay and modal with Framer Motion entrance animation
5. Modal prevents body scroll via `document.body.style.overflow = 'hidden'`
6. Clicking overlay or close button sets `isOpen = false`
7. AnimatePresence unmounts modal with exit animation

**Scroll Animation Flow:**

1. Section component mounts with `initial`, `whileInView`, `viewport` props
2. Framer Motion's `useInView` hook tracks viewport intersection
3. When section enters viewport (with `-100px` margin buffer), animation triggers
4. `staggerChildren` causes sequential animation of child elements
5. Animations use ease functions and duration values for smooth transitions

**State Management:**
- Component-level: useState for Header mobile menu, ContactModal open state
- No global state management (Redux, Zustand, Context)
- Event-driven communication between components via window events
- Animation state managed by Framer Motion

## Key Abstractions

**Section Component Pattern:**
- Purpose: Reusable, self-contained full-width sections with semantic structure
- Examples: `src/components/Hero.tsx`, `src/components/Services.tsx`, `src/components/FeaturedProjects.tsx`, `src/components/CompanyValues.tsx`
- Pattern: "use client" directive, motion.div wrapper with viewport animations, max-w-7xl centered container, grid/flex layouts

**Motion Variants:**
- Purpose: Reusable animation configurations for consistent timing and easing across components
- Examples in `Services.tsx`: `containerVariants` (staggerChildren), `itemVariants` (fade + slide)
- Pattern: Object with `hidden` and `visible` states, transition timing, used with `motion.div` and `variants` prop

**Icon Components:**
- Purpose: Consistent iconography from lucide-react package
- Examples: ShieldCheck, Trophy, Target, MapPin, Phone, Mail, Menu, X, ArrowRight
- Pattern: Imported from lucide-react, rendered as React components with stroke width customization

**Image Optimization:**
- Purpose: Performance and SEO via Next.js Image component
- Examples: Logo images in Header/Footer, hero section image, project gallery images
- Pattern: `next/image` with `fill`, `priority`, `className` for layout modes

**Responsive Design:**
- Purpose: Mobile-first layouts that adapt to screen sizes
- Pattern: Tailwind responsive modifiers (md:, lg:) applied to Flexbox/Grid containers
- Examples: Header nav hidden on mobile, Services grid 1→2→4 columns, Project gallery adaptive layout

## Entry Points

**Application Entry:**
- Location: `src/app/layout.tsx`
- Triggers: Server renders on every request; browser loads HTML with hydration
- Responsibilities: Mount React components, apply global styles, set metadata, establish layout structure

**Page Entry:**
- Location: `src/app/page.tsx`
- Triggers: Route `/` requests
- Responsibilities: Compose hero, services, projects, and company values sections

**Client Interactivity Entry:**
- Location: `src/components/Header.tsx`
- Triggers: Browser loads; user interacts with menu or buttons
- Responsibilities: Navigation links, mobile menu toggle, contact modal trigger

**Modal Entry:**
- Location: `src/components/ContactModal.tsx`
- Triggers: Window `'open-contact'` event
- Responsibilities: Listen for contact requests, manage modal open/close state, prevent scroll

## Error Handling

**Strategy:** No explicit error boundaries or error handling patterns detected. Graceful degradation via:
- Image fallback: Next.js Image placeholder and gray background (`bg-gray-100`)
- Modal scroll prevention: Cleanup in useEffect return function
- Event listeners: Cleanup via event listener removal in return function

**Patterns:**
- Image loading: Placeholder colors and animate-pulse during load
- Null checks: TypeScript strict mode prevents undefined issues
- Cleanup: useEffect return functions remove event listeners and restore body overflow

## Cross-Cutting Concerns

**Logging:** Console-based only; no structured logging framework detected

**Validation:** No input validation (no forms requiring validation); static content site

**Authentication:** Not applicable; public company website without user authentication

**Styling Consistency:**
- Tailwind configuration via CSS custom properties in `globals.css`
- Color theme: primary (#1e3a5f), accent (#e6b014), surface (#F8F9FA)
- Typography: Geist Sans (default), Geist Mono (monospace), applied via CSS variables
- Spacing: Tailwind default spacing scale (8px base)

**Accessibility:**
- Semantic HTML: `<section>`, `<header>`, `<footer>`, `<main>` elements
- Link structure: Hash links (`#services`, `#projects`, `#about`) with smooth scroll
- Image alt text provided for all images
- Button semantics: Proper `<button>` elements for interactions

---

*Architecture analysis: 2026-03-11*
