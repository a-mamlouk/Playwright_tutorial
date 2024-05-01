/*
URL :
npx playwright test tests/day16-reporters.spec.js --headed --project chromium

 */
import {test,expect} from "@playwright/test";
test("Test reporters", async ({page})=>{
    await page.goto("https://google.fr")
    await expect(page).toHaveTitle("Google")
})

test("Test reporters 2", async ({page})=>{
    await page.goto("https://demo.opencart.com/")
    await page.waitForTimeout(5000)
    await expect(page).toHaveTitle("Just a moment...")
})
test("Test reporters 3", async ({page})=>{
    await page.goto("https://demo.nopcommerce.com/")
    await page.waitForTimeout(5000)
    await expect(page).toHaveTitle("nopCommerce demo store")
})