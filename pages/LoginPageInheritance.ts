import { Locator, Page } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { envConfig } from '../config/envConfig';

export class LoginPageInheritance extends BasePage {

    private readonly txtUsername: Locator;
    private readonly txtPassword: Locator;
    private readonly btnLogin: Locator;

    constructor(page: Page) {

        super(page);

        this.txtUsername = page.getByPlaceholder('Username');
        this.txtPassword = page.getByPlaceholder('Password');
        this.btnLogin = page.getByRole('button', { name: 'Login' });
    }

   //Polymorphism Implemented -> Base class has parent navigate() & now this is the child class which has the navigate().
    // Overriding the parent method -> Child version overides the parent version.
    override async navigate(url: string) 
    {
    console.log('LoginPageInheritance navigate()');
    await this.page.goto(url);
    }



    async enterValidCredentials() {
        await this.txtUsername.fill(envConfig.orangeHRMUsername);
        await this.txtPassword.fill(envConfig.orangeHRMPassword);
        await this.btnLogin.click();
    }

    async enterInvalidCredentials() {
        await this.txtUsername.fill(envConfig.InvalidOrangeHRMUsername);
        await this.txtPassword.fill(envConfig.InvalidOrangeHRMPassword);
        await this.btnLogin.click();
    }
}