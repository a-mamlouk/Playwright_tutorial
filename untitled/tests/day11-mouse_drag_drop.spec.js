/*
URL : http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html
npx playwright test tests/day11-mouse_drag_drop.spec.js --headed --project chromium
*/

import{test,expect} from "@playwright/test";
test('Mouse drag drop',async ({page})=> {
    await page.goto("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
    const rome = page.locator("//*[@id='box6']")
    const Italy = page.locator("xpath=//*[@id='box106']")
    //approach 1
    await rome.hover()
    await page.mouse.down()

    await Italy.hover()
    await page.mouse.up()
    await page.waitForTimeout(5000)
})
test('Mouse drag drop 2',async ({page})=> {
    await page.goto("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
    const Washington = page.locator("//*[@id='box3']")
    const Usa = page.locator("xpath=//*[@id='box103']")

    //Approach 2
    await Washington.dragTo(Usa)
    await page.waitForTimeout(5000)
})