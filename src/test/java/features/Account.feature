Feature: Application Login

Background:
Given Validate the browser
When Browser is triggered
Then Check if browser is started

    
    @RegTest
    Scenario: Home page default login
    Given User is on netbanking landing page
    When User login into application with "john" and password "4321"
    Then Home page is populated
    And Cards displayed are "false"
    
     