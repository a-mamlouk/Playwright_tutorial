/*
URL : https://testautomationpractice.blogspot.com/
npx playwright test tests/day6-Dropdown.spec.js --headed --project chromium

*/
import{test,expect} from "@playwright/test";
test("Test Drop downs",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //select from dop down n methods

    await page.locator("//*[@id='country']").selectOption("India")
    await page.waitForTimeout(1000)
    await page.locator("//*[@id='country']").selectOption({label : "Canada"})
    await page.waitForTimeout(1000)
    await page.locator("//*[@id='country']").selectOption({value : "uk"})
    await page.waitForTimeout(1000)
    await page.locator("//*[@id='country']").selectOption({index : 1})
    await page.waitForTimeout(1000)
    await page.selectOption("#country","India")

    //Assertion number
    const number_country = await page.locator("//*[@id='country']/option")
    await expect(number_country).toHaveCount(10)

    const options=await page.$$("//*[@id='country']/option")
    console.log("number of options", options.length)
    await expect(options.length).toBe(10)

    // check a value
    const content= await page.locator("#country").textContent()
    await expect(content.includes("India")).toBeTruthy()

    //
    const options2=await page.$$("//*[@id='country']/option")
    let status = false
    for (const option of options2){
        console.log(await option.textContent())
        let value = await option.textContent()
        if (value.includes('France')){
        status = true
            break;
        }
    }
    expect(status).toBeTruthy()

    await page.waitForTimeout(5000)
})