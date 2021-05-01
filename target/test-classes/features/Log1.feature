Feature: Application Login

@WebTest
Scenario: validate browser log
Given Validate the browser
When Browser is triggered
Then Check if browser is started

@SmokeTest
  Scenario: Home page default login
    Given User is on netbanking landing page
    When User login into application with "jin" and password "1234"
    Then Home page is populated
    And Cards displayed are "true"
    
    @SmokeTest
    Scenario: Home page default login
    Given User is on netbanking landing page
    When User login into application with "john" and password "4321"
    Then Home page is populated
    And Cards displayed are "false"
    
    @MobileTest
     Scenario: Home page default login
    Given User is on netbanking landing page
    When User sign up with following details
    | jenny | abcd | jenny@abc.com |Australia | 452644 |
    Then Home page is populated
    And Cards displayed are "false"
        
    @WebTest
    Scenario Outline: Home page default login
    Given User is on netbanking landing page
    When User login in to application with <Username> and password <password>
    Then Home page is populated
    And Cards displayed are "true"
    
     Examples:
     |Username |password |
     |user1		 |pass1		 |	
     |user2		 |pass2		 |
     |user3		 |pass3		 |
     |user4		 |pass4		 |