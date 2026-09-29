// Grouping & Parallel Execution
import {test,expect,request} from '@playwright/test'
import { urls } from '../../config/urls';

test.describe.configure({ mode: 'parallel' });

test.describe('Grouping Tests',() =>
{

    test('Checking Title of the page',async({page})=>
    {
    await page.goto(urls.orangeHRM.login);
    await page.waitForLoadState("domcontentloaded");
    const title = await page.title();
    console.log("Title of the page is " +title);
    await expect(page).toHaveTitle("OrangeHRM");
});

   test('Checking URL of the page',async({page})=>
   {
   await page.goto(urls.orangeHRM.login);
   await page.waitForLoadState("domcontentloaded");
   const url = await page.url();
   console.log("URL of the page is " +url);
   await expect(page).toHaveURL(urls.orangeHRM.login);
});

});