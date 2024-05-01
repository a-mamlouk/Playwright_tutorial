/*
URL : https://www.demoblaze.com/index.html
npx playwright test tests/day14-annotations.spec.js --headed --project chromium
*/

import{test,expect} from "@playwright/test";
//only
test("Test1", {
    tag :"@sanity"
},async ({page})=>{
    console.log("This is test number 1")
})

test.skip("Test2 tags", async ({page})=>{
    console.log("This is test number 2")
})

test("Test3 tags @regression", async ({page, browserName})=>{
    if(browserName ==="chromium"){
        test.skip()
    }
    console.log("This is test number 3")
})

test.fixme("Test4 tags @sanity @regression", async ({page})=>{
    console.log("This is a fix me test, number 4")
})

test.skip("Test5 tags @sanity @regression", async ({page})=>{
    console.log("This is a Failed test, number 5")
    test.fail()
    expect(1).toEqual(1)
})
test("Test5 tags @sanity @regression", async ({page})=>{
    console.log("This is a Failed test, number 5")
    test.slow()
    //    test.setTimeout(6000)
    expect(1).toEqual(1)
})