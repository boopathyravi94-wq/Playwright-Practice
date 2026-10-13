import { Before, After } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";

export let browser: Browser;
export let page: Page;

Before(async function () {
    browser = await chromium.launch({
        headless: false
    });

    page = await browser.newPage();
    console.log("Browser launched");
});

After(async function () {
    await browser.close();
    console.log("Browser closed");
});