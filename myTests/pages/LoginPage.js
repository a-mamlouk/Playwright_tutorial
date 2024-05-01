exports.LoginPage = class LoginPage{
    constructor(page) {
        this.page=page;
        this.loginLink="xpath=//*[@id='login2']"
        this.inputLoginusername = "xpath=//*[@id='loginusername']"
        this.inputLoginpassword="xpath=//*[@id='loginpassword']"
        this.buttonLogIn = "xpath=//button[@onclick='logIn()']"
    }
    async gotoLoginPage(){
        await this.page.goto("https://www.demoblaze.com/index.html")
    }
    async login(username, password){
        await this.page.locator(this.loginLink).click()
        await this.page.locator(this.inputLoginusername).fill(username)
        await this.page.locator(this.inputLoginpassword).fill(password)
        await this.page.locator(this.buttonLogIn).click()
    }
}