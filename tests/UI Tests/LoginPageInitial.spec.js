import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';
import { LoginPage } from '../../pages/LoginPage';
import { urls } from '../../config/urls';

// Valid Login Scenario

test(
    'Checking With Valid credentials',
    {
        tag: ['@smoke', '@login']
    },
    async () => {

        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto(
            urls.orangeHRM.login,
            { waitUntil: 'domcontentloaded' }
        );

        const login = new LoginPage(page);
        await login.enterValidCredentials();

        await context.close();
        await browser.close();
    }
);