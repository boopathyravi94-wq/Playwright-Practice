 import {Given,When,Then} from '@cucumber/cucumber'


Given('Launch the browser', async function () {
  console.log("browser launch")
});

When('Enter the username {string}', async function (username) {
  console.log("username")
});

When('Enter the password {string}', async function (password) {
  console.log("password")
});

Then('Validate the home page', async function () {
  console.log("homepage")
}); 


When('Enter the user {string}',async function (user) {
  console.log('user')
});

When('Enter the pass {string}',async function (pass) {
  console.log('pass')
});

When('Click the login button', function () {
  console.log('login button')
});

When('I provide the Account details', async function (dataTable) {
  const data = dataTable.raw();
  console.log(data)
  
});
