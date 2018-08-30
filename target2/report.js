$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Sandman.feature");
formatter.feature({
  "line": 1,
  "name": "signup Test On Web Application",
  "description": "",
  "id": "signup-test-on-web-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 71,
      "value": "#login the application"
    }
  ],
  "line": 73,
  "name": "login the application.",
  "description": "",
  "id": "signup-test-on-web-application;login-the-application.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 72,
      "name": "@Loginttest"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "navigates to integration-www-sandman.mobiusbookingengine.com",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "he/she click on login CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "he/she provides the userEmail as \"\u003cUserEmail\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "he/she provides the password \"\u003cPassword\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "he/she minimize the booking banner.",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "he/she click on login cta.",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "he/she verify \"\u003cPasswordVal\u003e\" for \"\u003cPassword\u003e\" validation message for password.",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "he/she \"\u003cSignIn_ErrorMsg\u003e\" for \"\u003cUserEmail\u003e\" and \"\u003cPassword\u003e\" for invalid credentials.",
  "keyword": "And "
});
formatter.examples({
  "line": 83,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;login-the-application.;",
  "rows": [
    {
      "cells": [
        "UserEmail",
        "Password",
        "PasswordVal",
        "SignIn_ErrorMsg"
      ],
      "line": 84,
      "id": "signup-test-on-web-application;login-the-application.;;1"
    },
    {
      "cells": [
        "test+art@2pventures.com",
        "",
        "This filed is required",
        ""
      ],
      "line": 85,
      "id": "signup-test-on-web-application;login-the-application.;;2"
    },
    {
      "cells": [
        "test+art@2pventures.com",
        "Test4321",
        "",
        "[OAuthLogin] Email and password combination is incorrect"
      ],
      "line": 86,
      "id": "signup-test-on-web-application;login-the-application.;;3"
    },
    {
      "cells": [
        "test+art01@2pventures.com",
        "Test1234",
        "",
        ""
      ],
      "line": 87,
      "id": "signup-test-on-web-application;login-the-application.;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 85,
  "name": "login the application.",
  "description": "",
  "id": "signup-test-on-web-application;login-the-application.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 72,
      "name": "@Loginttest"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "navigates to integration-www-sandman.mobiusbookingengine.com",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "he/she click on login CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "he/she provides the userEmail as \"test+art@2pventures.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "he/she provides the password \"\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "he/she minimize the booking banner.",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "he/she click on login cta.",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "he/she verify \"This filed is required\" for \"\" validation message for password.",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "he/she \"\" for \"test+art@2pventures.com\" and \"\" for invalid credentials.",
  "matchedColumns": [
    0,
    1,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Sandman_Hotel.navigates_to_www_com_sandman_mobiusbookingengine()"
});
formatter.result({
  "duration": 12176642457,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login_CTA()"
});
formatter.result({
  "duration": 2310627080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test+art@2pventures.com",
      "offset": 34
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_userEmail_as(String)"
});
formatter.result({
  "duration": 2527570036,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 30
    }
  ],
  "location": "Sandman_Hotel.he_she_login_the_app(String)"
});
formatter.result({
  "duration": 262979018,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_minimize_the_booking_banner()"
});
formatter.result({
  "duration": 2158543322,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login()"
});
formatter.result({
  "duration": 4308137300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This filed is required",
      "offset": 15
    },
    {
      "val": "",
      "offset": 44
    }
  ],
  "location": "Sandman_Hotel.he_she_verify_for_validation_message_for_password(String,String)"
});
formatter.result({
  "duration": 482223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    },
    {
      "val": "test+art@2pventures.com",
      "offset": 15
    },
    {
      "val": "",
      "offset": 45
    }
  ],
  "location": "Sandman_Hotel.he_she_for_and_for_invalid_credentials(String,String,String)"
});
formatter.result({
  "duration": 503557,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "login the application.",
  "description": "",
  "id": "signup-test-on-web-application;login-the-application.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 72,
      "name": "@Loginttest"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "navigates to integration-www-sandman.mobiusbookingengine.com",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "he/she click on login CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "he/she provides the userEmail as \"test+art@2pventures.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "he/she provides the password \"Test4321\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "he/she minimize the booking banner.",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "he/she click on login cta.",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "he/she verify \"\" for \"Test4321\" validation message for password.",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "he/she \"[OAuthLogin] Email and password combination is incorrect\" for \"test+art@2pventures.com\" and \"Test4321\" for invalid credentials.",
  "matchedColumns": [
    0,
    1,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Sandman_Hotel.navigates_to_www_com_sandman_mobiusbookingengine()"
});
formatter.result({
  "duration": 5704794273,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login_CTA()"
});
formatter.result({
  "duration": 2212440728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test+art@2pventures.com",
      "offset": 34
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_userEmail_as(String)"
});
formatter.result({
  "duration": 2468077957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test4321",
      "offset": 30
    }
  ],
  "location": "Sandman_Hotel.he_she_login_the_app(String)"
});
formatter.result({
  "duration": 281336375,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_minimize_the_booking_banner()"
});
formatter.result({
  "duration": 2136945960,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login()"
});
formatter.result({
  "duration": 4246797662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    },
    {
      "val": "Test4321",
      "offset": 22
    }
  ],
  "location": "Sandman_Hotel.he_she_verify_for_validation_message_for_password(String,String)"
});
formatter.result({
  "duration": 336001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "[OAuthLogin] Email and password combination is incorrect",
      "offset": 8
    },
    {
      "val": "test+art@2pventures.com",
      "offset": 71
    },
    {
      "val": "Test4321",
      "offset": 101
    }
  ],
  "location": "Sandman_Hotel.he_she_for_and_for_invalid_credentials(String,String,String)"
});
formatter.result({
  "duration": 272445,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "login the application.",
  "description": "",
  "id": "signup-test-on-web-application;login-the-application.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 72,
      "name": "@Loginttest"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "navigates to integration-www-sandman.mobiusbookingengine.com",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "he/she click on login CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "he/she provides the userEmail as \"test+art01@2pventures.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "he/she provides the password \"Test1234\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "he/she minimize the booking banner.",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "he/she click on login cta.",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "he/she verify \"\" for \"Test1234\" validation message for password.",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "he/she \"\" for \"test+art01@2pventures.com\" and \"Test1234\" for invalid credentials.",
  "matchedColumns": [
    0,
    1,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Sandman_Hotel.navigates_to_www_com_sandman_mobiusbookingengine()"
});
formatter.result({
  "duration": 6010182236,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login_CTA()"
});
formatter.result({
  "duration": 2197919375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test+art01@2pventures.com",
      "offset": 34
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_userEmail_as(String)"
});
formatter.result({
  "duration": 2429283239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test1234",
      "offset": 30
    }
  ],
  "location": "Sandman_Hotel.he_she_login_the_app(String)"
});
formatter.result({
  "duration": 296936841,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_minimize_the_booking_banner()"
});
formatter.result({
  "duration": 2123389053,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login()"
});
formatter.result({
  "duration": 4208109611,
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
  "duration": 420445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    },
    {
      "val": "test+art01@2pventures.com",
      "offset": 15
    },
    {
      "val": "Test1234",
      "offset": 47
    }
  ],
  "location": "Sandman_Hotel.he_she_for_and_for_invalid_credentials(String,String,String)"
});
formatter.result({
  "duration": 463556,
  "status": "passed"
});
});