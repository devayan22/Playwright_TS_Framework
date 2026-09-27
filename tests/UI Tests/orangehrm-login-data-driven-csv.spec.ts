import { test, expect } from '@playwright/test';
import { parse } from 'csv-parse/sync';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { urls } from '../../config/urls';

const baseURL = urls.orangeHRM.login;

type LoginTestCase = {
    Username: string;
    Password: string;
    Expected: string;
};

function readCsv(filePath: string): LoginTestCase[] {
    const csvContent = fs.readFileSync(filePath, 'utf8');

    return parse(csvContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
    }) as LoginTestCase[];
}
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const csvPath = path.resolve(__dirname, '..', '..', 'testData', 'loginData.csv');
const testCases = readCsv(csvPath);

test.describe('OrangeHRM login validations (CSV data-driven)', () => {
    for (const testCase of testCases) {
        const username = testCase.Username;
        const password = testCase.Password;
        const expected = testCase.Expected;

        test(`CSV login: ${username} -> ${expected}`, async ({ page }) => {
            const resultLabel = `${username},${password} => ${expected}`;

            try {
                await page.goto(baseURL, { waitUntil: 'domcontentloaded' });

                const usernameInput = page.getByPlaceholder('Username');
                const passwordInput = page.getByPlaceholder('Password');
                const loginButton = page.getByRole('button', { name: 'Login' });

                await expect(usernameInput).toBeVisible({ timeout: 15000 });
                await expect(passwordInput).toBeVisible({ timeout: 15000 });

                await usernameInput.fill(username);
                await passwordInput.fill(password);
                await loginButton.click();

                if (expected === 'Dashboard') {
                    await page.waitForURL('**/dashboard/index', { timeout: 60000 });
                    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible({ timeout: 20000 });
                } else if (expected === 'Invalid credentials') {
                    await expect(page.getByText('Invalid credentials')).toBeVisible({ timeout: 15000 });
                } else {
                    throw new Error(`Unsupported expected result: ${expected}`);
                }

                console.log(`[PASS] ${resultLabel}`);
            } catch (error: any) {
                console.log(`[FAIL] ${resultLabel} - ${error.message}`);
                throw error;
            }
        });
    }

    test.afterAll(async () => {
        console.log('CSV data-driven login suite finished.');
    });
});
