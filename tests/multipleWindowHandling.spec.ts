import { test,expect,BrowserContext,Page} from "@playwright/test";

test ('Multipe Window Handling', async ({ page,   }) => {

    // const context : BrowserContext = await browser.newContext();
    // const page : Page = await context.newPage ();

    await page.goto('https://testautomationpractice.blogspot.com/');

     const [newpage,undefined] = await Promise.all([
     page.waitForEvent("popup"),                                            // <-----have to mention first before clicking button 
     // context.waitForEvent('page'),                                       // <----- but in cont promise.all will run parallely!
     page.getByRole("button",{ name:"New Tab" }).click(),                                  
    ]); 

    await newpage.waitForLoadState();
    await expect(newpage).toHaveURL('https://www.pavantestingtools.com/');
    await newpage.locator('[name="q"]').fill('Playawright');
    await newpage.locator('[value="Search"]').click();
    await page.bringToFront();
    // await newpage.waitForTimeout(30000);
    await page.locator('#PopUp').click();
    // await page.screenshot({path: 'popup.jpeg' });                           
    await page.locator('.wikipedia-search-input').fill('API Testing');
    await page.waitForTimeout(3000);
    await newpage.bringToFront();
    await page.waitForTimeout(3000);

});
