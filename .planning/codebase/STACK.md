# Technology Stack

**Analysis Date:** 2026-03-11

## Languages

**Primary:**
- TypeScript 5 - Core language for all components and configuration

**Secondary:**
- JavaScript (ESM) - Used for configuration files (next.config.ts, eslint.config.mjs, postcss.config.mjs)
- CSS - Styling via Tailwind CSS

## Runtime

**Environment:**
- Node.js (version specified in package.json dev dependencies: @types/node ^20)

**Package Manager:**
- npm
- Lockfile: `package-lock.json` (present)

## Frameworks

**Core:**
- Next.js 16.1.6 - Full-stack React framework with App Router
- React 19.2.3 - UI component library
- React DOM 19.2.3 - DOM rendering

**Styling:**
- Tailwind CSS 4 - Utility-first CSS framework
- @tailwindcss/postcss 4 - PostCSS plugin for Tailwind

**Animation:**
- Framer Motion 12.35.1 - React animation library

**UI Components:**
- Lucide React 0.577.0 - Icon library (MapPin, Phone, Mail, Menu, X, ArrowRight, Building2, HardHat, Ruler, ShieldCheck)

**Utilities:**
- clsx 2.1.1 - Conditional className utility
- tailwind-merge 3.5.0 - Merge and override Tailwind classes

## Key Dependencies

**Critical:**
- next 16.1.6 - Framework foundation for SSR, static generation, and routing
- react 19.2.3 - Component foundation
- framer-motion 12.35.1 - Animation system used across Hero, Services, ContactModal, Header components
- lucide-react 0.577.0 - Icon system for contact information, service descriptions, and navigation

**Build/Optimization:**
- @tailwindcss/postcss 4 - CSS optimization and processing
- tailwind-merge 3.5.0 - Class name deduplication (used in `src/lib/utils.ts` cn() function)

## Configuration

**Environment:**
- No .env files detected - No external API keys or secrets required in current implementation
- Configuration is entirely static/hardcoded in components

**Build:**
- next.config.ts - Next.js configuration
  - Image optimization enabled for external images from `images.unsplash.com`
- tsconfig.json - TypeScript configuration
  - Target: ES2017
  - Strict mode enabled
  - Path alias: `@/*` maps to `./src/*`
  - JSX: react-jsx
- postcss.config.mjs - PostCSS configuration for Tailwind
- eslint.config.mjs - ESLint configuration using flat config

## Linting & Code Quality

**Linting:**
- ESLint 9 - JavaScript/TypeScript linting
- eslint-config-next 16.1.6 - Next.js specific rules
  - Core Web Vitals rules enabled
  - TypeScript support enabled

**Commands:**
```bash
npm run dev     # Start development server
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Platform Requirements

**Development:**
- Node.js 20+ (inferred from @types/node ^20)
- npm (package manager)
- TypeScript 5 support

**Production:**
- Node.js 20+ for running Next.js server
- Static file serving capability (for public assets: logos, images)

**Deployment:**
- Can run on any Node.js 20+ server (Vercel recommended for optimal Next.js support)
- Requires environment variables: None currently configured
- Static export possible via Next.js static generation

---

*Stack analysis: 2026-03-11*
