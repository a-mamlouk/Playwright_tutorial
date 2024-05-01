/*
URL : https://playwright.dev/docs/videos
npx playwright test tests/day13_record_videos.spec.js --headed --project chromium
*/

import{test,expect} from "@playwright/test";
test('Test videos',async ({page})=>{
    //login
    await page.goto("https://www.demoblaze.com/index.html")

    const linkModal = page.locator("xpath=//*[@id='login2']")
    await linkModal.click()
    const inputLoginusername = page.locator("xpath=//*[@id='loginusername']")
    await inputLoginusername.fill('pavanol')
    const inputLoginpassword = page.locator("xpath=//*[@id='loginpassword']")
    await inputLoginpassword.fill("test@123")

    const buttonLog = page.locator("xpath=//button[@onclick='logIn()']")
    await buttonLog.click()
    await page.waitForTimeout(2000)

    //home Page
    const products=   await page.$$(".hrefch")
    expect(products).toHaveLength(10)
    console.log("the number of products in page 1 is :",products.length)
    await page.waitForTimeout(1000)

    //Logout

    const linkLogout = page.locator("xpath=//*[@id='logout2']")
    await expect(linkLogout).toBeVisible()
    await linkLogout.click()
    await page.waitForTimeout(1000)
})
