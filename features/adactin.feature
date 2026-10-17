Feature: Adactin hotel login

 
  #changes done first time
  #changes done second time
  #changes done by team member
  #chnages in the featurefile
  @adactin
  Scenario: Hotel booking
    Given Opening login page
    When entering user login details
      | username | Boopathy9444 |
      | password | Vedhu@123    |
    Then Login the user successfully
