import { Page, expect, Locator } from "@playwright/test";

import { log } from "node:console";

export class Loginpage1 {
    page: Page;
    Username : Locator;
    password : Locator;
    termCheckbox : Locator;
    loginBtn : Locator;
    errormessage : Locator;

    constructor (page:Page) {
        this.page = page;
        this.Username = page.locator('#username');
        this.password = page.locator('#password');
        this.termCheckbox = page.locator('#terms');
        this.loginBtn = page.getByRole('button',{ name : 'Sign in' });
        this.errormessage = page.locator('.alert-danger');
    }
    async navigate(){
        await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
        await expect (this.page).toHaveURL('https://rahulshettyacademy.com/loginpagePractise/');
    }
    async login(Username: string , password: string){
        await this.Username.fill(Username);
        await this.password.fill(password);
        await this.termCheckbox.check();
        await this.loginBtn.click();
    }
    async verifyDashboard(){
        await expect(this.page).toHaveTitle('ProtoCommerce')
    }
    async verifyError(message:string){
        await expect(this.errormessage).toHaveText(message); 
    }
}

