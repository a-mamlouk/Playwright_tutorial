/*
npx playwright test tests/day13_grouping.spec.js --headed --project chromium
*/

import { test, expect } from '@playwright/test';
test.beforeAll(async()=>{
    console.log("This is a before all hook :') ")
})
test.afterAll(async()=>{
    console.log("This is a After all hook :') ")
})
test.beforeEach(async()=>{
    console.log("This is a before each hook :') ")
})

test.afterEach(async()=>{
    console.log("This is a after each hook :') ")
})

test.describe("Group 1-2",()=>{
    test('test 1', async ({ page }) => {
        console.log("This is my test 1")
    });
    test('test 2', async ({ page }) => {
        console.log("This is my test 2")
    });
})

test.describe("Group 3-4",()=>{
    test('test 3', async ({ page }) => {
        console.log("This is my test 3")
    });
    test('test 4', async ({ page }) => {
        console.log("This is my test 4")
    });
})
