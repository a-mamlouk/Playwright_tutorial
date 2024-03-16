/*
URL : https://demo.opencart.com/
npx playwright test tests/day13_screenshots.spec.js --headed --project chromium
*/

import{test,expect} from "@playwright/test";
test.only("Test page screenshot", async ({page})=> {
    await page.goto("https://demo.opencart.com/")
    await page.screenshot({path:"tests/Screenshots/"+Date.now()+"Homepage.png"})
})
test("Full page screenshot", async ({page})=> {

})
test("Element page screenshot", async ({page})=> {

})