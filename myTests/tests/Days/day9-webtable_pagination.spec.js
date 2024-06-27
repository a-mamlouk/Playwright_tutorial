/*
URL : https://testautomationpractice.blogspot.com/
npx playwright test tests/day9-webtable_pagination.spec.js --headed --project chromium
*/

import{test,expect} from "@playwright/test";
test('Handling table',async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //1 total number of rows and columns
    const table = await page.locator("//table[@id='productTable']")
    //number of columns
    const columns =await table.locator("//thead/tr/th")
    console.log("number of columns :",await columns.count())
    //number of rows
    const rows = await table.locator("//tbody/tr")
    console.log("number of rows :",await rows.count())

    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)

    /*
    //2 select checkbox for product 4
    const matched_row=rows.filter({
        has: page.locator('td'),
        hasText: "Product 4"
    })
    await matched_row.locator("input").check()
    */

    //3 reusable function
    await selectProduct(rows,page,'Product 1')
    await selectProduct(rows,page,'Product 3')
    await selectProduct(rows,page,'Product 5')


    //4 print all product details
    for (let i=0; i< await rows.count();i++){
        const row=rows.nth(i)
        const tds = row.locator('td')

        for (let j=0 ; j < await columns.count()-1;j++){
            console.log(await tds.nth(j).textContent())
        }
    }

    //5 read data from all the pages
    const pages = await page.locator("//ul[@id='pagination']/li/a")
    console.log('Number of page is :',await pages.count())
    for(let p=0; p< await pages.count();p++){
        if(p>0){
            await pages.nth(p).click()
        }
        for (let i=0; i< await rows.count();i++){
            const row=rows.nth(i)
            const tds = row.locator('td')

            for (let j=0 ; j < await columns.count()-1;j++){
                console.log(await tds.nth(j).textContent())
            }
        }
        await page.waitForTimeout(1000)
    }


    await page.waitForTimeout(5000)
})
async function selectProduct(rows,page,product_name){
    const matched_row=rows.filter({
        has: page.locator('td'),
        hasText: product_name
    })
    await matched_row.locator("input").check()
}