$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "Search and place order for vegetables",
  "description": "",
  "id": "search-and-place-order-for-vegetables",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Search for items and validate results",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-validate-results",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Greencart Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User searched for Cucumber vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "\"Cucumber\" results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefinitions.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 2893383600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 18
    }
  ],
  "location": "MyStepDefinitions.user_searched_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3223080700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 1
    }
  ],
  "location": "MyStepDefinitions.something_results_are_displayed(String)"
});
formatter.result({
  "duration": 53142900,
  "status": "passed"
});
formatter.after({
  "duration": 86726600,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on Greencart Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User searched for Brinjal vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user proceeded to Checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify selected Brinjal items are displayed on checkout page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefinitions.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 2021562500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 18
    }
  ],
  "location": "MyStepDefinitions.user_searched_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3129368800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.added_items_to_cart()"
});
formatter.result({
  "duration": 172705900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 160281700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 16
    }
  ],
  "location": "MyStepDefinitions.verify_selected_something_items_are_displayed_on_checkout_page(String)"
});
formatter.result({
  "duration": 42689300,
  "status": "passed"
});
formatter.after({
  "duration": 70318400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is on Greencart Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User searched for \u003cName\u003e vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user proceeded to Checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "verify selected \u003cName\u003e items are displayed on checkout page",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;",
  "rows": [
    {
      "cells": [
        "Name"
      ],
      "line": 27,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;1"
    },
    {
      "cells": [
        "Brinjal"
      ],
      "line": 28,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;2"
    },
    {
      "cells": [
        "Beetroot"
      ],
      "line": 29,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is on Greencart Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User searched for Brinjal vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user proceeded to Checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "verify selected Brinjal items are displayed on checkout page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefinitions.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 1898307800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 18
    }
  ],
  "location": "MyStepDefinitions.user_searched_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3173259200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.added_items_to_cart()"
});
formatter.result({
  "duration": 143898800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 115489000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 16
    }
  ],
  "location": "MyStepDefinitions.verify_selected_something_items_are_displayed_on_checkout_page(String)"
});
formatter.result({
  "duration": 26525900,
  "status": "passed"
});
formatter.after({
  "duration": 83602200,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is on Greencart Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User searched for Beetroot vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user proceeded to Checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "verify selected Beetroot items are displayed on checkout page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefinitions.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 2092404700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 18
    }
  ],
  "location": "MyStepDefinitions.user_searched_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3125243700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.added_items_to_cart()"
});
formatter.result({
  "duration": 166294100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 142647300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 16
    }
  ],
  "location": "MyStepDefinitions.verify_selected_something_items_are_displayed_on_checkout_page(String)"
});
formatter.result({
  "duration": 34585500,
  "status": "passed"
});
formatter.after({
  "duration": 78089600,
  "status": "passed"
});
});