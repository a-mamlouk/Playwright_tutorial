/*
Url : https://www.demoblaze.com/index.html
npx playwright test tests/day12-playwright_hooks_2.spec.js --headed --project chromium
*/

import {test, expect} from "@playwright/test";
let page;
test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();

    //login
    await page.goto('https://www.demoblaze.com/index.html')

    const linkModal = page.locator("xpath=//*[@id='login2']")
    await linkModal.click()
    const inputLoginusername = page.locator("xpath=//*[@id='loginusername']")
    await inputLoginusername.fill('pavanol')
    const inputLoginpassword = page.locator("xpath=//*[@id='loginpassword']")
    await inputLoginpassword.fill("test@123")

    const buttonLog = await page.locator("xpath=//button[@onclick='logIn()']")
    await buttonLog.click()
    await page.waitForTimeout(2000)
});

test.afterEach(async () => {

    //Logout
    const linkLogout = await page.locator("xpath=//*[@id='logout2']")
    await linkLogout.click()
    await page.waitForTimeout(1000)
    await page.close();
});

test('Home page Test', async ()=> {

    //home Page
    const products = await page.$$(".hrefch")
    await expect(products).toHaveLength(9)
    await console.log("the number of products in page 1 is :", products.length)
    await page.waitForTimeout(1000)
})

test('Add Product to cart Test', async ()=>{

    //Add to Cart

    const linkSamsungGalaxy = await page.locator("xpath=//a[normalize-space()=\"Samsung galaxy s6\"]")
    await linkSamsungGalaxy.click()
    await page.locator("//a[@onclick='addToCart(1)']").click()
    await page.waitForTimeout(2000)
    await page.locator("//*[@id='cartur']")
    page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain("Product added.")
        await dialog.accept()
    })
})