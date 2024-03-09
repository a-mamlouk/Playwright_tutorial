/*
URL : https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
npx playwright test tests/day8-hidden_items_dropdowns.spec.js --headed --project chromium
*/
import{test,expect} from "@playwright/test";
test("hidden drop down tests", async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("//img[@alt='company-branding']").isVisible()
    const inputUsername = page.locator("xpath=//input[@name='username']")
    await inputUsername.fill("Admin")

    const inputPassword = page.locator("xpath=//input[@type='password']")
    await inputPassword.fill("admin123")

    const buttonLogin = page.locator("xpath=//button")
    await buttonLogin.click()
    await page.waitForTimeout(1000)

    await page.locator("//span[normalize-space()='PIM']").click()
    const jobtitle = page.locator("xpath=/html/body/div/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[6]/div/div[2]/div/div/div[2]/i")
    await jobtitle.click()
    await page.waitForTimeout(1000)
    const options = await page.$$("//div[@role='option']/span")
    await page.waitForTimeout(1000)
    await console.log("the length is : ",options.length)

    for (let option of options){
        const job_Title = await option.textContent()
        console.log(job_Title)
        if (job_Title.includes("QA Engineer")){
            await option.click()
            break
        }
    }
    await page.waitForTimeout(5000)
})