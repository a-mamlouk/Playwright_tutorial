import {test,expect} from "@playwright/test";
test('Locate multiple elements', async ({page})=> { //page is a fixture
    await page.goto("https://www.demoblaze.com/index.html");

    //return all locators with a tag
    /*
    const links = await page.$$('a');
    for (const link of links){
        const link_test=await link.textContent();
        console.log(link_test)
    }
    console.log('the number of links is :',links.length)
    */
    await page.waitForSelector("//div[@id='tbodyid']//div")
    const links = await page.$$("//div[@id='tbodyid']//div");
    for (const link of links){
        const link_test=await link.textContent();
        console.log(link_test)
    }
    console.log('the number of links is :',links.length)
    //close browser
    await page.close();
})
