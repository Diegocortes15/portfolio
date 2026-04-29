# React Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the vanilla JS/HTML/CSS portfolio to React 18 + TypeScript + Vite + CSS Modules + Framer Motion, deployed on Vercel, preserving all existing visual design and interactions exactly.

**Architecture:** Scaffold Vite in the same repo alongside existing vanilla files. Build and visually verify React components one by one. Once all components are complete, remove old vanilla files. Static assets move from `src/` to `public/`. Typed `data/` files replace all hardcoded HTML content.

**Tech Stack:** React 18, TypeScript 5 (strict), Vite 5, CSS Modules, Framer Motion, Vitest + @testing-library/react, Vercel

---

## File Map

**Create:**
- `index.html` — Vite root entry (replaces `src/index.html`)
- `vite.config.ts`
- `tsconfig.json` + `tsconfig.node.json`
- `src/vite-env.d.ts`
- `src/test/setup.ts`
- `src/main.tsx`
- `src/App.tsx`
- `src/index.css`
- `src/data/projects.ts`
- `src/data/about.ts`
- `src/components/Cursor.tsx` + `src/components/Cursor.module.css`
- `src/components/Preloader.tsx` + `src/components/Preloader.module.css`
- `src/components/Navbar.tsx` + `src/components/Navbar.module.css`
- `src/components/Header.tsx` + `src/components/Header.module.css`
- `src/components/Work.tsx` + `src/components/Work.module.css`
- `src/components/ProjectCard.tsx` + `src/components/ProjectCard.module.css`
- `src/components/About.tsx` + `src/components/About.module.css`
- `src/components/Contact.tsx` + `src/components/Contact.module.css`
- `public/images/` — all images (moved from `src/images/`)
- `public/video/bg-video-2.mp4` (moved from `src/video/`)

**Remove (Task 13):**
- `src/index.html`, `src/app.js`, `src/styles.css`
- `src/images/`, `src/video/`
- `.github/workflows/main.yml` (Vercel handles CI/CD)

**Modify:**
- `package.json` — replace parcel/push-dir with vite/react/framer-motion/vitest
- `.gitignore` — add `.vercel/`

---

## Task 1: Bootstrap Vite + React + TypeScript

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`
- Create: `vite.config.ts`
- Create: `src/test/setup.ts`
- Create: `src/vite-env.d.ts`
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/index.css`
- Modify: `.gitignore`

- [ ] **Step 1: Replace package.json**

```json
{
  "name": "portfolio",
  "version": "1.0.0",
  "description": "Diego Cortes - Portfolio",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest"
  },
  "keywords": [],
  "author": "Diego Alejandro Cortes Roa",
  "license": "ISC",
  "dependencies": {
    "framer-motion": "^11.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.4.2",
    "@testing-library/react": "^16.0.0",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "jsdom": "^24.0.0",
    "typescript": "^5.5.3",
    "vite": "^5.4.8",
    "vitest": "^2.0.5"
  }
}
```

- [ ] **Step 2: Install dependencies**

Run: `npm install`

Expected: `node_modules/` populated, no errors.

- [ ] **Step 3: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

- [ ] **Step 4: Create tsconfig.node.json**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}
```

- [ ] **Step 5: Create vite.config.ts**

```ts
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});
```

- [ ] **Step 6: Create src/test/setup.ts**

```ts
import '@testing-library/jest-dom/vitest';
```

- [ ] **Step 7: Create src/vite-env.d.ts**

```ts
/// <reference types="vite/client" />
```

- [ ] **Step 8: Create root index.html**

This replaces the Parcel-based `src/index.html`. Vite expects it at the project root.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="This is the Portfolio of Diego Cortes - QA Software Engineer with experience in test automation for business insurance and media services applications."
    />
    <title>Diego Cortes - QA Engineer</title>
    <link rel="icon" type="image/png" href="/images/icon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&family=Roboto+Mono&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="preload" href="/video/bg-video-2.mp4" as="video" type="video/mp4" fetchpriority="high" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 9: Create src/main.tsx**

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

- [ ] **Step 10: Create src/App.tsx (stub)**

```tsx
export default function App() {
  return <div>Portfolio coming soon</div>;
}
```

- [ ] **Step 11: Create src/index.css (global styles)**

These are the global rules that apply across all components. Component-specific styles live in their own CSS Modules.

```css
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  list-style: none;
  text-decoration: none;
  backface-visibility: hidden;
}

html,
body,
a {
  cursor: none;
}

@media screen and (max-width: 768px) {
  html,
  body {
    cursor: auto;
  }
  a:hover {
    cursor: pointer;
  }
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-size: 2.4rem;
  color: white;
  font-family: 'Open Sans', sans-serif;
}

body::-webkit-scrollbar {
  width: 0.7rem;
  background-color: #00070d;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
  border-radius: 10rem;
  background-color: #0095c7;
}

h1 {
  font-size: 4.8rem;
}

h2 {
  font-size: 2rem;
}

img {
  max-width: 100%;
}

video {
  display: block;
  max-width: 100%;
  height: auto;
}

video[poster] {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.primary-color {
  color: #0095c7;
}

.margin-bottom-15 {
  margin-bottom: 1.5rem;
}

.margin-top-150 {
  margin-top: 15rem;
}

.margin-top-300 {
  margin-top: 30rem;
}

.margin-top-400 {
  margin-top: 40rem;
}

.margin-top-500 {
  margin-top: 50rem;
}

.margin-left-300 {
  margin-left: 30rem !important;
}

.margin-right-100 {
  margin-right: 10rem !important;
}

.container {
  position: relative;
  max-width: 112rem;
  width: 60%;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .container {
    width: 75%;
  }
}

.divider {
  background-color: #fff;
  height: 0.3rem;
  width: calc(100% + 2rem);
  margin: 2rem 0 1rem 0;
}

.section__content {
  position: relative;
  padding: 0 1.5rem 8rem 1.5rem;
}

.section__header {
  padding: 2.5rem 1.5rem;
}

.section__title {
  position: relative;
  margin-bottom: 1rem;
  color: #8e979f;
  font-weight: 300;
  font-size: 2rem;
}

.section__title__description {
  font-weight: 700;
  font-size: 3rem;
  color: #8e979f;
}

@media screen and (max-width: 990px) {
  .section__title__description {
    font-size: 2rem;
  }
}

.timeline {
  position: absolute;
  background-color: #007bc9;
  width: 0.1rem;
  height: 100%;
  z-index: 150;
  top: 0;
  left: -1rem;
}

.timeline--alt {
  height: 4000%;
}

.bullet::after {
  position: absolute;
  content: '';
  background-color: #00070d;
  border: 0.2rem solid #007bc9;
  border-radius: 50%;
  height: 0.9rem;
  width: 0.9rem;
  top: 0;
  left: -0.4rem;
  z-index: 150;
}

.bullet__title::before {
  position: absolute;
  content: '';
  background-color: #00070d;
  border: 0.2rem solid #007bc9;
  border-radius: 50%;
  height: 0.9rem;
  width: 0.9rem;
  top: 1rem;
  left: -2.9rem;
  z-index: 150;
}

.down-arrow {
  position: absolute;
  z-index: 300;
  background-image: linear-gradient(0deg, #00070d, #007bc9);
  bottom: 0;
  right: 0;
  color: #8e979f;
  overflow: hidden;
  display: flex;
  padding: 1rem;
  height: 8rem;
  width: 6rem;
  outline: none;
}

.down-arrow::before {
  transform: rotate(90deg);
  content: '→';
}

.down-arrow:hover::before,
.down-arrow:active::before,
.down-arrow:focus::before {
  animation: bounce 1s infinite ease;
}

@keyframes bounce {
  0% {
    transform: rotate(90deg) translateX(0rem);
  }
  50% {
    transform: rotate(90deg) translateX(0.5rem);
  }
  100% {
    transform: rotate(90deg) translateX(0rem);
  }
}
```

- [ ] **Step 12: Update .gitignore**

Add these lines to the existing `.gitignore`:

```
dist
.vercel
```

- [ ] **Step 13: Verify dev server starts**

Run: `npm run dev`

Expected: `VITE v5.x.x  ready in xxx ms` with a localhost URL. Open it in the browser — you should see "Portfolio coming soon".

- [ ] **Step 14: Commit**

```bash
git add package.json tsconfig.json tsconfig.node.json vite.config.ts index.html src/main.tsx src/App.tsx src/index.css src/vite-env.d.ts src/test/setup.ts .gitignore
git commit -m "chore: bootstrap Vite + React + TypeScript scaffold"
```

---

## Task 2: Move Static Assets to public/

**Files:**
- Create: `public/images/` (copy all images)
- Create: `public/video/bg-video-2.mp4`

- [ ] **Step 1: Copy images to public/**

Run:
```bash
mkdir -p public/images public/video
cp src/images/* public/images/
cp src/video/bg-video-2.mp4 public/video/
```

- [ ] **Step 2: Verify assets are accessible**

With `npm run dev` running, open `http://localhost:5173/images/icon.png` in the browser.

Expected: The icon image loads.

- [ ] **Step 3: Commit**

```bash
git add public/
git commit -m "chore: move static assets to public/"
```

---

## Task 3: Typed Data Files

**Files:**
- Create: `src/data/projects.ts`
- Create: `src/data/about.ts`

- [ ] **Step 1: Create src/data/projects.ts**

```ts
export type Project = {
  id: number;
  title: string;
  category: 'automation' | 'web';
  frameworkIcon?: string;
  screenshot: string;
  url: string;
  type: 'web' | 'mobile';
  width: '33' | '50';
  offsetTop?: number;
  offsetLeft?: number;
  offsetRight?: number;
};

export const projects: Project[] = [
  // Automation projects
  {
    id: 0,
    title: 'Selenium\nAutomation\nFramework',
    category: 'automation',
    frameworkIcon: '/images/selenium-logo.png',
    screenshot: '/images/saucelabs.jpg',
    url: 'https://github.com/Diegocortes15/selenium-automation-framework-saucedemo',
    type: 'web',
    width: '33',
    offsetLeft: 30,
  },
  {
    id: 1,
    title: 'Appium\nAutomation\nFramework',
    category: 'automation',
    frameworkIcon: '/images/appium-logo.png',
    screenshot: '/images/imdb.jpg',
    url: 'https://github.com/Diegocortes15/appium-automation-framework-imdb',
    type: 'mobile',
    width: '33',
    offsetTop: 30,
  },
  {
    id: 2,
    title: 'Playwright\nAutomation\nFramework',
    category: 'automation',
    frameworkIcon: '/images/playwright-logo.png',
    screenshot: '/images/saucelabs.jpg',
    url: 'https://github.com/Diegocortes15/playwright-automation-framework-saucedemo',
    type: 'web',
    width: '33',
    offsetTop: 15,
  },
  {
    id: 3,
    title: 'Cypress\nAutomation\nFramework',
    category: 'automation',
    frameworkIcon: '/images/cypress-logo.png',
    screenshot: '/images/wingo.png',
    url: 'https://github.com/Diegocortes15/cypress-wingo-framework',
    type: 'web',
    width: '50',
    offsetTop: 15,
  },
  {
    id: 4,
    title: 'WebDriverIO\nAutomation\nFramework',
    category: 'automation',
    frameworkIcon: '/images/webdriverio-logo.png',
    screenshot: '/images/saucelabs.jpg',
    url: 'https://github.com/Diegocortes15/ui-automation-challenge-js',
    type: 'web',
    width: '50',
    offsetTop: 30,
  },
  {
    id: 5,
    title: 'Playwright\nSerenity JS\nAutomation\nFramework',
    category: 'automation',
    frameworkIcon: '/images/serenity-js-avatar.png',
    screenshot: '/images/demoqa.jpg',
    url: 'https://github.com/Diegocortes15/playwright-serenity-automation-framework',
    type: 'web',
    width: '33',
    offsetTop: 15,
  },
  // Web projects
  {
    id: 6,
    title: 'Intiac\nWebsite',
    category: 'web',
    screenshot: '/images/intiac.jpg',
    url: 'https://intiac.netlify.app/',
    type: 'web',
    width: '33',
    offsetLeft: 30,
  },
  {
    id: 7,
    title: 'Forkify\nApp',
    category: 'web',
    screenshot: '/images/forky.jpg',
    url: 'https://forkify-diego.netlify.app/',
    type: 'web',
    width: '33',
    offsetTop: 40,
  },
  {
    id: 8,
    title: 'FoodApp\nWebsite',
    category: 'web',
    screenshot: '/images/foodapp.jpg',
    url: 'https://foodapp-diego.netlify.app/',
    type: 'web',
    width: '33',
    offsetTop: 15,
  },
  {
    id: 9,
    title: 'Bankist\nDemo',
    category: 'web',
    screenshot: '/images/bankist.jpg',
    url: 'https://bankist-diego.netlify.app/',
    type: 'web',
    width: '33',
    offsetLeft: 30,
    offsetTop: 15,
  },
  {
    id: 10,
    title: 'Natours\nLanding',
    category: 'web',
    screenshot: '/images/natours.jpg',
    url: 'https://natours-diego.netlify.app/',
    type: 'web',
    width: '33',
    offsetTop: 50,
    offsetRight: 10,
  },
  {
    id: 11,
    title: 'Trillo\nLanding',
    category: 'web',
    screenshot: '/images/trillo.jpg',
    url: 'https://trillo-project-diego.netlify.app/',
    type: 'web',
    width: '33',
    offsetTop: 30,
  },
  {
    id: 12,
    title: 'Nexter\nLanding',
    category: 'web',
    screenshot: '/images/nexter.jpg',
    url: 'https://nexter-diego.netlify.app/',
    type: 'web',
    width: '50',
    offsetLeft: 30,
    offsetTop: 15,
  },
];
```

- [ ] **Step 2: Create src/data/about.ts**

```ts
export const about = {
  name: 'Diego Alejandro Cortes Roa',
  dob: '2001-06-07T07:00:00.000Z',
  email: 'cortesroadiegoalejandro@gmail.com',
  experience: [
    { period: 'July 2022 - January 2023', role: 'Testing Intern at Endava S.A.S.' },
    { period: 'Dec 2023 - Present', role: 'QA Software Engineer II at Wizeline' },
  ],
  education: [
    { year: '2020 - 2021', title: 'Udemy - Advanced CSS and Sass: Flexbox, Grid, Animations and More!' },
    { year: '2021', title: 'Scrum Network - Scrum Essentials' },
    { year: '2021 - 2022', title: 'Udemy - The Complete JavaScript Course 2022: From Zero to Expert!' },
    { year: '2022', title: 'Udemy - WebdriverIO: Complete Beginner Course 2022' },
    { year: '2022', title: 'Perficient Latin America - QA Automation Bootcamp' },
    { year: '2016 - 2023', title: 'Universidad Militar Nueva Granada - Bachelor of Multimedia Engineer' },
  ],
  skills: [
    'HTML/CSS/JS', 'SASS', 'Scrum', 'Confluence', 'JIRA', 'Zephyr', 'TestRail',
    'Java', 'TypeScript', 'Selenium 4', 'Playwright', 'WebDriverIO', 'Postman', 'Rest-assured', 'Axios',
    'MySQL', 'SQL', 'Git', 'Cypress', 'SerenityJS', 'GitHub', 'OOP', 'Page Object Model', 'Screenplay',
    'GitHub Actions', 'Azure Pipelines', 'Jenkins', 'Docker', 'Autodesk Maya', 'Blender',
  ],
};
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`

Expected: No errors.

- [ ] **Step 4: Commit**

```bash
git add src/data/projects.ts src/data/about.ts
git commit -m "feat: add typed data files for projects and bio"
```

---

## Task 4: Cursor Component

Replaces the vanilla JS cursor with `useMotionValue` + `useSpring` from Framer Motion. A wrapper element gets positioned by Framer Motion `x/y`, and the child element uses CSS `transform: translate(-50%, -50%)` to center itself at that position — avoiding transform conflicts between Framer Motion and CSS.

**Files:**
- Create: `src/components/Cursor.tsx`
- Create: `src/components/Cursor.module.css`
- Create: `src/components/Cursor.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
// src/components/Cursor.test.tsx
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Cursor from './Cursor';

describe('Cursor', () => {
  it('renders without crashing', () => {
    render(<Cursor />);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- Cursor`

Expected: FAIL — `Cannot find module './Cursor'`

- [ ] **Step 3: Create src/components/Cursor.module.css**

```css
.dotWrapper,
.outlineWrapper {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9950;
  mix-blend-mode: difference;
}

.dot {
  width: 0.5rem;
  height: 0.5rem;
  background-color: white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.outline {
  width: 2rem;
  height: 2rem;
  border: 0.2rem solid white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

@media screen and (max-width: 768px) {
  .dotWrapper,
  .outlineWrapper {
    display: none;
  }
}
```

- [ ] **Step 4: Create src/components/Cursor.tsx**

```tsx
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './Cursor.module.css';

export default function Cursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 400, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 40 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const handleOver = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest('a') || target.closest('button') || target.closest('label')) {
        setIsHovering(true);
      }
    };
    const handleOut = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest('a') || target.closest('button') || target.closest('label')) {
        setIsHovering(false);
      }
    };
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);
    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div className={styles.dotWrapper} style={{ x: mouseX, y: mouseY }}>
        <div className={styles.dot} />
      </motion.div>
      <motion.div className={styles.outlineWrapper} style={{ x: springX, y: springY }}>
        <motion.div
          className={styles.outline}
          animate={{ width: isHovering ? '5rem' : '2rem', height: isHovering ? '5rem' : '2rem' }}
          transition={{ duration: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
        />
      </motion.div>
    </>
  );
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npm test -- Cursor`

Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add src/components/Cursor.tsx src/components/Cursor.module.css src/components/Cursor.test.tsx
git commit -m "feat: add Cursor component with Framer Motion"
```

---

## Task 5: Preloader Component

Replaces `window.addEventListener('load', ...)` with a React `useEffect` + `AnimatePresence` exit animation.

**Files:**
- Create: `src/components/Preloader.tsx`
- Create: `src/components/Preloader.module.css`
- Create: `src/components/Preloader.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
// src/components/Preloader.test.tsx
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Preloader from './Preloader';

describe('Preloader', () => {
  it('renders without crashing', () => {
    render(<Preloader />);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- Preloader`

Expected: FAIL — `Cannot find module './Preloader'`

- [ ] **Step 3: Create src/components/Preloader.module.css**

```css
.preloader {
  position: fixed;
  z-index: 9900;
  background-color: #00060e;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.preloaderInner {
  width: 25rem;
  justify-content: space-between;
  display: flex;
}

.box {
  width: 3rem;
  height: 3rem;
  position: relative;
  display: block;
  transform-origin: -50% center;
  border-radius: 15%;
}

.box::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: lightblue;
  border-radius: 15%;
  box-shadow: 0px 0px 10px 0px rgba(28, 159, 255, 0.4);
}

.box:nth-child(1) {
  animation: slide 1.5s ease-in-out infinite alternate;
}
.box:nth-child(1)::after {
  animation: color-change 1.5s ease-in-out infinite alternate;
}
.box:nth-child(2) {
  animation: flip-1 1.5s ease-in-out infinite alternate;
}
.box:nth-child(2)::after {
  animation: squidge-1 1.5s ease-in-out infinite alternate;
  background-color: #1c9fff;
}
.box:nth-child(3) {
  animation: flip-2 1.5s ease-in-out infinite alternate;
}
.box:nth-child(3)::after {
  animation: squidge-2 1.5s ease-in-out infinite alternate;
  background-color: #1fb1fd;
}
.box:nth-child(4) {
  animation: flip-3 1.5s ease-in-out infinite alternate;
}
.box:nth-child(4)::after {
  animation: squidge-3 1.5s ease-in-out infinite alternate;
  background-color: #22c7fb;
}
.box:nth-child(5) {
  animation: flip-4 1.5s ease-in-out infinite alternate;
}
.box:nth-child(5)::after {
  animation: squidge-4 1.5s ease-in-out infinite alternate;
  background-color: #23d3fb;
}

@keyframes slide {
  0% { background-color: #1795ff; transform: translateX(0); }
  100% { background-color: #23d3fb; transform: translateX(calc(25rem - (3rem * 1.25))); }
}
@keyframes color-change {
  0% { background-color: #1795ff; }
  100% { background-color: #23d3fb; }
}
@keyframes flip-1 {
  0%, 15% { transform: rotate(0); }
  35%, 100% { transform: rotate(-180deg); }
}
@keyframes flip-2 {
  0%, 30% { transform: rotate(0); }
  50%, 100% { transform: rotate(-180deg); }
}
@keyframes flip-3 {
  0%, 45% { transform: rotate(0); }
  65%, 100% { transform: rotate(-180deg); }
}
@keyframes flip-4 {
  0%, 60% { transform: rotate(0); }
  80%, 100% { transform: rotate(-180deg); }
}
@keyframes squidge-1 {
  5% { transform-origin: center bottom; transform: scalex(1) scaley(1); }
  15% { transform-origin: center bottom; transform: scalex(1.3) scaley(0.7); }
  20%, 25% { transform-origin: center bottom; transform: scalex(0.8) scaley(1.4); }
  40% { transform-origin: center top; transform: scalex(1.3) scaley(0.7); }
  55%, 100% { transform-origin: center top; transform: scalex(1) scaley(1); }
}
@keyframes squidge-2 {
  20% { transform-origin: center bottom; transform: scalex(1) scaley(1); }
  30% { transform-origin: center bottom; transform: scalex(1.3) scaley(0.7); }
  35%, 40% { transform-origin: center bottom; transform: scalex(0.8) scaley(1.4); }
  55% { transform-origin: center top; transform: scalex(1.3) scaley(0.7); }
  70%, 100% { transform-origin: center top; transform: scalex(1) scaley(1); }
}
@keyframes squidge-3 {
  35% { transform-origin: center bottom; transform: scalex(1) scaley(1); }
  45% { transform-origin: center bottom; transform: scalex(1.3) scaley(0.7); }
  50%, 55% { transform-origin: center bottom; transform: scalex(0.8) scaley(1.4); }
  70% { transform-origin: center top; transform: scalex(1.3) scaley(0.7); }
  85%, 100% { transform-origin: center top; transform: scalex(1) scaley(1); }
}
@keyframes squidge-4 {
  50% { transform-origin: center bottom; transform: scalex(1) scaley(1); }
  60% { transform-origin: center bottom; transform: scalex(1.3) scaley(0.7); }
  65%, 70% { transform-origin: center bottom; transform: scalex(0.8) scaley(1.4); }
  85% { transform-origin: center top; transform: scalex(1.3) scaley(0.7); }
  100% { transform-origin: center top; transform: scalex(1) scaley(1); }
}
```

- [ ] **Step 4: Create src/components/Preloader.tsx**

```tsx
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Preloader.module.css';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hide = () => setIsVisible(false);
    if (document.readyState === 'complete') {
      hide();
    } else {
      window.addEventListener('load', hide);
      return () => window.removeEventListener('load', hide);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.preloader}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.preloaderInner}>
            <div className={styles.box} />
            <div className={styles.box} />
            <div className={styles.box} />
            <div className={styles.box} />
            <div className={styles.box} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npm test -- Preloader`

Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add src/components/Preloader.tsx src/components/Preloader.module.css src/components/Preloader.test.tsx
git commit -m "feat: add Preloader component with AnimatePresence"
```

---

## Task 6: Navbar Component

Replaces the CSS checkbox hack for mobile nav with `useState` + `AnimatePresence`.

**Files:**
- Create: `src/components/Navbar.tsx`
- Create: `src/components/Navbar.module.css`
- Create: `src/components/Navbar.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
// src/components/Navbar.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders brand link', () => {
    render(<Navbar />);
    expect(screen.getByText('Diegocortes15')).toBeInTheDocument();
  });

  it('renders desktop nav links', () => {
    render(<Navbar />);
    expect(screen.getAllByText('Start').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Work').length).toBeGreaterThan(0);
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- Navbar`

Expected: FAIL — `Cannot find module './Navbar'`

- [ ] **Step 3: Create src/components/Navbar.module.css**

```css
.navBar {
  padding: 1rem 1.5rem;
  position: absolute;
  display: flex;
  min-width: 100%;
  z-index: 1000;
  justify-content: space-between;
  align-items: center;
  background: #00070e;
  overflow: hidden;
  transition: all 0.5s;
}

.navBar::after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(0deg, rgba(0, 128, 255, 0.113) 0%, transparent 100%);
}

@media screen and (max-width: 768px) {
  .navBar {
    padding: 2rem 2rem;
    position: fixed;
  }
}

.bgVideo {
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  height: 100vh;
  z-index: -1;
  background-image: url(/images/bg-image-2.jpg);
}

.bgVideoContent {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.brand {
  color: white;
  z-index: 1500;
}

.navList {
  position: relative;
  display: flex;
  justify-content: flex-end;
  gap: 3rem;
  z-index: 1500;
}

@media screen and (max-width: 768px) {
  .navList {
    display: none;
  }
}

.navLink {
  color: #f7f7f7;
  font-size: 2.2rem;
  display: inline-block;
  background-size: 225%;
  background-image: linear-gradient(120deg, transparent 0%, transparent 50%, transparent 0%);
  transition: all 0.3s;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}

.navLink:hover,
.navLink:active,
.navLink:focus {
  background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 0%);
  outline: none;
  background-position: 100%;
  color: #00070d;
  transform: translateX(0.5rem);
}

.menuButton {
  position: relative;
  display: none;
  z-index: 1500;
  color: white;
  background: none;
  border: none;
  padding: 0;
  align-items: center;
  width: 3rem;
  height: 3rem;
}

.menuButton:hover {
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .menuButton {
    display: flex;
  }
}

.menuIcon,
.menuIcon::before,
.menuIcon::after {
  display: inline-block;
  width: 3rem;
  height: 0.3rem;
  background-color: rgb(255, 255, 255);
  border-radius: 10rem;
  transition: all 0.3s ease;
}

.menuIcon {
  position: relative;
}

.menuIcon::before {
  content: '';
  position: absolute;
  top: -1rem;
}

.menuIcon::after {
  content: '';
  position: absolute;
  top: 1rem;
}

.menuButton:hover .menuIcon::before { top: -1.3rem; }
.menuButton:hover .menuIcon::after { top: 1.3rem; }

.menuIconOpen { background-color: transparent; }
.menuIconOpen::before { top: 0; transform: rotate(135deg); }
.menuIconOpen::after { top: 0; transform: rotate(-135deg); }

.mobileOverlay {
  height: 100vh;
  position: fixed;
  width: 100%;
  z-index: 1400;
  top: 0;
  left: 0;
  overflow: hidden;
}

.mobileVideoBg {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 0;
  object-fit: cover;
  background-image: url(/images/bg-image-2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.mobileList {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  height: 100vh;
  position: relative;
  z-index: 1;
}

.mobileLink {
  display: inline-block;
  padding: 1rem 4rem;
  color: white;
  background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 0%);
  background-size: 225%;
  text-transform: uppercase;
  transition: all 0.5s ease;
}

.mobileLink:hover,
.mobileLink:focus,
.mobileLink:active {
  outline: none;
  background-position: 100%;
  color: #00070d;
  transform: translateX(0.5rem);
}
```

- [ ] **Step 4: Create src/components/Navbar.tsx**

```tsx
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Start', href: '#start' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={styles.navBar}>
      <div className={styles.bgVideo}>
        <video
          className={styles.bgVideoContent}
          preload="auto"
          poster="/images/bg-image-2.jpg"
          autoPlay
          muted
          loop
        >
          <source src="/video/bg-video-2.mp4" type="video/mp4" />
        </video>
      </div>

      <a href="https://github.com/Diegocortes15/" target="_blank" rel="noreferrer" className={styles.brand}>
        <i className="fa-brands fa-github" /> Diegocortes15
      </a>

      <ul className={styles.navList}>
        {navLinks.map(({ label, href }) => (
          <li key={label}>
            <a className={styles.navLink} href={href}>{label}</a>
          </li>
        ))}
      </ul>

      <button
        className={styles.menuButton}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <span className={`${styles.menuIcon} ${isOpen ? styles.menuIconOpen : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '100%' }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.5, ease: [0.68, -0.55, 0.265, 1.55] }}
          >
            <video className={styles.mobileVideoBg} autoPlay muted loop>
              <source src="/video/bg-video-2.mp4" type="video/mp4" />
            </video>
            <ul className={styles.mobileList}>
              {navLinks.map(({ label, href }, i) => (
                <li key={label}>
                  <a className={styles.mobileLink} href={href} onClick={closeMenu}>
                    0{i + 1} {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npm test -- Navbar`

Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add src/components/Navbar.tsx src/components/Navbar.module.css src/components/Navbar.test.tsx
git commit -m "feat: add Navbar component with AnimatePresence mobile menu"
```

---

## Task 7: Header Component

Replaces the CSS `@keyframes spin-rol_words` cycling animation with `AnimatePresence` key-based word swap.

**Files:**
- Create: `src/components/Header.tsx`
- Create: `src/components/Header.module.css`
- Create: `src/components/Header.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
// src/components/Header.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';

describe('Header', () => {
  it('renders heading with name', () => {
    render(<Header />);
    expect(screen.getByText(/Diego Cortés/)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- Header`

Expected: FAIL — `Cannot find module './Header'`

- [ ] **Step 3: Create src/components/Header.module.css**

```css
.header {
  overflow: hidden;
}

.hero {
  height: 100vh;
  min-height: 5.6rem;
  position: relative;
  background-color: #00070d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bgVideoWrap {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 100;
}

.bgVideo {
  height: 100%;
  width: 100%;
  background-image: url(/images/bg-image-2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
}

.content {
  z-index: 200;
  padding: 0 1.5rem;
  margin-top: 7.3rem;
}

.title {
  font-size: 4.8rem;
}

@media screen and (max-width: 990px) {
  .title {
    font-size: 3.8rem;
  }
}

@media screen and (max-width: 568px) {
  .title {
    font-size: 3rem;
  }
}

.titleDescription {
  color: #8e979f;
}

.rolContainer {
  height: 8.5rem;
  overflow: hidden;
  position: relative;
}

@media screen and (max-width: 1050px) {
  .rolContainer {
    height: 13rem;
  }
}

@media screen and (max-width: 568px) {
  .rolContainer {
    height: 9rem;
  }
}

.rolWord {
  display: block;
  position: absolute;
  width: 100%;
}
```

- [ ] **Step 4: Create src/components/Header.tsx**

```tsx
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Header.module.css';

const roles = ['QA Automation Engineer', 'Multimedia Engineer', 'QA Engineer'];

export default function Header() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={styles.header} id="start">
      <section className={styles.hero}>
        <div className={styles.bgVideoWrap}>
          <video
            className={styles.bgVideo}
            preload="auto"
            autoPlay
            muted
            loop
          >
            <source src="/video/bg-video-2.mp4" type="video/mp4" />
          </video>
        </div>

        <div className={`${styles.content} container`}>
          <div className="timeline timeline--alt">
            <div className="bullet" />
          </div>
          <div className="section__title">
            <small>Start</small>
          </div>

          <h1 className={`margin-bottom-15 ${styles.title}`}>
            Hi, my name is <span className="primary-color">Diego Cortés</span>
          </h1>

          <h1 className={`margin-bottom-15 ${styles.title}`}>
            <div className={styles.rolContainer}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  className={styles.rolWord}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>

          <p className={`${styles.titleDescription}`}>Let me show you...</p>
        </div>

        <a href="#work" className="down-arrow" tabIndex={0} />
      </section>
    </header>
  );
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npm test -- Header`

Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add src/components/Header.tsx src/components/Header.module.css src/components/Header.test.tsx
git commit -m "feat: add Header component with AnimatePresence role cycling"
```

---

## Task 8: ProjectCard Component

Replaces the `mousemove` 3D tilt and `IntersectionObserver` scroll-reveal with Framer Motion `useMotionValue` + `useTransform` and `whileInView`.

**Files:**
- Create: `src/components/ProjectCard.tsx`
- Create: `src/components/ProjectCard.module.css`
- Create: `src/components/ProjectCard.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
// src/components/ProjectCard.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectCard from './ProjectCard';
import type { Project } from '../data/projects';

const mockProject: Project = {
  id: 0,
  title: 'Test\nProject',
  category: 'automation',
  frameworkIcon: '/images/selenium-logo.png',
  screenshot: '/images/saucelabs.jpg',
  url: 'https://example.com',
  type: 'web',
  width: '33',
};

describe('ProjectCard', () => {
  it('renders the project index', () => {
    render(<ProjectCard project={mockProject} index={0} />);
    expect(screen.getByText('00')).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- ProjectCard`

Expected: FAIL — `Cannot find module './ProjectCard'`

- [ ] **Step 3: Create src/components/ProjectCard.module.css**

```css
.project {
  position: relative;
  display: flex;
  justify-content: center;
}

.project33 {
  max-width: 33.333333%;
  flex: 0 0 33.333333%;
}

.project50 {
  max-width: 50%;
  flex: 0 0 50%;
}

.projectBox {
  position: relative;
  display: block;
  z-index: 900;
  transform-style: preserve-3d;
  will-change: transform;
}

.projectBox::before {
  background-image: linear-gradient(65deg, hsla(210, 50%, 7%, 0.9), transparent 50%);
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 400;
  border-radius: inherit;
}

.projectBox:hover {
  box-shadow: 0.4rem 2.1rem 4.4rem -1.3rem rgba(0, 0, 0, 0.75);
  z-index: 950;
}

.projectBox:focus {
  outline: none;
  box-shadow: 0.4rem 2.1rem 4.4rem -1.3rem rgba(0, 0, 0, 0.75);
  z-index: 950;
}

.web {
  min-width: 41rem;
  height: 23rem;
}

.mobile {
  min-width: 23rem;
  max-height: 41rem;
}

.meta {
  position: absolute;
  pointer-events: none;
  left: -8rem;
  bottom: 1rem;
  margin-bottom: 4.5rem;
  display: inline-block;
  z-index: 500;
  transform: translateZ(4rem);
  transition: all 0.1s;
  color: white;
  line-height: 1.2;
  font-size: 2rem;
}

.nav {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.6rem;
}

.navArrow {
  transition: all 0.4s;
}

.projectBox:hover .navArrow {
  transform: translateX(1.5rem);
}

.sut {
  object-fit: cover;
  object-position: center center;
  min-width: inherit;
  width: inherit;
  height: inherit;
  max-height: inherit;
  border-radius: inherit;
}

.frameworkIcon {
  position: absolute;
  pointer-events: none;
  width: 5rem;
  border-radius: 0.5rem;
  top: 5rem;
  right: -1.5rem;
  z-index: 500;
  transform: translateZ(3rem);
}

@media screen and (max-width: 1024px) {
  .project {
    max-width: 83.333333%;
    flex: 0 0 83.333333%;
    margin: 0 auto;
  }

  .projectBox {
    margin: 0 !important;
    width: 23rem;
    min-width: 20rem;
    display: flex;
    justify-content: center;
    margin-left: 10rem !important;
  }

  .web {
    height: 17rem;
  }
}
```

- [ ] **Step 4: Create src/components/ProjectCard.tsx**

```tsx
import { useMotionValue, useTransform, motion } from 'framer-motion';
import type { Project } from '../data/projects';
import styles from './ProjectCard.module.css';

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-15, 15]);

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const widthClass = project.width === '33' ? styles.project33 : styles.project50;
  const typeClass = project.type === 'web' ? styles.web : styles.mobile;

  return (
    <div className={`${styles.project} ${widthClass}`}>
      <motion.a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className={`${styles.projectBox} ${typeClass}`}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1120,
          marginTop: project.offsetTop ? `${project.offsetTop}rem` : undefined,
          marginLeft: project.offsetLeft ? `${project.offsetLeft}rem` : undefined,
          marginRight: project.offsetRight ? `${project.offsetRight}rem` : undefined,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, x: -100, filter: 'blur(5px)' }}
        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.meta}>
          <h3>
            {project.title.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h3>
          <div className="divider" />
          <div className={styles.nav}>
            <div>{String(index).padStart(2, '0')}</div>
            <div className={styles.navArrow}>→</div>
          </div>
        </div>

        {project.frameworkIcon && (
          <img
            className={styles.frameworkIcon}
            src={project.frameworkIcon}
            alt={project.title}
            loading="lazy"
          />
        )}

        <img
          className={styles.sut}
          src={project.screenshot}
          alt={project.title}
          loading="lazy"
        />
      </motion.a>
    </div>
  );
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npm test -- ProjectCard`

Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add src/components/ProjectCard.tsx src/components/ProjectCard.module.css src/components/ProjectCard.test.tsx
git commit -m "feat: add ProjectCard with Framer Motion 3D tilt and scroll reveal"
```

---

## Task 9: Work Component

Maps `projects.ts` to render two groups of `ProjectCard` (automation and web).

**Files:**
- Create: `src/components/Work.tsx`
- Create: `src/components/Work.module.css`
- Create: `src/components/Work.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
// src/components/Work.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Work from './Work';

describe('Work', () => {
  it('renders section heading', () => {
    render(<Work />);
    expect(screen.getByText(/Selected Web/)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- Work`

Expected: FAIL — `Cannot find module './Work'`

- [ ] **Step 3: Create src/components/Work.module.css**

```css
.work {
  background: linear-gradient(180deg, #00070d 0%, #041523 88%, #00070d 99%);
  overflow: hidden;
  position: relative;
}

.projects {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  z-index: 300;
  justify-content: center;
}

.automationMark {
  position: relative;
}

.automationMark::before {
  position: absolute;
  content: 'SDET';
  top: -12rem;
  right: -1rem;
  font-size: 27rem;
  color: #0c2a43;
  font-weight: 700;
}

.webMark {
  position: relative;
  margin-top: 30rem;
}

.webMark::before {
  position: absolute;
  content: 'WEB';
  top: -30rem;
  right: -1rem;
  font-size: 27rem;
  color: #0c2a43;
  font-weight: 700;
}

@media screen and (max-width: 1024px) {
  .automationMark::before,
  .webMark::before {
    font-size: 10rem;
  }

  .automationMark::before {
    top: -13rem;
  }

  .webMark::before {
    top: -13rem;
  }

  .projects {
    flex-direction: column;
    row-gap: 10rem;
    margin-top: 8rem;
  }
}
```

- [ ] **Step 4: Create src/components/Work.tsx**

```tsx
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import styles from './Work.module.css';

export default function Work() {
  const automation = projects.filter((p) => p.category === 'automation');
  const web = projects.filter((p) => p.category === 'web');

  return (
    <section className={styles.work} id="work">
      <div className="container">
        <div className="timeline timeline--alt" />
        <div className="section__header">
          <div className="section__title bullet__title">
            <small>Work</small>
          </div>
          <h2 className="section__title__description">
            Selected Web &amp; Automation Frameworks...
          </h2>
        </div>
      </div>

      <ul className={`${styles.projects} ${styles.automationMark}`}>
        {automation.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </ul>

      <ul className={`${styles.projects} ${styles.webMark}`}>
        {web.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </ul>

      <a href="#about" className="down-arrow" tabIndex={0} />
    </section>
  );
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npm test -- Work`

Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add src/components/Work.tsx src/components/Work.module.css src/components/Work.test.tsx
git commit -m "feat: add Work section component"
```

---

## Task 10: About Component

Renders the code-block bio using data from `about.ts`. Line numbers come from a counter incremented per JSX line.

**Files:**
- Create: `src/components/About.tsx`
- Create: `src/components/About.module.css`
- Create: `src/components/About.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
// src/components/About.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from './About';

describe('About', () => {
  it('renders the class definition', () => {
    render(<About />);
    expect(screen.getByText('DiegoCortes')).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- About`

Expected: FAIL — `Cannot find module './About'`

- [ ] **Step 3: Create src/components/About.module.css**

```css
.about {
  background: linear-gradient(180deg, #000811 90%, #000408 99%);
  position: relative;
}

.codeWrap {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.8rem;
}

.codeLine {
  position: relative;
  z-index: 500;
  line-height: 1.45;
}

.codeLine::after {
  position: absolute;
  content: attr(data-line-nr);
  left: -6rem;
  top: 0;
  width: 2.4rem;
  display: flex;
  flex-direction: row-reverse;
}

.codeDot {
  display: inline;
  color: transparent;
}

.codeMath { color: #ff0062; display: inline; }
.codeMethods { color: #ff0062; display: inline; }
.codeClassName { color: #ffcb6b; display: inline; }
.codeBracket1 { color: #ffd70e; display: inline; }
.codeBracket2 { color: #cc70d6; display: inline; }
.codeBracket3 { color: #109ff2; display: inline; }
.codeScope { color: #ff5370; display: inline; }
.codeProp { color: #f0716c; display: inline; }
.codeString { color: #00ff4c; display: inline; overflow-wrap: break-word; }
.codeMthd { color: #1becdb; display: inline; }

.cursor::before {
  content: '|';
  color: white;
  animation: blink 1s infinite ease;
}

@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}
```

- [ ] **Step 4: Create src/components/About.tsx**

```tsx
import { about } from '../data/about';
import styles from './About.module.css';

export default function About() {
  let n = 0;
  const ln = () => String(++n);

  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className="timeline" />
        <div className="section__header">
          <div className="section__title bullet__title">
            <small>About</small>
          </div>
        </div>
        <div className="section__content">
          <div className={styles.codeWrap}>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeMethods}>class</span>{' '}
              <span className={styles.codeClassName}>
                DiegoCortes{' '}
                <span className={styles.codeBracket1}>{'{'}</span>
              </span>
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'··'}</span>
              <span className={styles.codeMethods}>
                constructor<span className={styles.codeBracket2}>{'() {'}</span>
              </span>
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'····'}</span>
              <span className={styles.codeScope}>this</span>.
              <span className={styles.codeProp}>name</span>
              <span className={styles.codeMath}> = </span>
              <span className={styles.codeString}>'{about.name}'</span>;
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'····'}</span>
              <span className={styles.codeScope}>this</span>.
              <span className={styles.codeProp}>dayOfBirthstamp</span>
              <span className={styles.codeMath}> = </span>
              <span className={styles.codeString}>{about.dob}</span>;
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'····'}</span>
              <span className={styles.codeScope}>this</span>.
              <span className={styles.codeProp}>email</span>
              <span className={styles.codeMath}> = </span>
              <span className={styles.codeString}>'{about.email}'</span>;
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'··'}</span>
              <span className={styles.codeBracket2}>{'}'}</span>
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>&nbsp;</div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'··'}</span>
              <span className={styles.codeMthd}>
                workExperience<span className={styles.codeBracket2}>{'() {'}</span>
              </span>
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'····'}</span>
              <span className={styles.codeMethods}>return</span>{' '}
              <span className={styles.codeBracket3}>{'['}</span>
            </div>

            {about.experience.map((exp) => (
              <div key={exp.period} data-line-nr={ln()} className={styles.codeLine}>
                <span className={styles.codeDot}>{'······'}</span>
                <span className={styles.codeBracket1}>{'{'}</span>
                <span className={styles.codeString}>'{exp.period}'</span>
                {' : '}
                <span className={styles.codeString}>'{exp.role}'</span>
                <span className={styles.codeBracket1}>{' }'}</span>
              </div>
            ))}

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'····'}</span>
              <span className={styles.codeBracket3}>{']'}</span>
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'··'}</span>
              <span className={styles.codeBracket2}>{'}'}</span>
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>&nbsp;</div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'··'}</span>
              <span className={styles.codeMthd}>
                education<span className={styles.codeBracket2}>{'() {'}</span>
              </span>
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'····'}</span>
              <span className={styles.codeMethods}>return</span>{' '}
              <span className={styles.codeBracket3}>{'['}</span>
            </div>

            {about.education.map((edu) => (
              <div key={edu.title} data-line-nr={ln()} className={styles.codeLine}>
                <span className={styles.codeDot}>{'······'}</span>
                <span className={styles.codeBracket1}>{'{ '}</span>
                <span className={styles.codeString}>'{edu.year}'</span>
                {' : '}
                <span className={styles.codeString}>'{edu.title}'</span>
                <span className={styles.codeBracket1}>{' },'}</span>
              </div>
            ))}

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'····'}</span>
              <span className={styles.codeBracket3}>{']'}</span>
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'··'}</span>
              <span className={styles.codeBracket2}>{'}'}</span>
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>&nbsp;</div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'··'}</span>
              <span className={styles.codeMthd}>
                skills<span className={styles.codeBracket2}>{'() {'}</span>
              </span>
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'····'}</span>
              <span className={styles.codeMethods}>return</span>{' '}
              <span className={styles.codeBracket3}>{'['}</span>
              <span className={styles.codeString}>
                {about.skills.map((s) => `'${s}'`).join(', ')}
              </span>
              <span className={styles.codeBracket3}>
                {' '}
                <span className={styles.cursor} />
                {']'}
              </span>
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeDot}>{'··'}</span>
              <span className={styles.codeBracket2}>{'}'}</span>
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>
              <span className={styles.codeBracket1}>{'}'}</span>
            </div>

            <div data-line-nr={ln()} className={styles.codeLine}>&nbsp;</div>

          </div>
        </div>
      </div>
      <a href="#contact" className="down-arrow" tabIndex={0} />
    </section>
  );
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npm test -- About`

Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add src/components/About.tsx src/components/About.module.css src/components/About.test.tsx
git commit -m "feat: add About component with data-driven code block"
```

---

## Task 11: Contact Component

**Files:**
- Create: `src/components/Contact.tsx`
- Create: `src/components/Contact.module.css`
- Create: `src/components/Contact.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
// src/components/Contact.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Contact from './Contact';

describe('Contact', () => {
  it('renders LinkedIn link', () => {
    render(<Contact />);
    expect(screen.getByText('in/diegocortesroa/')).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- Contact`

Expected: FAIL — `Cannot find module './Contact'`

- [ ] **Step 3: Create src/components/Contact.module.css**

```css
.footer {
  background-color: #000408;
}

.socialContent {
  margin-top: 10rem;
}

.socialTitle {
  font-size: 2.25rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.contactList {
  display: flex;
  flex-direction: column;
}

.contactItem {
  display: inline;
  overflow-wrap: break-word;
  margin: 0.2rem 0;
}

.contactLink {
  color: hwb(193 0% 21%);
  font-size: 2rem;
}

.contactIcon {
  width: 2.2rem;
  margin-right: 0.9rem;
}

.copy {
  padding-left: 1.5rem;
  padding-bottom: 1.5rem;
  font-size: 1.4rem;
  color: #8e979f;
}
```

- [ ] **Step 4: Create src/components/Contact.tsx**

```tsx
import styles from './Contact.module.css';

const socials = [
  {
    label: 'in/diegocortesroa/',
    href: 'https://www.linkedin.com/in/diegocortesroa/',
    icon: 'fa-brands fa-linkedin-in',
  },
  {
    label: 'Diegocortes15',
    href: 'https://github.com/Diegocortes15',
    icon: 'fa-brands fa-github',
  },
];

export default function Contact() {
  return (
    <footer className={styles.footer} id="contact">
      <div className="footer__content container">
        <div className="timeline" />
        <div className="section__header">
          <div className="section__title bullet__title">
            <small>Contact</small>
          </div>
        </div>
        <div className={`section__content ${styles.socialContent}`}>
          <h2 className={styles.socialTitle}>Find me on:</h2>
          <ul className={styles.contactList}>
            {socials.map(({ label, href, icon }) => (
              <li key={label} className={styles.contactItem}>
                <a className={styles.contactLink} href={href} target="_blank" rel="noreferrer">
                  <i className={`${icon} ${styles.contactIcon}`} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.copy}>
          <small>© Made by Diego Cortés. Circa 2025.</small>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npm test -- Contact`

Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add src/components/Contact.tsx src/components/Contact.module.css src/components/Contact.test.tsx
git commit -m "feat: add Contact footer component"
```

---

## Task 12: Assemble App.tsx and Full Browser Verification

Wire all components together and verify the full page looks identical to the original.

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Replace src/App.tsx stub with full composition**

```tsx
import Cursor from './components/Cursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Cursor />
      <Preloader />
      <Navbar />
      <Header />
      <main>
        <Work />
        <About />
      </main>
      <Contact />
    </>
  );
}
```

- [ ] **Step 2: Run the full test suite**

Run: `npm test`

Expected: All tests pass.

- [ ] **Step 3: Start dev server and visually verify**

Run: `npm run dev`

Open `http://localhost:5173` and check each section:
- Preloader animates, then fades out
- Nav background video plays; desktop links visible; mobile hamburger toggles overlay
- Hero: name displays, role word cycles through "QA Automation Engineer", "Multimedia Engineer", "QA Engineer"
- Custom cursor follows mouse (dot instant, outline with spring lag); expands on hover over links
- Work section: all 13 project cards visible, staggered layout preserved; 3D tilt on hover; scroll-reveal on scroll
- About: code block with correct line numbers, blinking cursor in skills line
- Contact: LinkedIn and GitHub links present

- [ ] **Step 4: TypeScript compile check**

Run: `npx tsc --noEmit`

Expected: No errors.

- [ ] **Step 5: Commit**

```bash
git add src/App.tsx
git commit -m "feat: assemble App.tsx with all components"
```

---

## Task 13: Remove Old Vanilla Files

**Files:**
- Delete: `src/index.html`, `src/app.js`, `src/styles.css`
- Delete: `src/images/` (moved to `public/images/`)
- Delete: `src/video/` (moved to `public/video/`)
- Delete: `.github/workflows/main.yml`

- [ ] **Step 1: Verify public assets are complete before deleting originals**

Run:
```bash
ls public/images/
ls public/video/
```

Expected: All image files present in `public/images/` and `bg-video-2.mp4` in `public/video/`.

- [ ] **Step 2: Remove old vanilla source files**

Run:
```bash
rm src/index.html src/app.js src/styles.css
rm -rf src/images/ src/video/
rm .github/workflows/main.yml
```

- [ ] **Step 3: Verify dev server still works after deletion**

Run: `npm run dev`

Expected: App loads correctly at `http://localhost:5173` with no missing assets.

- [ ] **Step 4: Verify build succeeds**

Run: `npm run build`

Expected: `dist/` folder generated with no errors. `tsc` and Vite build both pass.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: remove old vanilla HTML/CSS/JS files after React migration"
```

---

## Task 14: Connect Vercel and Deploy

- [ ] **Step 1: Push to GitHub**

Run:
```bash
git push origin main
```

- [ ] **Step 2: Create Vercel account and import project**

1. Go to https://vercel.com and sign up with your GitHub account
2. Click "Add New Project"
3. Find and import the `portfolio` repository
4. Vercel auto-detects Vite — Framework Preset: `Vite`, Build Command: `npm run build`, Output Directory: `dist`
5. Click "Deploy"

Expected: First deployment completes, Vercel provides a live URL (e.g., `portfolio-diegocortes.vercel.app`).

- [ ] **Step 3: Verify live deployment**

Open the Vercel URL and check:
- All sections load correctly
- Video backgrounds play
- Animations work (cursor, preloader, project cards, role cycling)
- No 404s in the browser console

- [ ] **Step 4: (Optional) Configure custom domain**

In Vercel dashboard → Project → Settings → Domains — add your custom domain if you have one.

- [ ] **Step 5: Final commit confirming deployment**

```bash
git commit --allow-empty -m "chore: project live on Vercel"
```
