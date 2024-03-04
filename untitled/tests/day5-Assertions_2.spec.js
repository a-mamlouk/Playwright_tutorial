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

test('Assertion test 2', async ({ page }) => {
   // Open App Url
    await page.goto("https://www.demoblaze.com/index.html")

    //hard assertion
    await expect(page).toHaveTitle("STORE")
    await expect(page).toHaveURL("https://www.demoblaze.com/index.html")
    await expect(page.locator("//*[@id='nava']")).toBeVisible()

    //Soft assertion
    await expect.soft(page).toHaveTitle("STORE123")
    await expect(page).toHaveURL("https://www.demoblaze.com/index.html")
    await expect(page.locator("//*[@id='nava']")).toBeVisible()

});