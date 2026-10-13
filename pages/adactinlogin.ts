import { Page,Locator } from "playwright";

export class AdactinLogin {

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly login: Locator;

    constructor(page: Page) {

        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.login = page.locator('#login');
    }

    async gotoAdactin() {
    await this.page.goto("https://adactinhotelapp.com/");
    }
}