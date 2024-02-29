//https://www.demoblaze.com/index.html
/*
to locate elements we can use:
    -property
    -css
    -xpath
*/
import {test,expect} from "@playwright/test";
test('Locators', async ({page})=> { //page is a fixture
    await page.goto("https://www.demoblaze.com/index.html");

    //click on "log in"
    //await page.locator("//a[contains(@data-target, 'log')]").click();
    //await page.locator('id=login2').click();
    await page.click('id=login2');

    //fill form with CSS
    // type username
    //await page.locator('#loginusername').fill('Anas');
    await page.fill('#loginusername','pavanol')
    // type password
    await page.fill("input[id='loginpassword']",'test@123');
    // click on log in
    await page.click("//button[contains(@onclick, 'log')]")

    //verify logout link presence
        const logout_link = await page.locator("//button[@onclick='logIn()']")
        await expect(logout_link).toBeVisible();

    //close browser
    await page.close();
})
