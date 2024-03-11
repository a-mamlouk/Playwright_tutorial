/*
URL : https://testautomationpractice.blogspot.com/
npx playwright test tests/day11-mouse_double_click.spec.js --headed --project chromium
*/

import{test,expect} from "@playwright/test";
import assert from "node:assert";


test('Mouse double click',async ({page})=> {
    await page.goto("https://testautomationpractice.blogspot.com/")
    const buttonCopyText = page.locator("xpath=//button[contains(text(),\"Copy Text\")]")
    await buttonCopyText.dblclick()

    const inputField = page.locator("xpath=//*[@id='field2']")
    await expect(inputField).toHaveValue("Hello World!")
    await page.waitForTimeout(5000)
})