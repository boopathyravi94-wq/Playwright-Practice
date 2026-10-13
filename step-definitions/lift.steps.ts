import {Given,When,Then} from '@cucumber/cucumber'

When('i press the 3rd floor button', async function () {
  console.log('Lift moving')
});

Given('i am inside the lift', async function () {
  console.log('Inside the lift');
});
When('the lift starts moving', async function () {
    console.log('Going upwards')
  
});

Then('lift should stop at the 3rd floor', async function () {
  console.log('lift stopped')
});

