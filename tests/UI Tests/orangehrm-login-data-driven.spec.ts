import { test, expect } from '@playwright/test';
import { urls } from '../../config/urls';

const baseURL = urls.orangeHRM.login;

const cases = [
  { username: 'Admin', password: 'admin123', expectDashboard: true, description: 'valid Admin' },
  { username: 'fakeuser', password: 'fakepass', expectDashboard: false, expectedError: 'Invalid credentials', description: 'invalid fakeuser' },
  { username: 'ESSUser1', password: 'ess123', expectDashboard: false, expectedError: 'Invalid credentials', description: 'invalid ESSUser1' },
];

for (const c of cases) {
  test(`Login data-driven: ${c.description}`, async ({ page }) => {
    await page.goto(baseURL, { waitUntil: 'domcontentloaded' });

    const usernameInput = page.getByPlaceholder('Username');
    const passwordInput = page.getByPlaceholder('Password');
    const loginButton = page.getByRole('button', { name: 'Login' });

    await expect(usernameInput).toBeVisible({ timeout: 15000 });
    await expect(passwordInput).toBeVisible({ timeout: 15000 });

    await usernameInput.fill(c.username);
    await passwordInput.fill(c.password);

    if (c.expectDashboard) {
      await Promise.all([
        page.waitForURL('**/dashboard/index', { timeout: 60000 }),
        loginButton.click(),
      ]);

      await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible({ timeout: 15000 });

      // Logout flow
      await page.locator('.oxd-userdropdown-img').click();
      await page.locator('a:has-text("Logout")').click();
      await page.waitForURL('**/auth/login', { timeout: 30000 });
    } else {
      await loginButton.click();
      await expect(page.locator('text=Invalid credentials')).toBeVisible({ timeout: 15000 });
    }
  });
}
