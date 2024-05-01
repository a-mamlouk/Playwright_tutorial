/*
page. getByAltText() - to locate an element, usually image, by its text alternative.
page.getByPlaceholder() - to locate an input by placeholder.
Page. getByRole() to locate by explicit and implicit accessibility attributes.
page. getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be defined)
*/


const {test,expect} = require('@playwright/test')
test('Built in locators', async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const page_logo = await page.getByAltText('company-branding') // get element using alt
    await expect(page_logo).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button','submit').click()
    const user_name= await page.locator("//p[@class='oxd-userdropdown-name']").textContent()
    console.log(user_name)
    await expect(await page.getByText(user_name)).toBeVisible()
    await expect(await page.getByText("Time at Work")).toBeVisible()
})