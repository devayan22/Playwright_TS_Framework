import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type Fixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<Fixtures>({

  loginPage: async ({ page }, use) => {

    const loginPage = new LoginPage(page);
    await use(loginPage);
  }

});

export { expect } from '@playwright/test';

/*
Explanation

Purpose : Instead of creating new LoginPage(page) inside every test, Playwright creates the LoginPage object for you. 

1. We are importing playwright test & renaming test as base locally so that we can extend the normal playwright test with our own fixture. 

2. We imported the LoginPage so that our fixture file can create an object of this class.

type Fixtures = {
  loginPage: LoginPage;
};

fixture name = loginPage
type  = LoginPage

Our custom test will have a fixture called loginPage, and that fixture will be a LoginPage object. 

"I am defining a type called Fixtures. Anything that I say is a Fixture must have these properties." But here we don't create objects of this fixture by ourselves. We implement the fixture & tell playwright to create it for us.

Note : We don't manually create the fixture object inside every test. We define its type, implement the fixture, and tell Playwright how to create and provide the object whenever a test requests it. 


3.base.extend(...) : Take Playwright's normal test and add my custom fixture to it. So now we write this in test.spec.ts --> import { test, expect } from '../fixtures/base'; This provides our extended test.

4. Now we implement the fixture

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  }
 
loginPage : async ({ page }, use) => {
    ↑             ↑
 fixture       fixture
  name         function

"I am defining a fixture called loginPage, and this is the function that tells Playwright how to create/provide that fixture." 

Here we create an object of the Login page. 
use() is a fixture provided by Playwright. 
use() is used to pass the fixture to the test. So we write await use(loginPage);


Test requests loginPage
          ↓
Fixture runs
          ↓
new LoginPage(page)
          ↓
await use(loginPage)
          ↓
Test receives loginPage

Without Fixture

test('Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.enterUsername('Admin');
});

With Fixture

test('Login', async ({ loginPage }) => {
    await loginPage.enterUsername('Admin');
});


Flowchart 

Test declares it needs { loginPage }
              ↓
Playwright sees loginPage fixture
              ↓
Playwright provides its dependency { page }
              ↓
Fixture creates new LoginPage(page)
              ↓
await use(loginPage)
              ↓
Test gets the LoginPage object


loginPage fixture
      │
      │ depends on
      ▼
Playwright page fixture



*/