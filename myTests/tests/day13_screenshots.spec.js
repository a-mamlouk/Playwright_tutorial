/*
URL : https://demo.opencart.com/
npx playwright test tests/day13_screenshots.spec.js --headed --project chromium
*/

import{test,expect} from "@playwright/test";
test("Test page screenshot", async ({page})=> {
    await page.goto("https://demo.opencart.com/")
    await page.screenshot({path:"tests/Screenshots/"+Date.now()+"Homepage.png"})
})
test("Full page screenshot", async ({page})=> {
    await page.goto("https://demo.opencart.com/")
    await page.waitForTimeout(5000)
    await page.screenshot({path:"tests/Screenshots/"+Date.now()+"FullHomepage.png",fullPage:true})
    await page.waitForTimeout(1000)
})
test.only("Element page screenshot", async ({page})=> {
    await page.goto("https://demo.opencart.com/")
    await page.waitForTimeout(5000)
    const Macbook_div = await page.locator("//*[@id='content']/div[2]/div[1]/form/div")
    await Macbook_div.screenshot({path:"tests/Screenshots/"+Date.now()+"Macbook.png"})
})