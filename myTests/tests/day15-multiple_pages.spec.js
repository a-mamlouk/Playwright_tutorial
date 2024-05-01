/*
URL : https://www.demoblaze.com/index.html
npx playwright test tests/day15-multiple_pages.spec.js --headed --project chromium
 */
import {test, expect, chromium} from "@playwright/test";
test('handle multiple pages on windows', async ()=>{

    //create context
    const browser = await chromium.launch()
    const context = await browser.newContext()

    //new page
    const page1= await  context.newPage()
    const page2= await context.newPage()

    const allPages = context.pages()
    await console.log("Number of pages created : ", allPages.length)

    //launch application
        await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")

        await page2.goto("https://demo.nopcommerce.com/register")
    await expect(page2).toHaveURL("https://demo.nopcommerce.com/register")
    await expect(page2).toHaveTitle("nopCommerce demo store. Register")
    await page1.waitForTimeout(2000)

    await page1.close()
    await page2.close()
})

test.only('handle multiples pages on windows', async ()=>{

    //create context
    const browser = await chromium.launch()
    const context = await browser.newContext()

    //new page
    const page1= await  context.newPage()

    //launch application
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")
    await page1.waitForTimeout(1000)

    //trigger event
    const pagePromise = context.waitForEvent("page")
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()
    const newPage=await pagePromise;
    await expect(newPage).toHaveTitle("Human Resources Management Software | OrangeHRM")

    await page1.waitForTimeout(1000)

    await page1.close()
    await newPage.waitForTimeout(3000)
    await browser.close()
})