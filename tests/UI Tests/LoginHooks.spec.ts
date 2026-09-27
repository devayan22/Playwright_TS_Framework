import {test,expect,request} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { urls } from '../../config/urls';


test.describe('OrangeHRM Login Tests', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto(
            urls.orangeHRM.login,
            { waitUntil: 'networkidle' }
        );

    });

    test('Valid Login', async ({ page }) => {

        const login = new LoginPage(page);
        await login.enterValidCredentials();

    });

    test('Invalid Login', async ({ page }) => {

        const login = new LoginPage(page);
        await login.enterInvalidCredentials();

    });

});