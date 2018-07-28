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
      "name": "@signupTest_on_mobile"
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
  "name": "he/she Verify \"\u003cuserEmailVal\u003e\" for \"\u003cUserEmail\u003e\" validation message for user email address.",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "he/she Verify \"\u003cConfirm_EmailVal\u003e\" for \"\u003cConfirm_Email\u003e\" validation message for user confirm email address.",
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "he/she verify \"\u003cPasswordVal\u003e\" for \"\u003cPassword\u003e\" validation message for password.",
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "he/she verify \"\u003cconfirm_passwordVal\u003e\" for \"\u003cConfirm_password\u003e\" validation message for confirm password.",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "he/she \"\u003cErrorMsg\u003e\" for \"\u003cuserEmail\u003e\" for \"\u003cConfirm_Email\u003e\" for \"\u003cPassword\u003e\" for \"\u003cconfirm_password\u003e\" validation for all invalid credentials.",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 106,
      "value": "# Then signuptest with screen1 validation"
    }
  ],
  "line": 107,
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
      "line": 108,
      "id": "signup-test-on-web-application;data-driving-new-user-sign-up-screen1;;1"
    },
    {
      "cells": [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "line": 109,
      "id": "signup-test-on-web-application;data-driving-new-user-sign-up-screen1;;2"
    },
    {
      "cells": [
        "test@@fgmail.com",
        "",
        "",
        "",
        "Email is not a valid email.",
        "",
        "",
        "",
        ""
      ],
      "line": 110,
      "id": "signup-test-on-web-application;data-driving-new-user-sign-up-screen1;;3"
    },
    {
      "cells": [
        "test+aa@2pventures.com",
        "test@gmail.com",
        "",
        "",
        "",
        "Email and email confirmation do not match.",
        "",
        "",
        ""
      ],
      "line": 111,
      "id": "signup-test-on-web-application;data-driving-new-user-sign-up-screen1;;4"
    },
    {
      "cells": [
        "test+aa@2pventures.com",
        "test+aa@2pventures.com",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "line": 112,
      "id": "signup-test-on-web-application;data-driving-new-user-sign-up-screen1;;5"
    },
    {
      "cells": [
        "test+aa@2pventures.com",
        "test+aa@2pventures.com",
        "test12",
        "",
        "",
        "",
        "Your password should have at least 8 characters and contain 1 number, 1 uppercase and 1 lowercase letter",
        "",
        ""
      ],
      "line": 113,
      "id": "signup-test-on-web-application;data-driving-new-user-sign-up-screen1;;6"
    },
    {
      "cells": [
        "test+aa@2pventures.com",
        "test+aa@2pventures.com",
        "Test1234",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "line": 114,
      "id": "signup-test-on-web-application;data-driving-new-user-sign-up-screen1;;7"
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
      "line": 115,
      "id": "signup-test-on-web-application;data-driving-new-user-sign-up-screen1;;8"
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
      "line": 116,
      "id": "signup-test-on-web-application;data-driving-new-user-sign-up-screen1;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 109,
  "name": "Data driving new user sign-up screen1",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-new-user-sign-up-screen1;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 90,
      "name": "@signupTest_on_mobile"
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
  "name": "he/she provides the userEmail as \"\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "he/she provides the Confirm_Email address as \"\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "he/she provides the password as \"\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "he/she provides the confirm_password as \"\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "he/she Verify \"\" for \"\" validation message for user email address.",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "he/she Verify \"\" for \"\" validation message for user confirm email address.",
  "matchedColumns": [
    1,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "he/she verify \"\" for \"\" validation message for password.",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "he/she verify \"\" for \"\u003cConfirm_password\u003e\" validation message for confirm password.",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "he/she \"\" for \"\u003cuserEmail\u003e\" for \"\" for \"\" for \"\" validation for all invalid credentials.",
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
  "duration": 193320717,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_tap_on_hamburger_icon()"
});
formatter.result({
  "duration": 6400439,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login_CTA()"
});
formatter.result({
  "duration": 1778665,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_register_button()"
});
formatter.result({
  "duration": 97778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 34
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_userEmail_as(String)"
});
formatter.result({
  "duration": 3493330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 46
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_Confirm_Email_address_as(String)"
});
formatter.result({
  "duration": 150666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_password_as(String)"
});
formatter.result({
  "duration": 139111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 41
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_confirm_password_as(String)"
});
formatter.result({
  "duration": 138667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    },
    {
      "val": "",
      "offset": 22
    }
  ],
  "location": "Sandman_Hotel.he_she_Verify_for_validation_message_for_user_email_address(String,String)"
});
formatter.result({
  "duration": 115555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    },
    {
      "val": "",
      "offset": 22
    }
  ],
  "location": "Sandman_Hotel.he_she_Verify_for_validation_message_for_user_confirm_email_address(String,String)"
});
formatter.result({
  "duration": 120889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    },
    {
      "val": "",
      "offset": 22
    }
  ],
  "location": "Sandman_Hotel.he_she_verify_for_validation_message_for_password(String,String)"
});
formatter.result({
  "duration": 109777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    },
    {
      "val": "\u003cConfirm_password\u003e",
      "offset": 22
    }
  ],
  "location": "Sandman_Hotel.he_she_verify_for_validation_message_for_confirm_password(String,String)"
});
formatter.result({
  "duration": 100000,
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
      "val": "",
      "offset": 33
    },
    {
      "val": "",
      "offset": 40
    },
    {
      "val": "",
      "offset": 47
    }
  ],
  "location": "Sandman_Hotel.he_she_for_for_for_for_validation_for_all_invalid_credentials(String,String,String,String,String)"
});
formatter.result({
  "duration": 240000,
  "status": "passed"
});
formatter.scenario({
  "line": 110,
  "name": "Data driving new user sign-up screen1",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-new-user-sign-up-screen1;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 90,
      "name": "@signupTest_on_mobile"
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
  "name": "he/she provides the userEmail as \"test@@fgmail.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "he/she provides the Confirm_Email address as \"\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "he/she provides the password as \"\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "he/she provides the confirm_password as \"\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "he/she Verify \"Email is not a valid email.\" for \"test@@fgmail.com\" validation message for user email address.",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "he/she Verify \"\" for \"\" validation message for user confirm email address.",
  "matchedColumns": [
    1,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "he/she verify \"\" for \"\" validation message for password.",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "he/she verify \"\" for \"\u003cConfirm_password\u003e\" validation message for confirm password.",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "he/she \"\" for \"\u003cuserEmail\u003e\" for \"\" for \"\" for \"\" validation for all invalid credentials.",
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
  "duration": 108889,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_tap_on_hamburger_icon()"
});
formatter.result({
  "duration": 92445,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login_CTA()"
});
formatter.result({
  "duration": 93778,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_register_button()"
});
formatter.result({
  "duration": 88000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@@fgmail.com",
      "offset": 34
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_userEmail_as(String)"
});
formatter.result({
  "duration": 742666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 46
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_Confirm_Email_address_as(String)"
});
formatter.result({
  "duration": 144445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_password_as(String)"
});
formatter.result({
  "duration": 187111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 41
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_confirm_password_as(String)"
});
formatter.result({
  "duration": 134222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is not a valid email.",
      "offset": 15
    },
    {
      "val": "test@@fgmail.com",
      "offset": 49
    }
  ],
  "location": "Sandman_Hotel.he_she_Verify_for_validation_message_for_user_email_address(String,String)"
});
formatter.result({
  "duration": 193778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    },
    {
      "val": "",
      "offset": 22
    }
  ],
  "location": "Sandman_Hotel.he_she_Verify_for_validation_message_for_user_confirm_email_address(String,String)"
});
formatter.result({
  "duration": 307556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    },
    {
      "val": "",
      "offset": 22
    }
  ],
  "location": "Sandman_Hotel.he_she_verify_for_validation_message_for_password(String,String)"
});
formatter.result({
  "duration": 93777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    },
    {
      "val": "\u003cConfirm_password\u003e",
      "offset": 22
    }
  ],
  "location": "Sandman_Hotel.he_she_verify_for_validation_message_for_confirm_password(String,String)"
});
formatter.result({
  "duration": 94667,
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
      "val": "",
      "offset": 33
    },
    {
      "val": "",
      "offset": 40
    },
    {
      "val": "",
      "offset": 47
    }
  ],
  "location": "Sandman_Hotel.he_she_for_for_for_for_validation_for_all_invalid_credentials(String,String,String,String,String)"
});
formatter.result({
  "duration": 236444,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "Data driving new user sign-up screen1",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-new-user-sign-up-screen1;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 90,
      "name": "@signupTest_on_mobile"
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
  "name": "he/she provides the Confirm_Email address as \"test@gmail.com\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "he/she provides the password as \"\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "he/she provides the confirm_password as \"\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "he/she Verify \"\" for \"test+aa@2pventures.com\" validation message for user email address.",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "he/she Verify \"Email and email confirmation do not match.\" for \"test@gmail.com\" validation message for user confirm email address.",
  "matchedColumns": [
    1,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "he/she verify \"\" for \"\" validation message for password.",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "he/she verify \"\" for \"\u003cConfirm_password\u003e\" validation message for confirm password.",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "he/she \"\" for \"\u003cuserEmail\u003e\" for \"test@gmail.com\" for \"\" for \"\" validation for all invalid credentials.",
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
  "duration": 105778,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_tap_on_hamburger_icon()"
});
formatter.result({
  "duration": 90667,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login_CTA()"
});
formatter.result({
  "duration": 167555,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_register_button()"
});
formatter.result({
  "duration": 81334,
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
  "duration": 132444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@gmail.com",
      "offset": 46
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_Confirm_Email_address_as(String)"
});
formatter.result({
  "duration": 182666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_password_as(String)"
});
formatter.result({
  "duration": 114667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 41
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_confirm_password_as(String)"
});
formatter.result({
  "duration": 130222,
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
  "duration": 80889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email and email confirmation do not match.",
      "offset": 15
    },
    {
      "val": "test@gmail.com",
      "offset": 64
    }
  ],
  "location": "Sandman_Hotel.he_she_Verify_for_validation_message_for_user_confirm_email_address(String,String)"
});
formatter.result({
  "duration": 92445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    },
    {
      "val": "",
      "offset": 22
    }
  ],
  "location": "Sandman_Hotel.he_she_verify_for_validation_message_for_password(String,String)"
});
formatter.result({
  "duration": 137334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    },
    {
      "val": "\u003cConfirm_password\u003e",
      "offset": 22
    }
  ],
  "location": "Sandman_Hotel.he_she_verify_for_validation_message_for_confirm_password(String,String)"
});
formatter.result({
  "duration": 92889,
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
      "val": "test@gmail.com",
      "offset": 33
    },
    {
      "val": "",
      "offset": 54
    },
    {
      "val": "",
      "offset": 61
    }
  ],
  "location": "Sandman_Hotel.he_she_for_for_for_for_validation_for_all_invalid_credentials(String,String,String,String,String)"
});
formatter.result({
  "duration": 134667,
  "status": "passed"
});
formatter.scenario({
  "line": 112,
  "name": "Data driving new user sign-up screen1",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-new-user-sign-up-screen1;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 90,
      "name": "@signupTest_on_mobile"
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
  "name": "he/she provides the password as \"\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "he/she provides the confirm_password as \"\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "he/she Verify \"\" for \"test+aa@2pventures.com\" validation message for user email address.",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "he/she Verify \"\" for \"test+aa@2pventures.com\" validation message for user confirm email address.",
  "matchedColumns": [
    1,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "he/she verify \"\" for \"\" validation message for password.",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "he/she verify \"\" for \"\u003cConfirm_password\u003e\" validation message for confirm password.",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "he/she \"\" for \"\u003cuserEmail\u003e\" for \"test+aa@2pventures.com\" for \"\" for \"\" validation for all invalid credentials.",
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
  "duration": 111555,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_tap_on_hamburger_icon()"
});
formatter.result({
  "duration": 82223,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login_CTA()"
});
formatter.result({
  "duration": 81778,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_register_button()"
});
formatter.result({
  "duration": 80889,
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
  "duration": 119111,
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
  "duration": 129333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_password_as(String)"
});
formatter.result({
  "duration": 122222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 41
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_confirm_password_as(String)"
});
formatter.result({
  "duration": 135111,
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
  "duration": 86222,
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
  "duration": 82666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    },
    {
      "val": "",
      "offset": 22
    }
  ],
  "location": "Sandman_Hotel.he_she_verify_for_validation_message_for_password(String,String)"
});
formatter.result({
  "duration": 152889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    },
    {
      "val": "\u003cConfirm_password\u003e",
      "offset": 22
    }
  ],
  "location": "Sandman_Hotel.he_she_verify_for_validation_message_for_confirm_password(String,String)"
});
formatter.result({
  "duration": 111556,
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
      "val": "",
      "offset": 62
    },
    {
      "val": "",
      "offset": 69
    }
  ],
  "location": "Sandman_Hotel.he_she_for_for_for_for_validation_for_all_invalid_credentials(String,String,String,String,String)"
});
formatter.result({
  "duration": 177333,
  "status": "passed"
});
formatter.scenario({
  "line": 113,
  "name": "Data driving new user sign-up screen1",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-new-user-sign-up-screen1;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 90,
      "name": "@signupTest_on_mobile"
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
  "name": "he/she provides the password as \"test12\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 99,
  "name": "he/she provides the confirm_password as \"\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "he/she Verify \"\" for \"test+aa@2pventures.com\" validation message for user email address.",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "he/she Verify \"\" for \"test+aa@2pventures.com\" validation message for user confirm email address.",
  "matchedColumns": [
    1,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "he/she verify \"Your password should have at least 8 characters and contain 1 number, 1 uppercase and 1 lowercase letter\" for \"test12\" validation message for password.",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "he/she verify \"\" for \"\u003cConfirm_password\u003e\" validation message for confirm password.",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "he/she \"\" for \"\u003cuserEmail\u003e\" for \"test+aa@2pventures.com\" for \"test12\" for \"\" validation for all invalid credentials.",
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
  "duration": 101778,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_tap_on_hamburger_icon()"
});
formatter.result({
  "duration": 93334,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login_CTA()"
});
formatter.result({
  "duration": 87555,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_register_button()"
});
formatter.result({
  "duration": 94667,
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
  "duration": 122667,
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
  "duration": 125334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test12",
      "offset": 33
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_password_as(String)"
});
formatter.result({
  "duration": 140000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 41
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_confirm_password_as(String)"
});
formatter.result({
  "duration": 119111,
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
  "duration": 83112,
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
  "duration": 85778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your password should have at least 8 characters and contain 1 number, 1 uppercase and 1 lowercase letter",
      "offset": 15
    },
    {
      "val": "test12",
      "offset": 126
    }
  ],
  "location": "Sandman_Hotel.he_she_verify_for_validation_message_for_password(String,String)"
});
formatter.result({
  "duration": 76445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    },
    {
      "val": "\u003cConfirm_password\u003e",
      "offset": 22
    }
  ],
  "location": "Sandman_Hotel.he_she_verify_for_validation_message_for_confirm_password(String,String)"
});
formatter.result({
  "duration": 100000,
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
      "val": "test12",
      "offset": 62
    },
    {
      "val": "",
      "offset": 75
    }
  ],
  "location": "Sandman_Hotel.he_she_for_for_for_for_validation_for_all_invalid_credentials(String,String,String,String,String)"
});
formatter.result({
  "duration": 408444,
  "status": "passed"
});
formatter.scenario({
  "line": 114,
  "name": "Data driving new user sign-up screen1",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-new-user-sign-up-screen1;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 90,
      "name": "@signupTest_on_mobile"
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
  "name": "he/she provides the confirm_password as \"\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "he/she Verify \"\" for \"test+aa@2pventures.com\" validation message for user email address.",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "he/she Verify \"\" for \"test+aa@2pventures.com\" validation message for user confirm email address.",
  "matchedColumns": [
    1,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "he/she verify \"\" for \"Test1234\" validation message for password.",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "he/she verify \"\" for \"\u003cConfirm_password\u003e\" validation message for confirm password.",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "he/she \"\" for \"\u003cuserEmail\u003e\" for \"test+aa@2pventures.com\" for \"Test1234\" for \"\" validation for all invalid credentials.",
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
  "duration": 122222,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_tap_on_hamburger_icon()"
});
formatter.result({
  "duration": 85333,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login_CTA()"
});
formatter.result({
  "duration": 88888,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_register_button()"
});
formatter.result({
  "duration": 105777,
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
  "duration": 137333,
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
  "duration": 130667,
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
  "duration": 142222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 41
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_confirm_password_as(String)"
});
formatter.result({
  "duration": 123111,
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
  "duration": 84000,
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
  "duration": 83556,
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
  "duration": 72444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    },
    {
      "val": "\u003cConfirm_password\u003e",
      "offset": 22
    }
  ],
  "location": "Sandman_Hotel.he_she_verify_for_validation_message_for_confirm_password(String,String)"
});
formatter.result({
  "duration": 68444,
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
      "val": "",
      "offset": 77
    }
  ],
  "location": "Sandman_Hotel.he_she_for_for_for_for_validation_for_all_invalid_credentials(String,String,String,String,String)"
});
formatter.result({
  "duration": 116889,
  "status": "passed"
});
formatter.scenario({
  "line": 115,
  "name": "Data driving new user sign-up screen1",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-new-user-sign-up-screen1;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 90,
      "name": "@signupTest_on_mobile"
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
  "name": "he/she Verify \"\" for \"test+aa@2pventures.com\" validation message for user email address.",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "he/she Verify \"\" for \"test+aa@2pventures.com\" validation message for user confirm email address.",
  "matchedColumns": [
    1,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "he/she verify \"\" for \"Test1234\" validation message for password.",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "he/she verify \"Password and password confirmation do not match\" for \"\u003cConfirm_password\u003e\" validation message for confirm password.",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 104,
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
  "duration": 102222,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_tap_on_hamburger_icon()"
});
formatter.result({
  "duration": 94223,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login_CTA()"
});
formatter.result({
  "duration": 82667,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_register_button()"
});
formatter.result({
  "duration": 92445,
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
  "duration": 126667,
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
  "duration": 137777,
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
  "duration": 126222,
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
  "duration": 132888,
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
  "duration": 80889,
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
  "duration": 943555,
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
  "duration": 87111,
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
  "duration": 139111,
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
  "duration": 116000,
  "status": "passed"
});
formatter.scenario({
  "line": 116,
  "name": "Data driving new user sign-up screen1",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-new-user-sign-up-screen1;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 90,
      "name": "@signupTest_on_mobile"
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
  "name": "he/she Verify \"\" for \"test+af@2pventures.com\" validation message for user email address.",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "he/she Verify \"\" for \"test+af@2pventures.com\" validation message for user confirm email address.",
  "matchedColumns": [
    1,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 102,
  "name": "he/she verify \"\" for \"Test1234\" validation message for password.",
  "matchedColumns": [
    2,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "he/she verify \"\" for \"\u003cConfirm_password\u003e\" validation message for confirm password.",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 104,
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
formatter.result({
  "duration": 115555,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_tap_on_hamburger_icon()"
});
formatter.result({
  "duration": 91555,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login_CTA()"
});
formatter.result({
  "duration": 114667,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_register_button()"
});
formatter.result({
  "duration": 78222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test+af@2pventures.com",
      "offset": 34
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_userEmail_as(String)"
});
formatter.result({
  "duration": 116444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test+af@2pventures.com",
      "offset": 46
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_Confirm_Email_address_as(String)"
});
formatter.result({
  "duration": 120000,
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
  "duration": 123111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test1234",
      "offset": 41
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_confirm_password_as(String)"
});
formatter.result({
  "duration": 129777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    },
    {
      "val": "test+af@2pventures.com",
      "offset": 22
    }
  ],
  "location": "Sandman_Hotel.he_she_Verify_for_validation_message_for_user_email_address(String,String)"
});
formatter.result({
  "duration": 81333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    },
    {
      "val": "test+af@2pventures.com",
      "offset": 22
    }
  ],
  "location": "Sandman_Hotel.he_she_Verify_for_validation_message_for_user_confirm_email_address(String,String)"
});
formatter.result({
  "duration": 387111,
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
  "duration": 1007555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    },
    {
      "val": "\u003cConfirm_password\u003e",
      "offset": 22
    }
  ],
  "location": "Sandman_Hotel.he_she_verify_for_validation_message_for_confirm_password(String,String)"
});
formatter.result({
  "duration": 120000,
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
      "val": "test+af@2pventures.com",
      "offset": 33
    },
    {
      "val": "Test1234",
      "offset": 62
    },
    {
      "val": "Test1234",
      "offset": 77
    }
  ],
  "location": "Sandman_Hotel.he_she_for_for_for_for_validation_for_all_invalid_credentials(String,String,String,String,String)"
});
formatter.result({
  "duration": 111555,
  "status": "passed"
});
});