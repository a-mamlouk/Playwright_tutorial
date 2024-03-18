/*
URL : https://www.demoblaze.com/index.html
npx playwright test tests/day15-page_object_model.spec.js --headed --project chromium

 */
import {test,expect} from "@playwright/test";
import{LoginPage} from "../pages/LoginPage"
import {HomePage} from "../pages/HomePage";
import {CartPage} from "../pages/CartPage";
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
    const  status = await page.waitForTimeout(2000)
    await cart.checkProductInCart("Nexus 6")
    expect(await status).toBe(true)
    await page.close()
})
