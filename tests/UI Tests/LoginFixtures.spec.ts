import {request} from '@playwright/test';
import { urls } from '../../config/urls';
import { test, expect } from '../../fixtures/testFixtures';

test.describe('OrangeHRM Login Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(urls.orangeHRM.login, {
      waitUntil: 'networkidle'
    });
  });

  // Valid Login Scenario
  test.only('Checking With Valid credentials', async ({ loginPage }) => {

    await loginPage.enterValidCredentials();

  });

  // Invalid Login Scenario
  test.skip('Checking With Invalid credentials', async ({ loginPage }) => {

    await loginPage.enterInvalidCredentials();

  });

});