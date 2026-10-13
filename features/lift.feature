Feature:  Lift

Scenario: Go to 3rd floor
Given i am inside the lift
When i press the 3rd floor button
And the lift starts moving
Then lift should stop at the 3rd floor