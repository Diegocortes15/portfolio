# React Migration Design

**Date:** 2026-04-28  
**Project:** Diego Cortes Portfolio  
**Status:** Approved

## Goals

- Showcase React on the portfolio itself as a signal to employers
- Make the codebase maintainable and easy to extend with new content
- Deliver a robust, professional presentation

## Tech Stack

| Concern | Choice | Reason |
|---|---|---|
| Framework | React 18 | Industry standard |
| Language | TypeScript 5 (strict) | Professional standard, catches errors at build time |
| Build tool | Vite 5 | Current standard for React SPAs, fast DX |
| Styling | CSS Modules | Scoped styles, zero runtime overhead, natural fit for migrating existing CSS |
| Animations | Framer Motion | React-standard, replaces all vanilla JS animation code cleanly |
| Deployment | Vercel (Hobby) | Zero config, auto-deploy on push, no base path workaround needed, free |

## Project Structure

```
src/
  components/
    Cursor.tsx + Cursor.module.css
    Preloader.tsx + Preloader.module.css
    Navbar.tsx + Navbar.module.css
    Header.tsx + Header.module.css
    Work.tsx + Work.module.css
    ProjectCard.tsx + ProjectCard.module.css
    About.tsx + About.module.css
    Contact.tsx + Contact.module.css
  data/
    projects.ts
    about.ts
  App.tsx
  main.tsx
  index.css
```

Flat `components/` directory — each component is a `.tsx` + `.module.css` pair. No folder-per-component since the project is small and components don't have sub-components, tests, or stories.

## Components

**App.tsx** renders the full page in order:
```tsx
<Cursor />
<Preloader />
<Navbar />
<Header />
<Work />
<About />
<Contact />
```

No routing — single-page scroll with anchor links (`#start`, `#work`, `#about`, `#contact`) is kept as-is. React Router is not needed.

## Data Layer

Project and bio data are extracted from hardcoded HTML into typed files, making future updates a one-line change.

```ts
// data/projects.ts
type Project = {
  id: number;
  title: string;
  category: 'automation' | 'web';
  frameworkIcon?: string;
  screenshot: string;
  url: string;
  type: 'web' | 'mobile';
  width: '33' | '50';
};
```

```ts
// data/about.ts
type About = {
  name: string;
  dob: string;
  email: string;
  experience: { period: string; role: string }[];
  education: { year: string; title: string }[];
  skills: string[];
};
```

`Work.tsx` maps over `projects.ts` to render `<ProjectCard>` components. `About.tsx` maps over `about.ts` to render the code-block bio.

## Animations

All vanilla JS animation code is replaced with Framer Motion:

| Current (vanilla JS) | Framer Motion replacement |
|---|---|
| `IntersectionObserver` scroll reveal on project cards | `whileInView` + `initial` on `<motion.div>` |
| `mousemove` → `rotateX/rotateY` 3D card tilt | `useMotionValue` + `useTransform` on `<motion.a>` |
| `mousemove` custom cursor with `requestAnimationFrame` | `useMotionValue` + `useSpring` for trailing outline |
| `window.addEventListener('load')` preloader hide | `AnimatePresence` + `motion.div` with exit animation |
| Mobile nav open/close | `AnimatePresence` + `motion.nav` slide-in |
| Role word cycling in hero | `AnimatePresence` with key-based swap and fade/slide |

The 3D card tilt uses `useMotionValue` per card instance so each card is fully isolated. All animation config (duration, stiffness, easing) lives as constants at the top of each component file.

## Styling

Existing `styles.css` is split into per-component CSS Module files. Only global rules (resets, root font-size, CSS custom properties, scrollbar, font imports) remain in `index.css`.

## Deployment

**Vercel (Hobby plan — free):**
- Connect GitHub repo to Vercel dashboard once
- Auto-deploys on every push to `main`
- Preview deployments on every PR
- Custom domain support included
- No `base` path config needed (unlike gh-pages)

```json
// package.json scripts
"dev": "vite",
"build": "tsc && vite build",
"preview": "vite preview"
```

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

The existing `.github/workflows/main.yml` can be removed or repurposed — Vercel handles CI/CD automatically from the GitHub integration.

## Migration Strategy

**Option B — Scaffold alongside, port incrementally:**

1. Scaffold Vite + React + TS in the same repo
2. Port components one by one: Cursor → Preloader → Navbar → Header → Work → About → Contact
3. Verify each section visually before moving on
4. Remove old vanilla files once all components are complete
5. Connect repo to Vercel and deploy

This preserves git history and gives a working site at each step.
