Feature: Search and place order for vegetables

@SeleniumTest
Scenario: Search for items and validate results
Given User is on Greencart Landing page
When User searched for Cucumber vegetable
Then "Cucumber" results are displayed

@SmokeTest
Scenario: Search for items and then move to checkout page
Given User is on Greencart Landing page
When User searched for Brinjal vegetable
And Added items to cart
And user proceeded to Checkout page for purchase
Then verify selected Brinjal items are displayed on checkout page


@RegressionTest
Scenario Outline: Search for items and then move to checkout page
Given User is on Greencart Landing page
When User searched for <Name> vegetable
And Added items to cart
And user proceeded to Checkout page for purchase
Then verify selected <Name> items are displayed on checkout page

Examples:
|Name			|
|Brinjal	|
|Beetroot	|




