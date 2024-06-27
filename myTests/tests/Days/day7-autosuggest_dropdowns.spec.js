/*
URL : https://www.redbus.in/
npx playwright test tests/day7-autosuggest_dropdowns.spec.js --headed --project chromium
*/
import{test,expect} from "@playwright/test";
test("Auto suggest drop down tests", async ({page})=>{
    await page.goto("https://www.redbus.in");

    await page.locator("xpath=//*[@id='src']").fill("Delhi")
    await page.waitForSelector("//ul/li[@class='sc-iwsKbI jTMXri']/div/text[1]")
    const locators = await page.$$("//ul/li[@class='sc-iwsKbI jTMXri']/div/text[1]")
    for (let locator of locators){
        const value = await locator.textContent()
        console.log("the value is ",value)
        if (value.includes("Dhaula Kuan")){
            await locator.click()
            break;
        }
    }
    await page.waitForTimeout(5000)
})