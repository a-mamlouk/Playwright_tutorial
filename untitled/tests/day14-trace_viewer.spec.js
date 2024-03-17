/*
URL : https://www.demoblaze.com/index.html
npx playwright test tests/day14-trace_viewer.spec.js --headed --project chromium
*/

import{test,expect} from "@playwright/test";
test("Trace Viewer test",async ({page})=>{
    await page.goto("https://www.demoblaze.com/index.html")

    const linkModal = page.locator("xpath=//*[@id='login2']")
    await linkModal.click()
    const inputLoginusername = page.locator("xpath=//*[@id='loginusername']")
    await inputLoginusername.fill('pavanol')
    const inputLoginpassword = page.locator("xpath=//*[@id='loginpassword']")
    await inputLoginpassword.fill("test@123")

    const buttonLog = page.locator("xpath=//button[@onclick='logI()']")
    await buttonLog.click()
    await page.waitForTimeout(2000)
})