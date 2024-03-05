/*
URL : https://testautomationpractice.blogspot.com/

*/
import{test,expect} from "@playwright/test";
test("handle radio buttons",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Radio button
    await page.locator("//*[@id='male']").check()
    await page.check("//*[@id='female']")
    await page.waitForTimeout(1000)
    await expect(page.locator("//*[@id='male']")).not.toBeChecked()
    await expect(page.locator("//*[@id='female']").isChecked()).toBeTruthy()

    await page.waitForTimeout(5000)
})