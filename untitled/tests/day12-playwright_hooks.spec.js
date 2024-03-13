/*
Url : https://www.demoblaze.com/index.html
npx playwright test tests/day12-playwright_hooks.spec.js --headed --project chromium
*/


import{ test , expect} from "@playwright/test";
test.skip('Home page Test', async ({page})=>{
    //login
    await page.goto("https://www.demoblaze.com/index.html")

    const linkModal = page.locator("xpath=//*[@id='login2']")
    await linkModal.click()
    const inputLoginusername = page.locator("xpath=//*[@id='loginusername']")
    await inputLoginusername.fill('pavanol')
    const inputLoginpassword = page.locator("xpath=//*[@id='loginpassword']")
    await inputLoginpassword.fill("test@123")

    const buttonLog = page.locator("xpath=//button[@onclick='logIn()']")
    await buttonLog.click()
    await page.waitForTimeout(2000)

    //home Page
    const products=   await page.$$(".hrefch")
    expect(products).toHaveLength(9)
    console.log("the number of products in page 1 is :",products.length)
    await page.waitForTimeout(1000)

    //Logout

    const linkLogout = page.locator("xpath=//*[@id='logout2']")
    await linkLogout.click()
    await page.waitForTimeout(1000)
});

test('Add Product to cart Test', async ({page})=>{
    //Login
    await page.goto("https://www.demoblaze.com/index.html")

    const linkModal = page.locator("xpath=//*[@id='login2']")
    await linkModal.click()
    const inputLoginusername = page.locator("xpath=//*[@id='loginusername']")
    await inputLoginusername.fill('pavanol')
    const inputLoginpassword = page.locator("xpath=//*[@id='loginpassword']")
    await inputLoginpassword.fill("test@123")

    const buttonLog = page.locator("xpath=//button[@onclick='logIn()']")
    await buttonLog.click()
    await page.waitForTimeout(2000)

    //Add to Cart

    const linkSamsungGalaxy = page.locator("xpath=//a[normalize-space()=\"Samsung galaxy s6\"]")
    await linkSamsungGalaxy.click()
    await page.locator("//a[@onclick='addToCart(1)']").click()
    await page.waitForTimeout(2000)
    await page.locator("//*[@id='cartur']")
        page.on('dialog', async dialog=>{
            expect(dialog.message()).toContain("Product added.")
            await dialog.accept()
        })

    //Logout
    const linkLogout = page.locator("xpath=//*[@id='logout2']")
    await linkLogout.click()
    await page.waitForTimeout(1000)
    
})