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
  "duration": 8878426504,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login_CTA()"
});
formatter.result({
  "duration": 3522929586,
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
  "duration": 5249585222,
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
  "duration": 2831521998,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_minimize_the_booking_banner()"
});
formatter.result({
  "duration": 2957627944,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login()"
});
formatter.result({
  "duration": 5070042760,
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
  "duration": 419556,
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
  "duration": 476001,
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
  "duration": 377350725,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login_CTA()"
});
formatter.result({
  "duration": 415034331,
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
  "duration": 328064437,
  "error_message": "org.openqa.selenium.UnsupportedCommandException: The test with session id 6359665af14a4944bce2276fd7e69cbc has already finished, and can\u0027t receive further commands.\nYou can learn more at https://saucelabs.com/jobs/6359665af14a4944bce2276fd7e69cbc\nFor help, please check https://wiki.saucelabs.com/display/DOCS/Common+Error+Messages\nCommand duration or timeout: 328 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u0027172.23.52.33\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, takesScreenshot\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.37.544315 (730aa6a5fdba159ac9f4c1e8cbc59bf1b5ce12b7), userDataDir\u003dC:\\Users\\ADMINI~1\\AppData\\Local\\Temp\\scoped_dir2996_31754}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, hasMetadata\u003dtrue, handlesAlerts\u003dtrue, databaseEnabled\u003dfalse, version\u003d64.0.3282.119, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, webdriver.remote.sessionid\u003d6359665af14a4944bce2276fd7e69cbc, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 6359665af14a4944bce2276fd7e69cbc\n*** Element info: {Using\u003dname, value\u003demail}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:485)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat TestRunner.loginSteps.Sandman_Hotel.he_she_provides_the_userEmail_as(Sandman_Hotel.java:76)\r\n\tat ✽.Then he/she provides the userEmail as \"test+art@2pventures.com\".(src/test/resources/Sandman.feature:76)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_minimize_the_booking_banner()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "duration": 338451563,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login_CTA()"
});
formatter.result({
  "duration": 345470683,
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
  "duration": 354028028,
  "error_message": "org.openqa.selenium.UnsupportedCommandException: The test with session id 6359665af14a4944bce2276fd7e69cbc has already finished, and can\u0027t receive further commands.\nYou can learn more at https://saucelabs.com/jobs/6359665af14a4944bce2276fd7e69cbc\nFor help, please check https://wiki.saucelabs.com/display/DOCS/Common+Error+Messages\nCommand duration or timeout: 353 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u0027172.23.52.33\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, takesScreenshot\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.37.544315 (730aa6a5fdba159ac9f4c1e8cbc59bf1b5ce12b7), userDataDir\u003dC:\\Users\\ADMINI~1\\AppData\\Local\\Temp\\scoped_dir2996_31754}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, hasMetadata\u003dtrue, handlesAlerts\u003dtrue, databaseEnabled\u003dfalse, version\u003d64.0.3282.119, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, webdriver.remote.sessionid\u003d6359665af14a4944bce2276fd7e69cbc, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 6359665af14a4944bce2276fd7e69cbc\n*** Element info: {Using\u003dname, value\u003demail}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:485)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat TestRunner.loginSteps.Sandman_Hotel.he_she_provides_the_userEmail_as(Sandman_Hotel.java:76)\r\n\tat ✽.Then he/she provides the userEmail as \"test+art01@2pventures.com\".(src/test/resources/Sandman.feature:76)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_minimize_the_booking_banner()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
});