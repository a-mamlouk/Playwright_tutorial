/*
URL : https://www.demoblaze.com/index.html
npx playwright test tests/day16-retries.spec.js --headed --project chromium --retries=1

*/
import {test,expect} from "@playwright/test";
import{LoginPage} from "../../pages/LoginPage"
import {HomePage} from "../../pages/HomePage";
import {CartPage} from "../../pages/CartPage";
test('Tests POM', async ({page})=> { //page is a fixture
    //LOGIN
    const login = new LoginPage(page);
    await login.gotoLoginPage()
    await login.login("pavanol","test@123")
    await page.waitForTimeout(2000)
    //HOME
    const home=   new HomePage(page)
    await home.addProductToCart("Nexus 6")
    await page.waitForTimeout(2000)
    await home.goToCart()
    //CART
    const cart = new CartPage(page)
    await page.waitForTimeout(2000)
    const status= await cart.checkProductInCart("Nexus 6")
    expect(status).toBe(true)
    await page.close()
})
