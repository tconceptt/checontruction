# Testing Patterns

**Analysis Date:** 2026-03-11

## Test Framework

**Runner:**
- No test framework detected
- No testing dependencies in `package.json`
- No jest.config.*, vitest.config.*, or similar test configuration files present

**Assertion Library:**
- Not applicable - no test framework installed

**Run Commands:**
```bash
# No test scripts defined in package.json
# Available scripts are:
npm run dev          # Next.js dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Test File Organization

**Status:** No test files found in codebase

**Search Results:**
- No `.test.ts`, `.test.tsx`, `.spec.ts`, or `.spec.tsx` files present
- No dedicated test directory (`__tests__`, `tests/`, etc.)
- No test configuration files detected

## Test Structure

**Not Applicable** - No tests present in codebase

Current testing approach:
- Manual testing via `npm run dev` and browser interaction
- No automated test suite established

## Mocking

**Status:** Not applicable - no test framework configured

**Patterns for Future Implementation:**
- Components use event-based communication (`window.dispatchEvent('open-contact')`)
- Would require mocking `window.addEventListener` and `window.dispatchEvent` in tests
- External images from Unsplash API would need to be mocked in tests

## Fixtures and Factories

**Status:** Not applicable - no testing infrastructure

**Existing Data Structures to Consider:**
- Services data array in `Services.tsx` (4 items with icon, title, description, number)
- Projects data array in `FeaturedProjects.tsx` (4 items with image, title, category)
- These could serve as fixtures for future component tests

## Coverage

**Requirements:** Not enforced - no coverage tooling configured

**Current State:**
- 0% test coverage (no tests written)
- Key untested areas:
  - Component rendering
  - State management (mobile menu toggle, modal open/close)
  - Event listeners and custom events
  - Responsive behavior
  - Animation triggers

## Test Types

**Unit Tests:**
- Not implemented
- Candidates for unit testing:
  - `cn()` utility function in `src/lib/utils.ts` (className merging logic)

**Integration Tests:**
- Not implemented
- Candidates for integration testing:
  - `ContactModal.tsx` opening/closing flow triggered by window event
  - `Header.tsx` mobile menu interaction
  - Form interactions in contact modal (if form added)

**E2E Tests:**
- Not implemented
- Framework: Not applicable
- Would be valuable for:
  - Modal opening workflow (button click → custom event → modal appears)
  - Navigation flow
  - Multi-step user journeys

## Setup Recommendations

**To establish testing:**

1. **Install test dependencies:**
   ```bash
   npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom
   ```

2. **Create vitest config** at `vitest.config.ts`:
   ```typescript
   import { defineConfig } from 'vitest/config'
   import react from '@vitejs/plugin-react'
   import path from 'path'

   export default defineConfig({
     plugins: [react()],
     test: {
       globals: true,
       environment: 'jsdom',
       setupFiles: ['./src/test/setup.ts'],
     },
     resolve: {
       alias: {
         '@': path.resolve(__dirname, './src'),
       },
     },
   })
   ```

3. **Create test setup file** at `src/test/setup.ts`:
   ```typescript
   import '@testing-library/jest-dom'
   ```

4. **Update package.json scripts:**
   ```json
   "test": "vitest",
   "test:ui": "vitest --ui",
   "test:coverage": "vitest --coverage"
   ```

5. **Create test directory structure:**
   ```
   src/
   ├── components/
   │   ├── Header.tsx
   │   ├── Header.test.tsx
   │   └── ...
   └── test/
       └── setup.ts
   ```

## Common Testing Patterns to Implement

**Component Testing (future pattern):**
```typescript
import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import Header from '@/components/Header'

it('renders header with navigation', () => {
  render(<Header />)
  expect(screen.getByText('Home')).toBeInTheDocument()
})
```

**Event Handler Testing (future pattern):**
```typescript
import { render, screen, fireEvent } from '@testing-library/react'
import ContactModal from '@/components/ContactModal'

it('opens modal when open-contact event is dispatched', () => {
  render(<ContactModal />)
  fireEvent(window, new CustomEvent('open-contact'))
  expect(screen.getByText('Contact Us')).toBeVisible()
})
```

**Responsive Testing (future pattern):**
- Use Vitest environment capabilities to test viewport changes
- Test mobile menu visibility based on screen size
- Verify className rendering for responsive utility classes

## Current Testing Gaps

**Critical Areas Without Coverage:**
- `ContactModal.tsx` - Event listener attachment, modal visibility toggle, body overflow management
- `Header.tsx` - Mobile menu state, event dispatching, navigation functionality
- `Hero.tsx`, `Services.tsx`, `CompanyValues.tsx`, `FeaturedProjects.tsx` - Animation triggering, component rendering
- `cn()` utility - Class merging behavior with Tailwind utilities

**Risk Level:** High - No automated tests for interactive features, state management, or utility functions

---

*Testing analysis: 2026-03-11*
