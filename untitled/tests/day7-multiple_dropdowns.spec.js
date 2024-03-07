/*
URL : https://testautomationpractice.blogspot.com/
npx playwright test tests/day7-multiple_dropdowns.spec.js --headed --project chromium
*/
import{test,expect} from "@playwright/test";
test("Multiple drop down tests", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com");

    // select multiple options from multi select dropdown
    await page.selectOption("//*[@id='colors']",['Blue','Red'])

    //Assertion
    const options = await page.locator("//*[@id='colors']/option")
    await expect(options).toHaveCount(5)

    const options2 = await page.$$("//*[@id='colors']/option")
    await expect(options2).toHaveLength(5)
    console.log("Number of options :",options2.length)

    const content = await page.locator("#colors").textContent()
    await expect(content.includes('Blue')).toBeTruthy()

    await page.waitForTimeout(5000)
})