$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Log1.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 268300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@MobileTest"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User is on netbanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User sign up with following details",
  "rows": [
    {
      "cells": [
        "jenny",
        "abcd",
        "jenny@abc.com",
        "Australia",
        "452644"
      ],
      "line": 27
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Cards displayed are \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdef.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 287339100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdef.user_sign_up_with_following_details(DataTable)"
});
formatter.result({
  "duration": 1022100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdef.home_page_is_populated()"
});
formatter.result({
  "duration": 55300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 21
    }
  ],
  "location": "MyStepdef.cards_displayed_are(String)"
});
formatter.result({
  "duration": 5026000,
  "status": "passed"
});
formatter.after({
  "duration": 95500,
  "status": "passed"
});
});