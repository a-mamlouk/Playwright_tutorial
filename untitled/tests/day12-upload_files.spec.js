/*
URL : https://www.dia-pen.hr/orbicon/3rdParty/rad-plus/test.html
npx playwright test tests/day12-upload_files.spec.js --headed --project chromium
*/

import{test,expect} from "@playwright/test";
test('Upload files test ',async ({page})=> {
    await page.goto("https://www.dia-pen.hr/orbicon/3rdParty/rad-plus/test.html")
    const inputUserfile = page.locator("xpath=//input[@name='userfile[0]']")
    await inputUserfile.isVisible()
    //await inputUserfile.click()
    await inputUserfile.setInputFiles("/tests/twitch.txt")

    const inputSubmit = page.locator("xpath=//input[@type='submit']")
    await inputSubmit.click()
    await page.locator("//td[1][text()='twitch.txt']")

    await page.waitForTimeout(5000)
})