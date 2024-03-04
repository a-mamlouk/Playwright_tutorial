/*
https://playwright.dev/docs/test—assertions

1) expect (page).toHaveURL()        Page has URL

2) expect (page).toHaveTitle()      Page has title

3) expect(locator).toBeVisible()    Element is visible

4) expect(locator).toBeEnabled()    Control is enabled
expect (locator).toBeDisabled()     Element is disabled

5) expect(locator).toBeChecked()    Radio/Checkbox is checked
6) expect(locator).toHaveAttribute()    Element has attribute
7) expect(locator).toHaveText()     Element matches text

8) expect(locator).toContainText()  Element contains text

9) expect(locator).toHaveValue(value)   Input has a value

10) expect( locator).toHaveCount()  List of elements has given length

*/

import { test, expect } from '@playwright/test';

test('Assertion test', async ({ page }) => {
   // Open App Url
    await page.goto("https://demo.nopcommerce.com/register")

    await expect(page).toHaveURL("https://demo.nopcommerce.com/register")
    await expect(page).toHaveTitle("nopCommerce demo store. Register")

    const Logo_element = await page.locator("//img[contains(@alt, 'nopCommerce')]")
    await expect(Logo_element).toBeVisible()

    const search_box = await page.locator("//*[@id='small-searchterms']")
    await expect(search_box).toBeEnabled()

    //radio button
    const male_radio_button = await page.locator('//*[@id=\'gender-male\']')
    await male_radio_button.click()
    await expect(male_radio_button).toBeChecked()

    //Newsletter check box
    const newsletter_cb = await page.locator('//*[@id=\'gender-male\']')
    await expect(newsletter_cb).toBeChecked()

    //to have attribute
    const register_btn= page.locator("//*[@id='register-button']")
    await expect(register_btn).toHaveAttribute("type","submit")

    //matches text exactly
    await expect(await page.locator(".page-title h1")).toHaveText("Register")

    //text portion
    await expect(await page.locator(".page-title h1")).toContainText("Reg")

});