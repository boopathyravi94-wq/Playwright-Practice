Feature: Adactin hotel login

  @adactin
  #changes done first time
  #changes done second time
  Scenario: Hotel booking
    Given Opening login page
    When entering user login details
      | username | Boopathy9444 |
      | password | Vedhu@123    |
    Then Login the user successfully