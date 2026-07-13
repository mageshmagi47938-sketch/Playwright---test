import { expect, Page, Locator } from "@playwright/test";

export class LoginPage {

    page : Page
    userName : Locator;
    password : Locator;
    termCheckbox : Locator;
    signInBtn : Locator;
    
    constructor (page:Page) {
        this.page = page;
        this.userName = page.getByLabel('Username');
        this.password = page.getByLabel('Password');
        this.termCheckbox = page.locator('#terms');
        this.signInBtn = page.getByRole('button',{ name: 'Sign In'});
    }
    async navigate() {
        await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
        await expect (this.page).toHaveURL('https://rahulshettyacademy.com/loginpagePractise/',);
    }
    async loginMethod(UN:string, PW:string): Promise<void>{
        await this.userName.fill(UN);
        await this.password.fill(PW);
        await this.termCheckbox.check();
        await this.signInBtn.click();
    }
    async verifydashBoardPage(){
        await expect(this.page).toHaveTitle('ProtoCommerce');
    }
}