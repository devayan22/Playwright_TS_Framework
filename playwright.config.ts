import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [ 
    ['list'],
    ['html', { open: 'never' }],
    ['allure-playwright']
  ],
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    channel: 'chrome', //Use the installed Google Chrome browser instead of Playwright's bundled Chromium.
    //browserName: 'chromium',
    headless: true,
    actionTimeout: 30000,
    navigationTimeout: 80000,
    screenshot: 'on-first-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    /*
    launchOptions: {
        slowMo: 500 //slow down Playwright operations by 500 ms
    }
    */
     /* viewport: {
          width: 1280,
          height: 720
      }*/
  }

  /*
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      //browserName: 'chromium',
      
      //Yes, it opens Playwright's installed/bundled Chromium browser with the Desktop Chrome settings.
      
      /*
       Without browserName:
       Desktop Chrome settings
        +
       default browser → Chromium

       With browserName: 'chromium':
       Desktop Chrome settings
        +
       explicitly selected browser → Chromium
      
   
    },
    
    /*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    */
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  
  //],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});



