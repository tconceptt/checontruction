# External Integrations

**Analysis Date:** 2026-03-11

## APIs & External Services

**Image CDN:**
- Unsplash Images - Static image hosting for hero and modal backgrounds
  - SDK/Client: Direct HTTPS URLs in Next.js Image component
  - Endpoints used:
    - `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab` (Hero section building image)
    - `https://images.unsplash.com/photo-1524661135-423995f22d0b` (ContactModal background)
  - Configuration: Whitelist in `next.config.ts` under `images.remotePatterns`

**Font Service:**
- Google Fonts - Web font loading
  - SDK/Client: Next.js `next/font/google`
  - Fonts: Geist Sans and Geist Mono (used in `src/app/layout.tsx`)

## Data Storage

**Databases:**
- Not detected - No database integration present

**File Storage:**
- Local filesystem only
  - Logo files: `public/Logos/t-che 2 as.png`, `public/Logos/t-che 2-white.png`
  - SVG icons: `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg`
  - Favicon: `src/app/favicon.ico`

**Caching:**
- Next.js built-in caching via static generation and ISR
- No external cache service (Redis, Memcached, etc.)

## Authentication & Identity

**Auth Provider:**
- None - No authentication system implemented
- Marketing website with no user accounts or protected content

## Monitoring & Observability

**Error Tracking:**
- Not detected - No error tracking service (Sentry, LogRocket, etc.)

**Logs:**
- Console logging only via browser console and server logs
- No structured logging or log aggregation service

**Analytics:**
- Not detected - No analytics library (Google Analytics, Mixpanel, Segment, etc.)

## CI/CD & Deployment

**Hosting:**
- Not configured in repository
- Recommended: Vercel (native Next.js support), or any Node.js-capable hosting

**CI Pipeline:**
- Not detected - No GitHub Actions, CircleCI, or other CI configuration

**Environment Variables:**
- None required currently
- No .env files present or referenced

## Webhooks & Callbacks

**Incoming:**
- None - No webhook endpoints implemented

**Outgoing:**
- None - No external service callbacks

## Contact Information

**Static Contact Data:**
Located in `src/components/ContactModal.tsx` and `src/components/Footer.tsx`:
- Email: `info@checonstruction.com` (displayed only, no form submission)
- Phone: `+251 911 234 567`
- Address: Cheergs Building, Bole Road, Addis Ababa, Ethiopia

**Contact Modal Interaction:**
- Event-driven system using `CustomEvent('open-contact')` dispatched from:
  - `src/components/Header.tsx` (Request Quote button)
  - `src/components/Hero.tsx` (Request Quote button)
  - `src/components/Footer.tsx` (Contact Us Today button)
- Modal managed in `src/components/ContactModal.tsx` with Framer Motion animations
- No backend submission - Modal is display-only with static contact information

---

*Integration audit: 2026-03-11*
