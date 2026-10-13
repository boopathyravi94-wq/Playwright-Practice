import {test,expect} from '@playwright/test';

test ('test',async({page}) =>{

    ////////without page object model ////////

    await page.goto('https://www.demoblaze.com/');

    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('Boopathy64');
    await page.locator('#loginpassword').fill('Test@123')
    await page.getByRole('button',{name: 'Log in'}).click();
    await page.waitForTimeout(3000)
})