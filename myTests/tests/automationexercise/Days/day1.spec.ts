/*
  testing ; https://automationexercise.com/
*/
import { test, expect } from '@playwright/test';
import { login } from '../Data/functions';

test('Verify login page', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await console.log("Hello World");
  await page.getByLabel('Consent', { exact: true }).click();
  await login(page);

  page.close();
});