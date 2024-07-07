/*
  testing ; locally
*/

import { test, expect } from "@playwright/test";
test("set fixed time", async ({ page }) => {  
  await page.clock.setFixedTime(new Date("2024-02-02T10:00:00")); await page.goto("http://127.0.0.1:5500/myTests/tests/1.45/clock.html");
  await expect(page.getByTestId("clock")).toHaveText("10:00:00");
});
test("manually advance time", async ({ page }) => {
  await page.clock.install({ time: new Date("2024-02-02T08:00:00") }); await page.goto("http://127.0.0.1:5500/myTests/tests/1.45/clock.html");
  
  await page.clock.pauseAt(new Date("2024-02-02T10:00:00"));
  await expect(page.getByTestId("clock")).toHaveText("10:00:00");
  
  await page.clock.fastForward("30:00");
  await expect(page.getByTestId("clock")).toHaveText("10:30:00");
  const test1 = await page.$$("text='10:30:00'")
  if (test1) {
    console.log("test successful");
  } else {
    console.log("test failed");
  }
});  