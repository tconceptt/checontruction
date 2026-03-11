# Codebase Concerns

**Analysis Date:** 2026-03-11

## Tech Debt

**Event-Based Communication Without Type Safety:**
- Issue: Custom window events used for cross-component communication (`open-contact`) without type definitions or validation
- Files: `src/components/Header.tsx`, `src/components/Hero.tsx`, `src/components/Footer.tsx`, `src/components/ContactModal.tsx`
- Impact: Potential runtime errors if event name is misspelled, no IDE autocomplete, difficult to refactor event names globally
- Fix approach: Create a typed event system with constants or custom hooks (e.g., useContactModal hook with dispatch function)

**Hard-coded Contact Information:**
- Issue: Contact details duplicated across multiple components as string literals
- Files: `src/components/ContactModal.tsx` (lines 74-76), `src/components/Footer.tsx` (lines 70, 74, 78)
- Impact: Single source of truth violation; changing address requires multiple edits; easy to create inconsistencies
- Fix approach: Move contact information to a shared configuration file (e.g., `src/config/contact.ts`)

**Hardcoded Unsplash URLs in Component Data:**
- Issue: External image URLs embedded in component code rather than centralized
- Files: `src/components/Hero.tsx` (line 96), `src/components/FeaturedProjects.tsx` (lines 8, 13, 18, 23), `src/components/CompanyValues.tsx` (line 78)
- Impact: Brittle image loading (no fallback handling), difficult to change image source provider, performance concerns with unoptimized external images
- Fix approach: Move image URLs to `src/config/images.ts` or environment variables; implement Image optimization and fallbacks

**Missing Image Dimensions:**
- Issue: Next.js Image components use `fill` without explicit dimensions in some cases
- Files: `src/components/Header.tsx` (lines 23-29), `src/components/Footer.tsx` (lines 41-47)
- Impact: Potential layout shift (CLS) issues, inefficient image loading
- Fix approach: Define explicit width/height props or use parent container constraints with proper aspect ratio

**Floating useEffect Side Effects:**
- Issue: DOM mutations in useEffect without proper cleanup in all cases
- Files: `src/components/ContactModal.tsx` (lines 17-26)
- Impact: Potential memory leaks or double-cleanup if component unmounts during modal open state
- Fix approach: Ensure cleanup function properly restores original overflow state in all code paths

**Unused Social Media Buttons:**
- Issue: Social media icons in footer (IN, FB, X) are non-functional divs with cursor:pointer styling but no navigation
- Files: `src/components/Footer.tsx` (lines 52-62)
- Impact: False affordance - users expect clicking to navigate; accessibility issue (no semantic meaning)
- Fix approach: Convert to proper Link components with href attributes or remove if not implemented

## Security Considerations

**Unvalidated Custom Event Data:**
- Risk: Custom events used for communication have no payload validation; could introduce injection vulnerabilities if event data extends beyond string names
- Files: `src/components/Header.tsx` (line 14), `src/components/Hero.tsx` (line 51), `src/components/Footer.tsx` (line 28)
- Current mitigation: Only custom event names are used, no dynamic data passed
- Recommendations: If event-based communication extends to payload data, implement validation and sanitization; consider typed event bus

**External Image Dependencies:**
- Risk: Heavy reliance on Unsplash images via external URLs; no fallback if service is unavailable
- Files: `src/components/Hero.tsx`, `src/components/FeaturedProjects.tsx`, `src/components/CompanyValues.tsx`
- Current mitigation: Gray background placeholders show during load
- Recommendations: Implement proper error boundaries for image failures; consider self-hosting critical images

**No Content Security Policy:**
- Risk: Unsplash images loaded from external domain without CSP headers
- Files: All components using Unsplash URLs
- Current mitigation: Unsplash is a reputable service
- Recommendations: Implement CSP headers in next.config.ts to restrict image sources

## Performance Bottlenecks

**Large Hero Image Without Optimization:**
- Problem: Hero section image (line 96 in Hero.tsx) loaded from Unsplash at potentially large sizes
- Files: `src/components/Hero.tsx`
- Cause: External image URL, fill layout without width constraint, no quality optimization
- Improvement path: Add width/height constraints, implement responsive image sizing, consider preloading above-the-fold image

**Unoptimized Project Images:**
- Problem: Four project cards load external images without lazy loading optimization
- Files: `src/components/FeaturedProjects.tsx`
- Cause: Grid layout with multiple fill images, no priority setting except on first
- Improvement path: Add loading={lazy} to non-critical images, optimize image dimensions per breakpoint, implement skeleton loaders

**Framer Motion Without Lazy Loading:**
- Problem: All animation variants defined inline, no code-splitting for animation logic
- Files: `src/components/Services.tsx`, `src/components/FeaturedProjects.tsx`, `src/components/CompanyValues.tsx`
- Cause: Animation libraries bundled with component code
- Improvement path: Extract animation variants to shared file, consider dynamic import for framer-motion if needed

**Backdrop Blur on Multiple Elements:**
- Problem: CSS backdrop-blur used in Contact Modal and Header without performance consideration
- Files: `src/components/ContactModal.tsx` (line 37), `src/components/Header.tsx` (line 19)
- Cause: Repeated backdrop filters can cause repaints on lower-end devices
- Improvement path: Test on lower-end devices, consider reducing blur radius or using will-change optimization

## Fragile Areas

**Contact Modal State Management:**
- Files: `src/components/ContactModal.tsx`
- Why fragile: Global window event listener for opening modal; no centralized state; potential race condition if modal opened/closed rapidly
- Safe modification: Always ensure cleanup in useEffect; test mobile menu + modal interaction
- Test coverage: No tests visible for modal state transitions or overflow handling

**Header Mobile Menu State:**
- Files: `src/components/Header.tsx`
- Why fragile: Mobile menu state only tracks open/closed; doesn't account for route changes closing menu or animation interruptions
- Safe modification: Add route change listeners to close menu automatically; test with rapid clicks
- Test coverage: Untested edge cases (rapid open/close, modal + menu interaction)

**Component Import Chain:**
- Files: `src/app/layout.tsx` → all components as client-side
- Why fragile: Layout imports ContactModal which imports components; all root components are client components, increasing hydration payload
- Safe modification: Keep only necessary components as client; move form state to context if needed
- Test coverage: No tests for hydration or SSR behavior

**Styling Dependencies on Tailwind Custom Properties:**
- Files: `src/app/globals.css`, all component files
- Why fragile: Custom color variables defined in @theme; if build tools change, color definitions may not work
- Safe modification: Add fallback colors, test build output, document custom property usage
- Test coverage: No tests for CSS custom property injection

## Scaling Limits

**Logo and Image File Locations:**
- Current capacity: Logos stored in `public/Logos/` directory with specific filenames (`t-che 2 as.png`, `t-che 2-white.png`)
- Limit: Hard-coded paths in Header and Footer; no versioning or CDN integration
- Scaling path: Move logo asset management to CMS or config file; implement CDN path prefix for production

**Static Contact Information:**
- Current capacity: One headquarters address, one phone number, one email
- Limit: Adding multiple office locations requires component restructuring
- Scaling path: Store contact data in database or config file; create reusable contact card component

**Project Showcase Limited to 4 Items:**
- Current capacity: Hard-coded projects array in FeaturedProjects component
- Limit: Grid layout specifically designed for 4 projects; no pagination or filtering
- Scaling path: Move projects to CMS or database; create dynamic grid that adapts to project count

## Test Coverage Gaps

**No Tests Visible:**
- What's not tested: All components (Hero, Services, FeaturedProjects, CompanyValues, Header, Footer, ContactModal)
- Files: Entire `src/` directory
- Risk: Refactoring animations, events, or layout could break functionality undetected
- Priority: High - Critical user interactions (contact modal, mobile menu) need coverage

**Event System Untested:**
- What's not tested: Custom event dispatching and listening mechanism
- Files: `src/components/Header.tsx`, `src/components/Hero.tsx`, `src/components/Footer.tsx`, `src/components/ContactModal.tsx`
- Risk: Event name typos or timing issues could silently fail
- Priority: High - This is the primary cross-component communication mechanism

**Responsive Behavior Untested:**
- What's not tested: Mobile menu, responsive image sizes, layout breakpoints
- Files: All layout and component files
- Risk: Regression on mobile devices undetected
- Priority: Medium - Visual regressions affect user experience significantly

**Animation Interruption Untested:**
- What's not tested: Rapid user interactions with animated elements (hover, click while animating)
- Files: `src/components/Hero.tsx`, `src/components/Services.tsx`, `src/components/FeaturedProjects.tsx`
- Risk: Animation glitches, layout shifts during user interaction
- Priority: Medium - Affects user experience quality

---

*Concerns audit: 2026-03-11*
