/*
npx playwright test tests/day13.spec.js --headed --project chromium
*/

import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    console.log(`Running ${test.info().title}`);
    await page.goto('https://www.google.fr/');
});

test('my test', async ({ page }) => {
    expect(page.url()).toBe('https://www.google.fr/');
});