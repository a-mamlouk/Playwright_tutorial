/*
URL : https://demo.opencart.com/
npx playwright test tests/day11-mouse_over_action.spec.js --headed --project chromium
*/

const {test,expect} = require('@playwright/test')
test('Mouse hover',async ({page})=> {
    await page.goto("https://demo.opencart.com/")
    const desktop = await page.locator("//a[normalize-space()='Desktops']")
    const macbook = await page.locator("//a[normalize-space()='Mac (1)']")

    //mouse over
    await desktop.hover()
    await page.waitForTimeout(500)
    await macbook.hover()
    await page.waitForTimeout(5000)
})
