/*import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto("https://playwright.dev/", { timeout: 80000 });

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/

/*import { test, chromium, Browser, BrowserContext, Page } from '@playwright/test';

test ('Login page', async () => {

const browser: Browser = await chromium.launch({ headless : false, slowMo : 3000});
const context : BrowserContext = await browser.newContext ();
const page: Page = await context.newPage();

await page.goto ( "https://testautomationpractice.blogspot.com/");

await page.locator('#name').fill('Magesh');
await page.locator('#email').fill('mageshmagi47938@gmail.com');
await page.locator('#phone').fill('8838034119');
await page.locator('#textarea').fill('07, Vijay street, Vijaynagar, Vijay City, Vijay Nadu, PINCODE-900000');
await page.locator('#male').check();
await page.locator('#sunday').check();
await page.locator('#country').selectOption('India');
await page.locator('#colors').selectOption('red');



});*/