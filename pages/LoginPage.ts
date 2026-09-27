import { Page, Locator } from '@playwright/test';
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
    await this.txtUsername.fill('Admin');
    await this.txtPassword.fill('admin123');
    await this.btnLogin.click();
}

async enterInvalidCredentials() {
    await this.txtUsername.fill('AdMin');
    await this.txtPassword.fill('admin129');
    await this.btnLogin.click();
}
}