# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UI Tests\LoginPage.spec.ts >> Checking With Valid credentials
- Location: tests\UI Tests\LoginPage.spec.ts:6:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "networkidle"

```

# Test source

```ts
  1  | import {test,expect,request} from '@playwright/test';
  2  | import { LoginPage } from '../../pages/LoginPage';
  3  | import { urls } from '../../config/urls';
  4  | // Valid Login Scenario
  5  | 
  6  | test.only('Checking With Valid credentials', 
  7  |   {
  8  |     tag: ['@smoke', '@login']
  9  |   },async({page})=>
  10 | {
> 11 |   await page.goto(urls.orangeHRM.login,{ waitUntil: 'networkidle' });
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  12 |   
  13 |   const login = new LoginPage(page);
  14 |   await login.enterValidCredentials();
  15 | });
  16 | 
  17 | 
  18 | // Invalid Login Scenario
  19 | 
  20 | test.skip('Checking With Invalid credentials',
  21 |   {
  22 |     tag: ['@regression', '@login', '@negative']
  23 |   },async({page})=>
  24 | {
  25 |   await page.goto(urls.orangeHRM.login,{ waitUntil: 'networkidle' });
  26 |   
  27 |   const login = new LoginPage(page);
  28 |   await login.enterInvalidCredentials();
  29 | });
```