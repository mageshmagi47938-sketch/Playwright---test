// import { test,chromium,Browser,BrowserContext,Page} from '@playwright/test';

// test ( 'Logion page', async () =>  {

//     test.setTimeout(80000);

//     const browser: Browser = await chromium.launch ();
//     const context: BrowserContext = await browser.newContext ();
//     const page: Page = await context.newPage ();

//     await page.goto("https://testautomationpractice.blogspot.com/");

//     await page.locator('#name').fill('Magesh');
//     await page.locator('#email').fill('magesh@gmail.com');
//     await page.locator('#phone').fill('8838034119');
//     await page.locator('#textarea').fill('07, Vijay street, Vijay nagar, VijayNadu PINCODE-602025');
//     await page.locator('#female').check();
//     await page.locator('#sunday').check();
//     await page.locator('#country').selectOption('japan');
//     await page.locator('#colors').selectOption('red');
//     await page.locator('#animals').selectOption('lion');
//     await page.locator('#datepicker').fill('08/12/1999');
//     await page.locator('#txtDate').fill('12/08/1999');
//     await page.locator('input[placeholder="dd-mm-yyyy"]').nth(0).fill('12-08-1999');
//     await page.locator('input[placeholder="dd-mm-yyyy"]').nth(1).fill('12-08-1999');
//     await page.getByText('Submit').click();
    
// });

// import { test } from '@playwright/test';

// test ('CSS-Locators', async ({ page, },) => {

// await page.goto("https://letcode.in/forms");

// await page.locator('#firstname').fill('Magesh');
// await page.locator('#lasttname').fill('Waran');
// await page.locator('#email').fill('magesh@gmail.com');
// await page.locator('div select').nth(0).selectOption('India (+91)');
// await page.locator('#Phno').fill('8838034119');
// await page.locator('#Addl1').fill('No.777, Malayalam vibes street,');
// await page.locator('#Addl2').fill('Anna Nagar, Chennai');
// await page.locator('#state').fill('Tamil Nadu');
// await page.locator('#postalcode').fill('600001');
// await page.locator('div select').nth(1).selectOption('India');
// await page.locator('#Date').fill('1999-08-12');
// await page.locator('#male').check();
// await page.locator('input[type="checkbox"]').check();
// await page.getByText('Submit').click();
// await page.waitForTimeout(2000);
// }); 


// import { test } from "@playwright/test";

test ('Login page - price change', async ( {page} ) => {

await page.goto('https://www.saucedemo.com/');

await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();
await page.waitForTimeout(3000);
await page.locator('.product_sort_container').selectOption('za');
await page.waitForTimeout(2000);
});


// import { test,expect } from "@playwright/test";

test("Shadow Dom", async ({page}) => {
    test.setTimeout(60000);

await page.goto("https://selectorshub.com/xpath-practice-page/");

await page.getByPlaceholder("enter name",{ exact : true }).scrollIntoViewIfNeeded();
await page.getByPlaceholder("enter name",{ exact:true }).fill('MAGESH');
await page.locator('#pizza').fill('MAARGARITA');
await page.locator('#training').fill('PLAYWRIGHT')
// await page.waitForTimeout(3000);
    
});
  

// Using frame Locator 

import { test,expect,Frame,} from "@playwright/test";

test('Frames',async ({page}) => {

    await page.goto('https://letcode.in/frame');
    await page.frameLocator('#firstFr').getByPlaceholder('Enter name').fill('MAGESH');
    await page.frameLocator('#firstFr').locator(' [name="lname"] ').fill('WARAN');
    await page.frameLocator('#firstFr').frameLocator('[title="Inner Frame"]').getByPlaceholder('Enter email').fill('Magesh@gmail.com');
    await page.waitForTimeout(3000);


// using page.frames()------>index
const framesInPage: Frame[] = await page.frames();
console.log(framesInPage.length);
await framesInPage.forEach((f, i) => {

    console.log( `${i} : ${f.url()}` );
});

await framesInPage[1].getByPlaceholder('Enter name').fill('MAGESH');
await page.waitForTimeout(3000);
});