/*
URL : https://foundit.in
npx playwright test tests/day12-upload_files.spec.js --headed --project chromium
*/

import{test,expect} from "@playwright/test";
test('Upload files test ',async ({page})=> {
    await page.goto("https://foundit.in")

    await page.waitForTimeout(5000)
})