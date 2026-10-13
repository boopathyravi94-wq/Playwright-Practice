import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "../supports/custombrowser";
import { AdactinLogin } from "../pages/adactinlogin";

let adactinLogin: AdactinLogin;

Given("Opening login page", async function () {
    adactinLogin = new AdactinLogin(page);
    await adactinLogin.gotoAdactin();
});

When("entering user login details", async function (dataTable) {
const data = dataTable.rowsHash();
    await adactinLogin.username.fill(data.username);
    await adactinLogin.password.fill(data.password);
});
    
Then("Login the user successfully", async function () {
    await adactinLogin.login.click();
});