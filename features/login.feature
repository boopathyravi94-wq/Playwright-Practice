Feature: Login Page Validation

Scenario: Valid the user crendentials
Given Launch the browser
When Enter the username "Sample"
And Enter the password "Test@123"
Then Validate the home page


Scenario: Valid the invalid crendentials
Given   Launch the browser
When Enter the username "Sample2"
And Enter the password "Test@2"
Then Validate the home page

    @smoke
    Scenario Outline: validate the login details
        When Enter the user "<username>"
        And Enter the pass "<password>"
        And Click the login button
        Examples:
            | username | password |
            | admin1   | Value 1  |
            | admin2   | Value 2  |