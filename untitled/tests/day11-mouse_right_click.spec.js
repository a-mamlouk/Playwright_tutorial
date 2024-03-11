/*
URL : https://swisnl.github.io/jQuery-contextMenu/demo.html
npx playwright test tests/day11-mouse_right_click.spec.js --headed --project chromium
*/

import{test,expect} from "@playwright/test";
test('Mouse right click',async ({page})=> {
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")

    const RightClickMe = page.locator("xpath=//span[contains(@class, 'btn')][text()=\"right click me\"]")
    //right click action
    await RightClickMe.click({button: 'right'})

    await page.waitForTimeout(5000)
})