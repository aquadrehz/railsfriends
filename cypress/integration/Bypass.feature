Feature: Bypass

  Scenario: TC_00002 Bypass login to Railsfriends
    Given bypass login
    Then sign out displayed on menu bar
