export async function login(page) {
  const email = "404huntersteel@gmail.com";
  const password = "@fvTX@kP3sUXfdj";
  await page.click("//a[normalize-space()='Signup / Login']");
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(email);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForNavigation();
}