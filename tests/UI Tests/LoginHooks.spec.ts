import {test,expect,request} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { urls } from '../../config/urls';


test.describe('OrangeHRM Login Tests', () => {

   test.beforeAll(async () => {
        console.log('beforeAll: Runs once before all tests');   
    });

    test.beforeEach(async ({ page }) => {

        await page.goto(
            urls.orangeHRM.login,
            { waitUntil: 'networkidle' }
        );

    });
    
    test.afterEach(async ({ page }) => {
    await page.close();
    });

   test.afterAll(async () => {
        console.log('afterAll: Runs once after all tests');
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

/*
beforeAll
    ↓
beforeEach
    ↓
Valid Login
    ↓
afterEach
    ↓
beforeEach
    ↓
Invalid Login
    ↓
afterEach
    ↓
afterAll
*/