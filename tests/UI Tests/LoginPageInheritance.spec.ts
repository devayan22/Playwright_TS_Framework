import { test } from '@playwright/test';
import { LoginPageInheritance } from '../../pages/LoginPageInheritance';
import { urls } from '../../config/urls';
import { BasePage } from '../../pages/BasePage';

test('Login with inheritance', async ({ page }) => {

    const loginPage = new LoginPageInheritance(page);

    await loginPage.navigate(
        urls.orangeHRM.login
    );

    await loginPage.enterValidCredentials();
});



test('Login with Polymorphism', async ({ page }) => {

    const loginPage: BasePage = new LoginPageInheritance(page);

    await loginPage.navigate(
        urls.orangeHRM.login
    );
       //Typescript type casting where loginPageChild acts as a reference to access  LoginPageInheritance to call the method. No new object is created. It uses the same object.
      // TypeScript type casting: loginPageChild acts as a reference to the existing LoginPageInheritance object, allowing us to access its child-specific methods. No new object is created; it refers to the same object.
       const loginPageChild = loginPage as LoginPageInheritance;
      await loginPageChild.enterValidCredentials();
});