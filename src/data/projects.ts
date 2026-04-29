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
