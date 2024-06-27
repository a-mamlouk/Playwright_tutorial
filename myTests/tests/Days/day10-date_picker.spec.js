/*
URL : https://testautomationpractice.blogspot.com/
npx playwright test tests/day10-date_picker.spec.js --headed --project chromium
*/

import{test,expect} from "@playwright/test";
test('Date Picker',async ({page})=> {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("//div[@class='fauxborder-left header-fauxborder-left']").isVisible()

    //await page.fill("//input[@id='datepicker']","03/10/2024")
    //date picker
    const year="2025"
    const month="March"
    const day="10"

    await page.click("//input[@id='datepicker']")
    while(true){
        const current_year = await page.locator("//span[@class='ui-datepicker-year']").textContent()
        const current_month=await page.locator("//span[@class='ui-datepicker-month']").textContent()
        if(current_year === year && current_month === month){
            break;
        }
        await page.locator("//a[@title='Next']").click() //next year
        await page.waitForTimeout(500)
    }
    //approach 1
    /*
    const days= await page.$$("//a[@class='ui-state-default']")
    for (const dt of days){
        if(await dt.textContent()===day){
            await dt.click()
            break;
        }
    }
    */
     //approach 2
    await page.click(`//a[@class='ui-state-default'][text()='${day}']`)

    await page.waitForTimeout(5000)
    await page.close()
})


