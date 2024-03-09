/*
URL : https://testautomationpractice.blogspot.com/
npx playwright test tests/day8-dialogs.spec.js --headed --project chromium
*/
import{test,expect} from "@playwright/test";
test("dialog handling event tests", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Enable handling dialog
    page.on("dialog", async dialog =>{
        expect(dialog.type()).toContain("alert")
        expect(dialog.message()).toContain("I am an alert box!")
        await dialog.accept()
    })

    const buttonAlert = page.locator("xpath=//button[@onclick='myFunctionAlert()']")
    await buttonAlert.click()
    await page.waitForTimeout(5000)
})
test("dialog handling event tests 2", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Enable handling dialog
    page.on("dialog", async dialog =>{
        expect(dialog.type()).toContain("confirm")
        expect(dialog.message()).toContain("Press a button!")
        await dialog.accept() // dialog.dissmiss();
    })

    const buttonAlert = page.locator("xpath=//button[@onclick='myFunctionConfirm()']")
    await buttonAlert.click()
    await expect(page.locator("//*[@id='demo']")).toHaveText("You pressed OK!")
    await page.waitForTimeout(5000)
})

test("dialog handling event tests 3", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Enable handling dialog
    page.on("dialog", async dialog =>{
        expect(dialog.type()).toContain("prompt")
        expect(dialog.message()).toContain("Please enter your name:")
        expect(dialog.defaultValue()).toContain("Harry Potter")

        await dialog.accept('John') // dialog.dissmiss();
    })

    const buttonAlert = page.locator("xpath=//button[@onclick='myFunctionPrompt()']")
    await buttonAlert.click()
    await expect(page.locator("//*[@id='demo']")).toHaveText("Hello John! How are you today?")
    await page.waitForTimeout(5000)
})