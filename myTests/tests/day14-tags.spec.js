/*
URL :
npx playwright test tests/day14-tags.spec.js --headed --project chromium --grep "@sanity"
npx playwright test tests/day14-tags.spec.js --headed --project chromium --grep --% "@sanity^|@regression"  (logical OR operator)
npx playwright test tests/day14-tags.spec.js --headed --project chromium --grep "@sanity^&@regression"
npx playwright test tests/day14-tags.spec.js --headed --project chromium --grep "(?=.*@regression)(?=.*@sanity)" (logical AND operator)

*/

import{test,expect} from "@playwright/test";
test("Test1", {
    tag :"@sanity"
    },async ({page})=>{
    console.log("This is test number 1")
})

test("Test2 tags @sanity", async ({page})=>{
    console.log("This is test number 2")
})

test("Test3 tags @regression", async ({page})=>{
    console.log("This is test number 3")
})

test("Test4 tags @sanity @regression", async ({page})=>{
    console.log("This is test number 4")
})