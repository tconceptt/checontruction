# Coding Conventions

**Analysis Date:** 2026-03-11

## Naming Patterns

**Files:**
- Component files: PascalCase (e.g., `Header.tsx`, `Hero.tsx`, `CompanyValues.tsx`)
- Utility files: camelCase (e.g., `utils.ts`)
- CSS files: lowercase with hyphens (e.g., `globals.css`)
- Configuration files: camelCase with extensions (e.g., `next.config.ts`, `eslint.config.mjs`)

**Functions:**
- React components: PascalCase named exports (e.g., `export default function Header()`)
- Helper functions: camelCase (e.g., `openContact`, `handleOpen`)
- Event handlers: descriptive camelCase with "on" or action verb prefix (e.g., `onClick`, `handleOpen`)

**Variables:**
- Local state and constants: camelCase (e.g., `isMobileMenuOpen`, `isOpen`, `services`)
- CSS class names: kebab-case (e.g., `text-primary`, `flex`, `space-x-8`)
- Animation variants: camelCase (e.g., `containerVariants`, `fadeUpVariant`, `itemVariants`)

**Types:**
- React component props: PascalCase suffixed with "Props" or inline `Readonly<{ ... }>`
- Type imports: `import type { Metadata }` for TypeScript types
- Metadata objects: PascalCase (e.g., `metadata: Metadata`)

## Code Style

**Formatting:**
- Framework: No explicit formatter configuration detected; uses Next.js defaults
- Indentation: 2 spaces (inferred from file structure)
- Line length: No strict limit enforced, long lines present in components (e.g., className attributes)
- Quotes: Single quotes for string literals (e.g., `'use client'`, `href='/components/Hero'`)

**Linting:**
- Tool: ESLint v9 with Next.js configuration
- Config file: `eslint.config.mjs` (flat config format)
- Rules active:
  - Core Web Vitals from `eslint-config-next/core-web-vitals`
  - TypeScript rules from `eslint-config-next/typescript`
- Command: `npm run lint`

## Import Organization

**Order:**
1. Framework/library imports (e.g., `import Link from 'next/link'`, `import React hooks`)
2. Third-party library imports (e.g., `import { motion } from 'framer-motion'`, `import { Menu, X } from 'lucide-react'`)
3. Internal utility imports (e.g., `import { cn } from '@/lib/utils'`)
4. Relative/component imports last (if any)

**Path Aliases:**
- `@/*` maps to `./src/*` (defined in `tsconfig.json`)
- All internal imports use the `@/` alias consistently (e.g., `@/components/Hero`, `@/lib/utils`)

**Type Imports:**
- Use `import type` for TypeScript types: `import type { Metadata } from "next"`
- Separate from runtime imports for clarity

## Error Handling

**Patterns:**
- No explicit error handling detected in current codebase
- Async operations (like event listeners) use standard JavaScript patterns
- Event listeners properly cleaned up in useEffect return functions
  - Example: `window.addEventListener()` with corresponding `window.removeEventListener()` in cleanup
- DOM mutations guarded with conditional checks (e.g., `if (isOpen)` before setting `document.body.style.overflow`)

## Logging

**Framework:** Console not used; no logging framework detected

**Patterns:**
- No active logging observed in components
- Production code relies on Next.js built-in error handling

## Comments

**When to Comment:**
- Sparse inline comments; code is primarily self-documenting
- Comments used for non-obvious visual/structural concerns (e.g., `{/* Mobile menu button */}`, `{/* Prevent scrolling when modal is open */}`)
- Comments placed in JSX for layout markers and state explanations

**JSDoc/TSDoc:**
- No JSDoc comments detected in codebase
- Function signatures rely on TypeScript types for documentation

## Function Design

**Size:**
- Components range from ~50-160 lines
- Longer components extract animation variants and data arrays as separate module-level constants
- Utility functions are small and focused (e.g., `cn()` in `utils.ts` is 2 lines)

**Parameters:**
- React components accept destructured props with explicit type annotations
- Example: `({children}: Readonly<{children: React.ReactNode}>)`
- Functions use single parameters or destructured objects

**Return Values:**
- React components return JSX (no render functions)
- Components may return conditional renders wrapped in `<AnimatePresence>` blocks
- Utility functions return processed values (e.g., `cn()` returns a merged className string)

## Module Design

**Exports:**
- All components use `export default function ComponentName()` pattern
- No named exports used in component files
- Utilities exported as named exports: `export function cn(...)`

**Barrel Files:**
- Not used; components imported directly from their file paths
- Each component is a standalone file

## Component Patterns

**Client Components:**
- Heavy use of `"use client"` directive for interactive components
- Applied to: `Header.tsx`, `Hero.tsx`, `Services.tsx`, `CompanyValues.tsx`, `FeaturedProjects.tsx`, `ContactModal.tsx`
- Not applied to: `page.tsx` (default server component), `layout.tsx` (used for global setup)

**Data Structures:**
- Data defined as module-level constants before component definition
- Array of objects pattern for repeatable content (services, projects)
- Each item typically includes: `icon`, `title`, `description`, `number`/`category`, or `image`

**State Management:**
- Only React `useState` and `useEffect` used (no Redux, Zustand, etc.)
- Event communication via `window.dispatchEvent()` for cross-component signals (e.g., opening contact modal)
- Local state for UI interactions (mobile menu toggle, modal open/close)

---

*Convention analysis: 2026-03-11*
