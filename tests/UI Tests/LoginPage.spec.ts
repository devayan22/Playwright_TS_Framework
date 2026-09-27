import {test,expect,request} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { urls } from '../../config/urls';
// Valid Login Scenario

test.only('Checking With Valid credentials',async({page})=>
{
  await page.goto(urls.orangeHRM.login,{ waitUntil: 'networkidle' });
  
  const login = new LoginPage(page);
  await login.enterValidCredentials();
});


// Invalid Login Scenario

test.skip('Checking With Invalid credentials',async({page})=>
{
  await page.goto(urls.orangeHRM.login,{ waitUntil: 'networkidle' });
  
  const login = new LoginPage(page);
  await login.enterInvalidCredentials();
});