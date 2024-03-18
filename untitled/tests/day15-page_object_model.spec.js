/*
URL : https://www.demoblaze.com/index.html
npx playwright test tests/day15-page_object_model.spec.js --headed --project chromium

 */
import {test,expect} from "@playwright/test";
import{LoginPage} from "../pages/LoginPage"
test('Tests POM', async ({page})=> { //page is a fixture
    //LOGIN
    const login = new LoginPage(page);
    await login.gotoLoginPage()
    await login.login("pavanol","test@123")
    await page.waitForTimeout(2000)
    //HOME

    //CART
})
