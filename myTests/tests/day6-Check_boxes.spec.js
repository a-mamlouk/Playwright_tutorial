/*
URL : https://testautomationpractice.blogspot.com/

*/
import{test,expect} from "@playwright/test";
test.use({viewport:{width:1920,height:1080}})
test("Test check boxes",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // Single check boxes

    const inputSunday = page.locator("xpath=//input[@value='sunday' and @type='checkbox']")
    await inputSunday.check()
    expect(await(inputSunday)).toBeChecked()
    expect(await(inputSunday).isChecked()).toBeTruthy()

    // Multiple check box

    const checkboxes=[
        "//*[@id='tuesday']",
        "//*[@id='friday']"
    ]
    for(const locator of checkboxes){
    await page.locator(locator).check();
    }

    await page.waitForTimeout(5000)

    for(const locator of checkboxes){
        if(await page.locator(locator).isChecked()){
        await page.locator(locator).uncheck();
        await page.waitForTimeout(1000)
        }
    }
    await page.waitForTimeout(5000)

})