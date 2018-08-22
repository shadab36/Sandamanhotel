$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Sandman.feature");
formatter.feature({
  "line": 1,
  "name": "signup Test On Web Application",
  "description": "",
  "id": "signup-test-on-web-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 91,
  "name": "Data driving new user sign-up screen1",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-new-user-sign-up-screen1",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 90,
      "name": "@signupValidationTest_on_mobile"
    }
  ]
});
formatter.step({
  "line": 92,
  "name": "navigates to integration-www-sandman.mobiusbookingengine.com",
  "keyword": "Given "
});
formatter.step({
  "line": 93,
  "name": "he/she tap on hamburger icon.",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "he/she click on login CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "he/she click on register button.",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "he/she provides the userEmail as \"\u003cUserEmail\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "he/she provides the Confirm_Email address as \"\u003cConfirm_Email\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "he/she provides the password as \"\u003cPassword\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "he/she provides the confirm_password as \"\u003cconfirm_password\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "he/she click on next button.",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "he/she Verify \"\u003cuserEmailVal\u003e\" for \"\u003cUserEmail\u003e\" validation message for user email address.",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "he/she Verify \"\u003cConfirm_EmailVal\u003e\" for \"\u003cConfirm_Email\u003e\" validation message for user confirm email address.",
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "he/she verify \"\u003cPasswordVal\u003e\" for \"\u003cPassword\u003e\" validation message for password.",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "he/she verify \"\u003cconfirm_passwordVal\u003e\" for \"\u003cConfirm_password\u003e\" validation message for confirm password.",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "he/she \"\u003cErrorMsg\u003e\" for \"\u003cuserEmail\u003e\" for \"\u003cConfirm_Email\u003e\" for \"\u003cPassword\u003e\" for \"\u003cconfirm_password\u003e\" validation for all invalid credentials.",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 107,
      "value": "# Then signuptest with screen1 validation"
    }
  ],
  "line": 108,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-new-user-sign-up-screen1;",
  "rows": [
    {
      "cells": [
        "UserEmail",
        "Confirm_Email",
        "Password",
        "confirm_password",
        "userEmailVal",
        "Confirm_EmailVal",
        "PasswordVal",
        "confirm_passwordVal",
        "ErrorMsg"
      ],
      "line": 109,
      "id": "signup-test-on-web-application;data-driving-new-user-sign-up-screen1;;1"
    },
    {
      "cells": [
        "test+aa@2pventures.com",
        "test+aa@2pventures.com",
        "Test1234",
        "Test4321",
        "",
        "",
        "",
        "Password and password confirmation do not match",
        ""
      ],
      "line": 110,
      "id": "signup-test-on-web-application;data-driving-new-user-sign-up-screen1;;2"
    },
    {
      "cells": [
        "test+af@2pventures.com",
        "test+af@2pventures.com",
        "Test1234",
        "Test1234",
        "",
        "",
        "",
        "",
        ""
      ],
      "line": 111,
      "id": "signup-test-on-web-application;data-driving-new-user-sign-up-screen1;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 110,
  "name": "Data driving new user sign-up screen1",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-new-user-sign-up-screen1;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 90,
      "name": "@signupValidationTest_on_mobile"
    }
  ]
});
formatter.step({
  "line": 92,
  "name": "navigates to integration-www-sandman.mobiusbookingengine.com",
  "keyword": "Given "
});
formatter.step({
  "line": 93,
  "name": "he/she tap on hamburger icon.",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "he/she click on login CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "he/she click on register button.",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "he/she provides the userEmail as \"test+aa@2pventures.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "he/she provides the Confirm_Email address as \"test+aa@2pventures.com\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "he/she provides the password as \"Test1234\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "he/she provides the confirm_password as \"Test4321\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "he/she click on next button.",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "he/she Verify \"\" for \"test+aa@2pventures.com\" validation message for user email address.",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "he/she Verify \"\" for \"test+aa@2pventures.com\" validation message for user confirm email address.",
  "matchedColumns": [
    1,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "he/she verify \"\" for \"Test1234\" validation message for password.",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "he/she verify \"Password and password confirmation do not match\" for \"\u003cConfirm_password\u003e\" validation message for confirm password.",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "he/she \"\" for \"\u003cuserEmail\u003e\" for \"test+aa@2pventures.com\" for \"Test1234\" for \"Test4321\" validation for all invalid credentials.",
  "matchedColumns": [
    1,
    2,
    3,
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Sandman_Hotel.navigates_to_www_com_sandman_mobiusbookingengine()"
});
formatter.result({
  "duration": 32021469796,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_tap_on_hamburger_icon()"
});
formatter.result({
  "duration": 251706002,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login_CTA()"
});
formatter.result({
  "duration": 170151262,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_register_button()"
});
formatter.result({
  "duration": 209128630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test+aa@2pventures.com",
      "offset": 34
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_userEmail_as(String)"
});
formatter.result({
  "duration": 208958408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test+aa@2pventures.com",
      "offset": 46
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_Confirm_Email_address_as(String)"
});
formatter.result({
  "duration": 234724209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test1234",
      "offset": 33
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_password_as(String)"
});
formatter.result({
  "duration": 354288315,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test4321",
      "offset": 41
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_confirm_password_as(String)"
});
formatter.result({
  "duration": 360161209,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_next_button()"
});
formatter.result({
  "duration": 516681792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    },
    {
      "val": "test+aa@2pventures.com",
      "offset": 22
    }
  ],
  "location": "Sandman_Hotel.he_she_Verify_for_validation_message_for_user_email_address(String,String)"
});
formatter.result({
  "duration": 221333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    },
    {
      "val": "test+aa@2pventures.com",
      "offset": 22
    }
  ],
  "location": "Sandman_Hotel.he_she_Verify_for_validation_message_for_user_confirm_email_address(String,String)"
});
formatter.result({
  "duration": 160000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    },
    {
      "val": "Test1234",
      "offset": 22
    }
  ],
  "location": "Sandman_Hotel.he_she_verify_for_validation_message_for_password(String,String)"
});
formatter.result({
  "duration": 198222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password and password confirmation do not match",
      "offset": 15
    },
    {
      "val": "\u003cConfirm_password\u003e",
      "offset": 69
    }
  ],
  "location": "Sandman_Hotel.he_she_verify_for_validation_message_for_confirm_password(String,String)"
});
formatter.result({
  "duration": 156001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    },
    {
      "val": "\u003cuserEmail\u003e",
      "offset": 15
    },
    {
      "val": "test+aa@2pventures.com",
      "offset": 33
    },
    {
      "val": "Test1234",
      "offset": 62
    },
    {
      "val": "Test4321",
      "offset": 77
    }
  ],
  "location": "Sandman_Hotel.he_she_for_for_for_for_validation_for_all_invalid_credentials(String,String,String,String,String)"
});
formatter.result({
  "duration": 196889,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "Data driving new user sign-up screen1",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-new-user-sign-up-screen1;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 90,
      "name": "@signupValidationTest_on_mobile"
    }
  ]
});
formatter.step({
  "line": 92,
  "name": "navigates to integration-www-sandman.mobiusbookingengine.com",
  "keyword": "Given "
});
formatter.step({
  "line": 93,
  "name": "he/she tap on hamburger icon.",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "he/she click on login CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "he/she click on register button.",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "he/she provides the userEmail as \"test+af@2pventures.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "he/she provides the Confirm_Email address as \"test+af@2pventures.com\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "he/she provides the password as \"Test1234\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "he/she provides the confirm_password as \"Test1234\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "he/she click on next button.",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "he/she Verify \"\" for \"test+af@2pventures.com\" validation message for user email address.",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "he/she Verify \"\" for \"test+af@2pventures.com\" validation message for user confirm email address.",
  "matchedColumns": [
    1,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "he/she verify \"\" for \"Test1234\" validation message for password.",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "he/she verify \"\" for \"\u003cConfirm_password\u003e\" validation message for confirm password.",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "he/she \"\" for \"\u003cuserEmail\u003e\" for \"test+af@2pventures.com\" for \"Test1234\" for \"Test1234\" validation for all invalid credentials.",
  "matchedColumns": [
    1,
    2,
    3,
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Sandman_Hotel.navigates_to_www_com_sandman_mobiusbookingengine()"
});
