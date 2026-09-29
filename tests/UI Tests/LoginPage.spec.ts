import {test,expect,request} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { urls } from '../../config/urls';
// Valid Login Scenario

test('Checking With Valid credentials', 
  {
    tag: ['@smoke', '@login']
  },async({page})=>
{
  await page.goto(urls.orangeHRM.login,{ waitUntil: 'domcontentloaded' });
  
  const login = new LoginPage(page);
  await login.enterValidCredentials();
});


// Invalid Login Scenario

test('Checking With Invalid credentials',
  {
    tag: ['@regression', '@login', '@negative']
  },async({page})=>
{
  await page.goto(urls.orangeHRM.login,{ waitUntil: 'networkidle' });
  
  const login = new LoginPage(page);
  await login.enterInvalidCredentials();
});