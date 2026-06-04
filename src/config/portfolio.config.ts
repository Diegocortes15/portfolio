/* ============================================================================
 * portfolio.config.ts — SINGLE SOURCE OF TRUTH for all site content.
 * ----------------------------------------------------------------------------
 * Everything the page renders lives here: UI copy (EN/ES), the skills matrix,
 * featured projects + their architecture breakdowns, the experience timeline,
 * the "browse all" GitHub repos, contact links, and the accent palettes.
 *
 * HOW TO EDIT (no component code required):
 *   • Text in two languages → use a `{ en, es }` object (typed as Localized<T>).
 *   • Icons → pass a glyph name (string). It maps to a lucide-react icon in
 *     src/components/Icon/Icon.tsx. Add new names to that map as needed.
 *   • Tool/brand logos → drop a PNG in `public/logos/` and reference
 *     `/logos/<file>.png`.
 *   • Reorder or add cards/rows by editing the arrays below — order is preserved.
 * ========================================================================== */

export type Lang = "en" | "es";

/** A value provided in both supported languages. */
export interface Localized<T> {
  en: T;
  es: T;
}

/* ----------------------------------------------------------------------------
 * UI dictionary — short interface strings, per language.
 * `Dict` is inferred from the English shape so both languages stay in sync.
 * -------------------------------------------------------------------------- */
const en = {
  nav: { work: "work", skills: "skills", experience: "experience", contact: "contact" },
  navLabel: "Contact",
  boot: {
    cmd: "npm test -- --portfolio",
    running: "RUNNING",
    suites: "Test Suites",
    tests: "Tests",
    time: "Time",
    passed: "passed",
    ready: "Suite passed. Booting portfolio…",
    skip: "skip intro →",
    compiling: "compiling…",
  },
  hero: {
    status: "all systems green",
    deploy: "deployed",
    h1a: "Diego",
    h1b: "Cortes",
    role1: "QA Automation Engineer",
    role2: "SDET",
    roleSub: "Web UI Automation · API · AI workflow",
    about:
      "QA Software Engineer with experience in test automation for business insurance and media services applications. Skilled in creating automated test cases, improving test coverage, and working closely with teams to make testing faster and more reliable. Always looking to learn new skills and find better ways to help improve product quality and team processes.",
    loc: "Bogotá, Colombia",
    ctaWork: "View Work",
    ctaContact: "Contact",
    specialty: "Web UI Automation specialist",
    termTitle: "diego@qa: ~/portfolio",
    stats: [
      { n: "Web", u: "UI", l: "primary specialty" },
      { n: "3+", u: "yrs", l: "in test automation" },
      { n: "AI", u: "·", l: "driven workflow" },
    ],
  },
  skills: {
    kicker: "// 02_skills",
    title: "Skills & Frameworks",
    sub: "My core strength is web UI automation — driving browsers end-to-end. Around it sit mobile testing, API automation, an AI-assisted workflow, and the CI/CD plumbing that keeps every suite green.",
    primary: "PRIMARY SPECIALTY",
  },
  projects: {
    kicker: "// 03_projects",
    title: "Featured Projects",
    sub: "Automation frameworks built for the Saucedemo suite — engineered to make testing as autonomous as possible.",
    open: "Open case file",
    viewRepo: "View repository",
    archTitle: "Architecture",
    flagship: "FLAGSHIP",
    browseAll: "Browse all frameworks",
    moreCount: "7 more repos",
    moreTitle: "More automation frameworks",
    moreSub: "Open-source repositories on GitHub — UI, mobile and API suites across Selenium, Appium, Playwright, Cypress and Rest-assured.",
    viewOn: "View on GitHub",
  },
  experience: {
    kicker: "// 04_experience",
    title: "Experience",
    sub: "A run log, most recent first. Expand any node to read the detail.",
    eduLabel: "Multimedia Engineer — Universidad Militar Nueva Granada, Bogotá",
  },
  contact: {
    kicker: "// 05_contact",
    title: "Let's make quality faster.",
    sub: "Open to QA automation & SDET roles. The quickest way to reach me is below.",
  },
  footer: {
    built: "built with Playwright-grade attention to detail",
    allpass: "all tests passing",
    rights: "© 2026 Diego Cortes",
  },
};

const es: typeof en = {
  nav: { work: "trabajo", skills: "skills", experience: "experiencia", contact: "contacto" },
  navLabel: "Contacto",
  boot: {
    cmd: "npm test -- --portfolio",
    running: "EJECUTANDO",
    suites: "Suites de prueba",
    tests: "Pruebas",
    time: "Tiempo",
    passed: "aprobadas",
    ready: "Suite aprobada. Iniciando portafolio…",
    skip: "saltar intro →",
    compiling: "compilando…",
  },
  hero: {
    status: "todo en verde",
    deploy: "desplegado",
    h1a: "Diego",
    h1b: "Cortes",
    role1: "Ingeniero de Automatización QA",
    role2: "SDET",
    roleSub: "Automatización UI Web · API · flujo IA",
    about:
      "Ingeniero de Software QA con experiencia en automatización de pruebas para aplicaciones de seguros empresariales y servicios de medios. Hábil en crear casos de prueba automatizados, mejorar la cobertura y trabajar en equipo para hacer las pruebas más rápidas y confiables. Siempre buscando aprender nuevas habilidades y encontrar mejores formas de mejorar la calidad del producto y los procesos del equipo.",
    loc: "Bogotá, Colombia",
    ctaWork: "Ver Trabajo",
    ctaContact: "Contacto",
    specialty: "Especialista en automatización UI web",
    termTitle: "diego@qa: ~/portafolio",
    stats: [
      { n: "Web", u: "UI", l: "especialidad principal" },
      { n: "3+", u: "años", l: "en automatización" },
      { n: "IA", u: "·", l: "flujo asistido" },
    ],
  },
  skills: {
    kicker: "// 02_skills",
    title: "Habilidades & Frameworks",
    sub: "Mi fortaleza principal es la automatización UI web — manejar navegadores de extremo a extremo. Alrededor están las pruebas móviles, la automatización API, un flujo asistido por IA, y el CI/CD que mantiene cada suite en verde.",
    primary: "ESPECIALIDAD PRINCIPAL",
  },
  projects: {
    kicker: "// 03_proyectos",
    title: "Proyectos Destacados",
    sub: "Frameworks de automatización para la suite Saucedemo — diseñados para hacer las pruebas lo más autónomas posible.",
    open: "Abrir expediente",
    viewRepo: "Ver repositorio",
    archTitle: "Arquitectura",
    flagship: "INSIGNIA",
    browseAll: "Ver todos los frameworks",
    moreCount: "7 repos más",
    moreTitle: "Más frameworks de automatización",
    moreSub: "Repositorios open-source en GitHub — suites de UI, móvil y API con Selenium, Appium, Playwright, Cypress y Rest-assured.",
    viewOn: "Ver en GitHub",
  },
  experience: {
    kicker: "// 04_experiencia",
    title: "Experiencia",
    sub: "Un registro de ejecución, lo más reciente primero. Expande cualquier nodo para ver el detalle.",
    eduLabel: "Ingeniero Multimedia — Universidad Militar Nueva Granada, Bogotá",
  },
  contact: {
    kicker: "// 05_contacto",
    title: "Hagamos la calidad más rápida.",
    sub: "Abierto a roles de automatización QA y SDET. La forma más rápida de contactarme está abajo — sin formularios, solo enlaces directos.",
  },
  footer: {
    built: "hecho con atención al detalle de nivel Playwright",
    allpass: "todas las pruebas pasan",
    rights: "© 2026 Diego Cortes",
  },
};

/** Shape of the UI dictionary (inferred from the English copy). */
export type Dict = typeof en;

/** All UI copy, keyed by language. */
export const dictionary: Record<Lang, Dict> = { en, es };

/* ----------------------------------------------------------------------------
 * Preloader — the "npm test" boot sequence (file → test count → ms).
 * -------------------------------------------------------------------------- */
export interface BootLine {
  file: string;
  n: number;
  ms: number;
}

export const boot: BootLine[] = [
  { file: "hero.spec.ts", n: 3, ms: 41 },
  { file: "skills.spec.ts", n: 5, ms: 88 },
  { file: "projects.spec.ts", n: 6, ms: 124 },
  { file: "experience.spec.ts", n: 4, ms: 73 },
  { file: "contact.spec.ts", n: 3, ms: 29 },
  { file: "a11y.spec.ts", n: 7, ms: 65 },
];

/* ----------------------------------------------------------------------------
 * Skills matrix.
 *   • `img` → tool logo in /logos/  (set `tile: true` for a bordered tile).
 *   • `gl`  → lucide glyph name (see Icon.tsx).
 *   • `span` → grid width: "col-4" | "col-6" | "col-8" | "col-12".
 * -------------------------------------------------------------------------- */
export interface SkillItem {
  l: string;
  img?: string;
  tile?: boolean;
  gl?: string;
}

export interface SkillGroup {
  key: string;
  idx: string;
  featured?: boolean;
  title: Localized<string>;
  span: "col-4" | "col-6" | "col-8" | "col-12";
  blurb?: Localized<string>;
  note?: Localized<string>;
  items: SkillItem[];
}

export const skills: SkillGroup[] = [
  {
    key: "ui",
    idx: "01",
    featured: true,
    title: { en: "Web UI Automation", es: "Automatización UI Web" },
    span: "col-12",
    blurb: {
      en: "My core strength — end-to-end browser automation.",
      es: "Mi fortaleza principal — automatización de navegador de extremo a extremo.",
    },
    items: [
      { l: "Playwright", img: "/logos/playwright.png", tile: true },
      { l: "Selenium", img: "/logos/selenium.png", tile: true },
      { l: "WebdriverIO", img: "/logos/webdriverio.png", tile: true },
      { l: "Cypress", img: "/logos/cypress.png", tile: true },
      { l: "Serenity/JS", img: "/logos/serenity.png", tile: true },
      { l: "Page Object Model", gl: "layers" },
      { l: "Screenplay", gl: "play" },
    ],
  },
  {
    key: "mobile",
    idx: "02",
    title: { en: "Mobile UI", es: "UI Móvil" },
    span: "col-4",
    note: { en: "experience", es: "experiencia" },
    items: [
      { l: "Appium", img: "/logos/appium.png", tile: true },
      { l: "Android", gl: "cpu" },
    ],
  },
  {
    key: "api",
    idx: "03",
    title: { en: "API Automation", es: "Automatización API" },
    span: "col-8",
    note: { en: "experience", es: "experiencia" },
    items: [
      { l: "Rest-assured", gl: "flask" },
      { l: "Postman", gl: "zap" },
      { l: "Axios", gl: "code" },
      { l: "SQL", gl: "db" },
    ],
  },
  {
    key: "ai",
    idx: "04",
    title: { en: "AI Workflow", es: "Flujo con IA" },
    span: "col-6",
    items: [
      { l: "Claude", gl: "sparkle" },
      { l: "Cursor", gl: "terminal" },
      { l: "AI test integration", gl: "cpu" },
      { l: "AI code reviews", gl: "review" },
      { l: "Prompt Engineering", gl: "review" },
    ],
  },
  {
    key: "lang",
    idx: "05",
    title: { en: "Languages", es: "Lenguajes" },
    span: "col-6",
    items: [
      { l: "Java", gl: "code" },
      { l: "JavaScript", gl: "code" },
      { l: "TypeScript", gl: "code" },
    ],
  },
  {
    key: "ci",
    idx: "06",
    title: { en: "Tools & CI/CD", es: "Herramientas & CI/CD" },
    span: "col-12",
    items: [
      { l: "Git", gl: "git" },
      { l: "GitHub", gl: "github" },
      { l: "GitHub Actions", gl: "branch" },
      { l: "Jenkins", gl: "server" },
      { l: "Azure Pipelines", gl: "server" },
      { l: "Docker", gl: "box" },
      { l: "TestRail", gl: "file" },
      { l: "Jira", gl: "zap" },
      { l: "SAFe / Scrum", gl: "layers" },
    ],
  },
];

/* ----------------------------------------------------------------------------
 * Featured projects — each card opens a drawer with an architecture breakdown.
 * -------------------------------------------------------------------------- */
export interface ArchNode {
  ic: string;
  step: string;
  h: Localized<string>;
  p: Localized<string>;
}

export interface Project {
  key: string;
  flagship: boolean;
  logo: string;
  logoName: string;
  path: string;
  meta: Localized<string>;
  title: Localized<string>;
  one: Localized<string>;
  url: string;
  tools: string[];
  arch: ArchNode[];
}

export const projects: Project[] = [
  {
    key: "playwright",
    flagship: true,
    logo: "/logos/playwright.png",
    logoName: "Playwright",
    path: "~/projects/playwright-ia-framework",
    meta: { en: "SUT · Saucedemo", es: "SUT · Saucedemo" },
    title: {
      en: "Autonomous AI-Powered Playwright Framework",
      es: "Framework Playwright Autónomo con IA",
    },
    one: {
      en: "A Jira ticket becomes a reviewed, TCMS-mirrored Playwright pull request — authored by AI agents and gated by deterministic CI.",
      es: "Un ticket de Jira se convierte en un pull request de Playwright revisado y reflejado en el TCMS — escrito por agentes de IA y validado por CI determinista.",
    },
    url: "https://github.com/Diegocortes15/playwright-ia-automation-framework-saucedemo",
    tools: ["TypeScript", "Playwright", "POM", "GitHub Actions", "Qase", "Jira", "AI"],
    arch: [
      {
        ic: "layers",
        step: "01",
        h: { en: "Composed Page Object model", es: "Page Object model compuesto" },
        p: {
          en: "Tests know Pages, Pages compose Components (Header, Footer, CartBadge…), Components hold Locators — composition rules are enforced.",
          es: "Los tests conocen Pages, las Pages componen Components (Header, Footer, CartBadge…), los Components contienen Locators — con reglas de composición impuestas.",
        },
      },
      {
        ic: "cpu",
        step: "02",
        h: { en: "Ticket-to-PR AI authoring", es: "Autoría con IA: del ticket al PR" },
        p: {
          en: "Custom Claude Code skills read a refined Jira ticket, generate Page-Object-backed tests, run them, and open a GitHub PR.",
          es: "Skills personalizadas de Claude Code leen un ticket de Jira refinado, generan pruebas con Page Objects, las ejecutan y abren un PR en GitHub.",
        },
      },
      {
        ic: "terminal",
        step: "03",
        h: { en: "Live selector verification", es: "Verificación de selectores en vivo" },
        p: {
          en: "A playwright-cli skill drives a real browser to discover and verify selectors before any test is written.",
          es: "Una skill de playwright-cli maneja un navegador real para descubrir y verificar selectores antes de escribir cualquier prueba.",
        },
      },
      {
        ic: "file",
        step: "04",
        h: { en: "Opt-in Qase TCMS mirror", es: "Espejo TCMS en Qase (opcional)" },
        p: {
          en: "One-way code→Qase sync at merge: human-readable cases with steps, per-case Jira provenance, and an auto-maintained id map.",
          es: "Sincronización unidireccional código→Qase al hacer merge: casos legibles con pasos, trazabilidad a Jira por caso y un mapa de IDs automantenido.",
        },
      },
      {
        ic: "branch",
        step: "05",
        h: { en: "Smart CI quality gate", es: "Puerta de calidad en CI inteligente" },
        p: {
          en: "PRs run only their changed specs; a typecheck + zero-warning lint gate blocks regressions; merges run the full suite.",
          es: "Los PR ejecutan solo los specs que cambiaron; una puerta de typecheck + lint sin warnings bloquea regresiones; los merges corren la suite completa.",
        },
      },
      {
        ic: "server",
        step: "06",
        h: { en: "Config- & data-driven auth matrix", es: "Matriz de auth por config y datos" },
        p: {
          en: "Base URL, credentials and TCMS settings come from env; Playwright projects derive from a single AUTH_USERS array.",
          es: "URL base, credenciales y ajustes de TCMS vienen del entorno; los proyectos de Playwright derivan de un único arreglo AUTH_USERS.",
        },
      },
    ],
  },
  {
    key: "wdio",
    flagship: false,
    logo: "/logos/webdriverio.png",
    logoName: "WebdriverIO",
    path: "~/projects/wdio-framework",
    meta: { en: "SUT · Saucedemo", es: "SUT · Saucedemo" },
    title: {
      en: "WebdriverIO Automation Framework",
      es: "Framework de Automatización WebdriverIO",
    },
    one: {
      en: "A WebdriverIO suite for saucedemo.com — data-driven JSON cases, reusable helpers, a visual-testing proof of concept, and CI regression runs.",
      es: "Una suite WebdriverIO para saucedemo.com — casos dirigidos por datos en JSON, helpers reutilizables, un POC de pruebas visuales y regresión en CI.",
    },
    url: "https://github.com/Diegocortes15/ui-automation-challenge-js",
    tools: ["JavaScript", "WebdriverIO", "Data-driven", "Visual Testing", "GitHub Actions"],
    arch: [
      {
        ic: "file",
        step: "01",
        h: { en: "Data-driven JSON cases", es: "Casos dirigidos por datos (JSON)" },
        p: {
          en: "Test inputs live in per-scenario JSON files, keeping specs concise and easy to extend.",
          es: "Las entradas de prueba viven en archivos JSON por escenario, manteniendo los specs concisos y fáciles de extender.",
        },
      },
      {
        ic: "review",
        step: "02",
        h: { en: "Visual-testing POC", es: "POC de pruebas visuales" },
        p: {
          en: "A proof-of-concept visual layer captures and compares screenshots to catch UI regressions early.",
          es: "Una capa visual de prueba de concepto captura y compara capturas para detectar regresiones de UI temprano.",
        },
      },
      {
        ic: "branch",
        step: "03",
        h: { en: "GitHub Actions CI & regression", es: "CI y regresión con GitHub Actions" },
        p: {
          en: "CI and dedicated regression workflows run the suite automatically with pass/fail reporting.",
          es: "Workflows de CI y de regresión dedicados ejecutan la suite automáticamente con reporte de aprobado/fallido.",
        },
      },
    ],
  },
];

/* ----------------------------------------------------------------------------
 * Experience timeline — most recent first. `open: true` starts expanded.
 * -------------------------------------------------------------------------- */
export interface ExperienceNode {
  key: string;
  org: string;
  role: Localized<string>;
  from: string;
  to: Localized<string>;
  ctx: Localized<string>;
  open: boolean;
  accs: Localized<string[]>;
}

export const experience: ExperienceNode[] = [
  {
    key: "wz2",
    org: "Wizeline",
    role: { en: "QA Software Engineer II", es: "Ingeniero de Software QA II" },
    from: "Jul 2025",
    to: { en: "Present", es: "Presente" },
    ctx: { en: "Remote · Media Services", es: "Remoto · Servicios de Medios" },
    open: true,
    accs: {
      en: [
        "Designed an AI prompt that keeps manual test cases updated by analyzing automation scripts and generating CSVs for TestRail.",
        "Redesigned the POM into a clean component-based structure, cutting code duplication across projects.",
        "Created a custom AI-powered code-review command to enforce best practices before merge.",
      ],
      es: [
        "Diseñé un prompt de IA que mantiene los casos de prueba manuales actualizados analizando los scripts y generando CSVs para TestRail.",
        "Rediseñé el POM en una estructura basada en componentes, reduciendo la duplicación de código entre proyectos.",
        "Creé un comando de revisión de código con IA para imponer buenas prácticas antes del merge.",
      ],
    },
  },
  {
    key: "wz1",
    org: "Wizeline",
    role: { en: "QA Software Engineer", es: "Ingeniero de Software QA" },
    from: "Dec 2023",
    to: { en: "Jun 2025", es: "Jun 2025" },
    ctx: { en: "Remote · Media Services", es: "Remoto · Servicios de Medios" },
    open: false,
    accs: {
      en: [
        "Modernized the automation framework, removed outdated tools and fixed broken dependencies.",
        "Enabled automated testing across multiple environments (QA, Dev).",
        "Built utility classes for common actions like click and read-text.",
        "Developed visual-testing demos via screenshot comparison to catch UI regressions early.",
        "Improved bug reporting with screen recordings and annotated screenshots.",
      ],
      es: [
        "Modernicé el framework de automatización, eliminé herramientas obsoletas y arreglé dependencias rotas.",
        "Habilité pruebas automatizadas en múltiples entornos (QA, Dev).",
        "Construí clases de utilidad para acciones comunes como click y leer-texto.",
        "Desarrollé demos de pruebas visuales por comparación de capturas para detectar regresiones de UI temprano.",
        "Mejoré el reporte de bugs con grabaciones de pantalla y capturas anotadas.",
      ],
    },
  },
  {
    key: "endava",
    org: "Endava",
    role: { en: "Testing Intern", es: "Practicante de Testing" },
    from: "Jul 2022",
    to: { en: "Jan 2023", es: "Ene 2023" },
    ctx: { en: "Remote · Business Insurance", es: "Seguros Empresariales" },
    open: false,
    accs: {
      en: [
        "Created and designed test cases, performed regression testing, and built automated tests in Java & JavaScript.",
        "Collaborated with Product Owners and Developers on static testing and grooming user stories.",
      ],
      es: [
        "Creé y diseñé casos de prueba, realicé pruebas de regresión y construí pruebas automatizadas en Java y JavaScript.",
        "Colaboré con Product Owners y Desarrolladores en pruebas estáticas y refinamiento de historias de usuario.",
      ],
    },
  },
];

/** Education line shown under the timeline. */
export const education = { years: "2017 — 2023" };

/* ----------------------------------------------------------------------------
 * "Browse all" frameworks — real pinned GitHub repos (verified, star counts live
 * as of last edit). `img` → /logos/  OR  `gl` → lucide glyph.
 * -------------------------------------------------------------------------- */
export interface Framework {
  key: string;
  name: string;
  img?: string;
  gl?: string;
  cat: Localized<string>;
  lang: string;
  langColor: string;
  stars: number;
  desc: Localized<string>;
  url: string;
}

export const frameworks: Framework[] = [
  {
    key: "playwright",
    name: "Playwright · Saucedemo",
    img: "/logos/playwright.png",
    cat: { en: "UI · Web", es: "UI · Web" },
    lang: "TypeScript",
    langColor: "#3178c6",
    stars: 6,
    desc: {
      en: "End-to-end UI suite for saucedemo.com in TypeScript + Playwright — Page Object methods, data-driven JSON cases and accessibility checks.",
      es: "Suite UI end-to-end para saucedemo.com en TypeScript + Playwright — métodos de Page Object, casos en JSON dirigidos por datos y chequeos de accesibilidad.",
    },
    url: "https://github.com/Diegocortes15/playwright-automation-framework-saucedemo",
  },
  {
    key: "selenium",
    name: "Selenium · Saucedemo",
    img: "/logos/selenium.png",
    cat: { en: "UI · Web", es: "UI · Web" },
    lang: "Java",
    langColor: "#b07219",
    stars: 3,
    desc: {
      en: "End-to-end UI suite for Saucedemo in Java + Selenium 4 — Page Object Model with a WebDriver Factory, TestNG and Allure reporting.",
      es: "Suite UI end-to-end para Saucedemo en Java + Selenium 4 — Page Object Model con un WebDriver Factory, TestNG y reportes Allure.",
    },
    url: "https://github.com/Diegocortes15/selenium-automation-framework-saucedemo",
  },
  {
    key: "appium",
    name: "Appium · IMDb",
    img: "/logos/appium.png",
    cat: { en: "UI · Mobile", es: "UI · Móvil" },
    lang: "Java",
    langColor: "#b07219",
    stars: 1,
    desc: {
      en: "Mobile UI automation for the IMDb Android app using Appium + Java — native gestures, waits and device handling.",
      es: "Automatización UI móvil para la app de IMDb en Android con Appium + Java — gestos nativos, esperas y manejo de dispositivos.",
    },
    url: "https://github.com/Diegocortes15/appium-automation-framework-imdb",
  },
  {
    key: "serenity",
    name: "Playwright + Serenity/JS",
    img: "/logos/serenity.png",
    cat: { en: "UI · Web", es: "UI · Web" },
    lang: "TypeScript",
    langColor: "#3178c6",
    stars: 3,
    desc: {
      en: "Playwright framework wired to Serenity/JS using the Screenplay pattern for living documentation and rich reports.",
      es: "Framework de Playwright conectado a Serenity/JS con el patrón Screenplay para documentación viva y reportes ricos.",
    },
    url: "https://github.com/Diegocortes15/playwright-serenity-automation-framework",
  },
  {
    key: "cypress",
    name: "Cypress · Wingo",
    img: "/logos/cypress.png",
    cat: { en: "UI · Web", es: "UI · Web" },
    lang: "JavaScript",
    langColor: "#f1e05a",
    stars: 1,
    desc: {
      en: "Cypress automation framework exercising the Wingo web app with reusable commands and CI integration.",
      es: "Framework de automatización Cypress sobre la app web de Wingo con comandos reutilizables e integración CI.",
    },
    url: "https://github.com/Diegocortes15/cypress-wingo-framework",
  },
  {
    key: "apiws",
    name: "API Testing Workshop",
    gl: "flask",
    cat: { en: "API", es: "API" },
    lang: "JavaScript",
    langColor: "#f1e05a",
    stars: 1,
    desc: {
      en: "Hands-on API testing in JavaScript with Axios — request building, assertions and chained scenarios.",
      es: "Pruebas de API prácticas en JavaScript con Axios — construcción de peticiones, aserciones y escenarios encadenados.",
    },
    url: "https://github.com/Diegocortes15/workshop-api-testing-js",
  },
  {
    key: "apichallenge",
    name: "API Automation Challenge",
    gl: "db",
    cat: { en: "API", es: "API" },
    lang: "Java",
    langColor: "#b07219",
    stars: 1,
    desc: {
      en: "REST API automation in Java with Rest-assured against the themoviedb.org API.",
      es: "Automatización de API REST en Java con Rest-assured contra la API de themoviedb.org.",
    },
    url: "https://github.com/Diegocortes15/api-automation-challenge",
  },
];

/* ----------------------------------------------------------------------------
 * Contact links (no backend — direct links only).
 * -------------------------------------------------------------------------- */
export const links = {
  email: "cortesroadiegoalejandro@gmail.com",
  linkedin: "https://www.linkedin.com/in/diegocortesroa/",
  github: "https://github.com/Diegocortes15",
};

/* ----------------------------------------------------------------------------
 * Accent palettes — swappable from the nav theme picker. First entry is default.
 * -------------------------------------------------------------------------- */
export interface Palette {
  key: string;
  label: string;
  rgb: string;
  rgb2: string;
  hex: string;
  ink: string;
}

/** The accent applied on load. The in-page theme switcher is currently hidden
 * (see Navbar), so this fixes the site to a single accent. Change it to any
 * palette `key` below. Keep src/index.css :root in sync to avoid a color flash. */
export const defaultAccent = "lime";

export const palettes: Palette[] = [
  { key: "emerald", label: "Emerald", rgb: "52,211,153", rgb2: "16,185,129", hex: "#34d399", ink: "#04130c" },
  { key: "cyan", label: "Cyan", rgb: "34,211,238", rgb2: "6,182,212", hex: "#22d3ee", ink: "#03161b" },
  { key: "indigo", label: "Indigo", rgb: "129,140,248", rgb2: "99,102,241", hex: "#818cf8", ink: "#080a1e" },
  { key: "violet", label: "Violet", rgb: "192,132,252", rgb2: "168,85,247", hex: "#c084fc", ink: "#150520" },
  { key: "amber", label: "Amber", rgb: "251,191,36", rgb2: "245,158,11", hex: "#fbbf24", ink: "#1c1102" },
  { key: "orange", label: "Coral", rgb: "251,146,60", rgb2: "249,115,22", hex: "#fb923c", ink: "#1c0a02" },
  { key: "rose", label: "Rose", rgb: "251,113,133", rgb2: "244,63,94", hex: "#fb7185", ink: "#1c0509" },
  { key: "lime", label: "Lime", rgb: "163,230,53", rgb2: "132,204,22", hex: "#a3e635", ink: "#0f1a02" },
];
