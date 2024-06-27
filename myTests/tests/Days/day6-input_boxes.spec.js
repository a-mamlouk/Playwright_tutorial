/*
URL : https://testautomationpractice.blogspot.com/

*/
import{test,expect} from "@playwright/test";
test("Test input boxes",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await expect(page.locator("xpath=//input[@id='name']")).toBeVisible()
    await expect(page.locator("xpath=//input[@id='name']")).toBeEmpty()
    await expect(page.locator("xpath=//input[@id='name']")).toBeEnabled()
    await expect(page.locator("xpath=//input[@id='name']")).toBeEditable()
    await page.fill("//*[@id='name']","Anas")

    await page.fill("//*[@id='email']","anas@exemple.com");

    await page.waitForTimeout(5000)
})