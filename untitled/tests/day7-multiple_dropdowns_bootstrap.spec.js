/*
URL : https://www.jquery-az.com/boots/demo.php?ex=63.0_2
npx playwright test tests/day7-multiple_dropdowns_bootstrap.spec --headed --project chromium
*/
import{test,expect} from "@playwright/test";
test("Bootstrap drop down tests", async ({page})=>{
    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");

    await page.locator(".multiselect ").click();
    //1
    const options=   await page.locator("ul > li  label input") // //ul/li//label/input
    //2

    // const  opts=await page.$$("//ul/li//label/input")
    // await expect(opts.length).toBe(11)
    const  opts=await page.$$("//ul/li//label")
    // can be used to check and uncheck values
    for (let opt of opts){
        const value = await opt.innerText()
        console.log("the value is :",value);
        if (value.includes("HTML") || value.includes("CSS")){
            await opt.click()
        }
    }

    await page.waitForTimeout(5000)
})