import { Page, Locator } from '@playwright/test';
import { envConfig } from '../config/envConfig';
export class LoginPage
{

private readonly page: Page; 
private readonly txtUsername: Locator; 
private readonly txtPassword: Locator; 
private readonly btnLogin: Locator;

constructor(page: Page) 
{ 
  this.page = page; 
  this.txtUsername = page.getByPlaceholder('Username'); 
  this.txtPassword = page.getByPlaceholder('Password'); 
  this.btnLogin = page.getByRole('button', { name: 'Login' }); 
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