Feature: signup Test On Web Application

  @signupValidationTest_page1
  Scenario Outline: Data driving new user sign-up page1
    Given navigates to integration-www-sandman.mobiusbookingengine.com
    Then he/she click on login CTA.
    Then he/she click on register button.
    Then he/she provides the userEmail as "<UserEmail>".
    Then he/she provides the Confirm_Email address as "<Confirm_Email>".
    Then he/she provides the password as "<Password>".
    Then he/she provides the confirm_password as "<confirm_password>".
    Then he/she minimize the booking banner.
    Then he/she scroll the page.
    Then he/she Verify "<userEmailVal>" for "<UserEmail>" validation message for user email address.
    Then he/she Verify "<Confirm_EmailVal>" for "<Confirm_Email>" validation message for user confirm email address.
    Then he/she verify "<PasswordVal>" for "<Password>" validation message for password.
    Then he/she verify "<confirm_passwordVal>" for "<Confirm_password>" validation message for confirm password.
    Then he/she "<ErrorMsg>" for "<userEmail>" for "<Confirm_Email>" for "<Password>" for "<confirm_password>" validation for all invalid credentials.

    #Then signup with page1 validation
    Examples: 
      | UserEmail              | Confirm_Email          | Password | confirm_password | userEmailVal                | Confirm_EmailVal                           | PasswordVal                                                                                              | confirm_passwordVal                             | ErrorMsg |
      |                        |                        |          |                  |                             |                                            |                                                                                                          |                                                 |          |
      | test@@fgmail.com       |                        |          |                  | Email is not a valid email. |                                            |                                                                                                          |                                                 |          |
      | test+aa@2pventures.com | test@gmail.com         |          |                  |                             | Email and email confirmation do not match. |                                                                                                          |                                                 |          |
      | test+aa@2pventures.com | test+aa@2pventures.com |          |                  |                             |                                            |                                                                                                          |                                                 |          |
      | test+aa@2pventures.com | test+aa@2pventures.com | test12   |                  |                             |                                            | Your password should have at least 8 characters and contain 1 number, 1 uppercase and 1 lowercase letter |                                                 |          |
      | test+aa@2pventures.com | test+aa@2pventures.com | Test1234 |                  |                             |                                            |                                                                                                          |                                                 |          |
      | test+aa@2pventures.com | test+aa@2pventures.com | Test1234 | Test4321         |                             |                                            |                                                                                                          | Password and password confirmation do not match |          |
      | test+af@2pventures.com | test+af@2pventures.com | Test1234 | Test1234         |                             |                                            |                                                                                                          |                                                 |          |

  # Then signup with page2 validation
  Scenario Outline: Data driving new user sign-up page2.
    Given navigates to integration-www-sandman.mobiusbookingengine.com
    Then he/she click on login CTA.
    Then he/she click on register button.
    Then he/she provides the userEmail as "<UserEmail>".
    Then he/she provides the Confirm_Email address as "<Confirm_Email>".
    Then he/she provides the password as "<Password>".
    Then he/she provides the confirm_password as "<confirm_password>".
    Then he/she minimize the booking banner.
    Then he/she scroll the page.
    Then he/she click on next button.
    Then he/she select the title.
    Then he/she provides the Firstname name as "<Firstname>".
    Then he/she provides the surname name as "<Surname>".
    Then he/she select the country options.
    Then he/she select the Gender option.
    Then he/she check the term & conditions.
    Then he/she check the Privacy Policy.
    Then he/she minimize the booking banner.
    Then he/she scroll the page.
    Then he/she click on Rigster now button.
    Then he/she verify "<FirstnameVal>" for "<Firstname>" validation message for Firstname.
    Then he/she verify "<SurnameVal>" for "<Surname>" validation message for Surname.
    Then he/she "<Signup_ErrorMsg>" for "<Firstname>" for "<Surname>" validation message for all invalid credentials.

    #Then signup with page2 validation
    Examples: 
      | UserEmail               | Confirm_Email           | Password | confirm_password | Firstname | Surname | FirstnameVal | SurnameVal | Signup_ErrorMsg |
      | test+aa@2pventures.com  | test+aa@2pventures.com  | Test1234 | Test1234         |           |         |              |            |                 |
      | test+aa@2pventures.com  | test+aa@2pventures.com  | Test1234 | Test1234         | Test      |         |              |            |                 |
      | test+aa@2pventures.com  | test+aa@2pventures.com  | Test1234 | Test1234         |           | Amqa    |              |            |                 |
      | test+sad@2pventures.com | test+sad@2pventures.com | Test1234 | Test1234         | Test      | Amqa    |              |            |                 |

  # logout the application
  @Logouttest
  Scenario: logout the app
    Then he/she click on menu option.
    And he/she logout the application.

  #login the application
  @Loginttest
  Scenario Outline: login the application.
    Given navigates to integration-www-sandman.mobiusbookingengine.com
    Then he/she click on login CTA.
    Then he/she provides the userEmail as "<UserEmail>".
    Then he/she provides the password "<Password>".
    Then he/she minimize the booking banner.
    Then he/she click on login cta.
    Then he/she verify "<PasswordVal>" for "<Password>" validation message for password.
    And he/she "<SignIn_ErrorMsg>" for "<UserEmail>" and "<Password>" for invalid credentials.

    Examples: 
      | UserEmail                 | Password | PasswordVal            | SignIn_ErrorMsg                                          |
      | test+art@2pventures.com   |          | This filed is required |                                                          |
      | test+art@2pventures.com   | Test4321 |                        | [OAuthLogin] Email and password combination is incorrect |
      | test+art01@2pventures.com | Test1234 |                        |                                                          |

  @signupTest_onmobile
  Scenario Outline: Data driving new user sign-up screen1
    Given navigates to integration-www-sandman.mobiusbookingengine.com
    Then he/she tap on hamburger icon.
    Then he/she click on login CTA.
    Then he/she click on register button.
    Then he/she provides the userEmail as "<UserEmail>".
    Then he/she provides the Confirm_Email address as "<Confirm_Email>".
    Then he/she provides the password as "<Password>".
    Then he/she provides the confirm_password as "<confirm_password>".
    Then he/she Verify "<userEmailVal>" for "<UserEmail>" validation message for user email address.
    Then he/she Verify "<Confirm_EmailVal>" for "<Confirm_Email>" validation message for user confirm email address.
    Then he/she verify "<PasswordVal>" for "<Password>" validation message for password.
    Then he/she verify "<confirm_passwordVal>" for "<Confirm_password>" validation message for confirm password.
    Then he/she "<ErrorMsg>" for "<userEmail>" for "<Confirm_Email>" for "<Password>" for "<confirm_password>" validation for all invalid credentials.

    # Then signuptest with screen1 validation
    Examples: 
      | UserEmail              | Confirm_Email          | Password | confirm_password | userEmailVal                | Confirm_EmailVal                           | PasswordVal                                                                                              | confirm_passwordVal                             | ErrorMsg |
      |                        |                        |          |                  |                             |                                            |                                                                                                          |                                                 |          |
      | test@@fgmail.com       |                        |          |                  | Email is not a valid email. |                                            |                                                                                                          |                                                 |          |
      | test+aa@2pventures.com | test@gmail.com         |          |                  |                             | Email and email confirmation do not match. |                                                                                                          |                                                 |          |
      | test+aa@2pventures.com | test+aa@2pventures.com |          |                  |                             |                                            |                                                                                                          |                                                 |          |
      | test+aa@2pventures.com | test+aa@2pventures.com | test12   |                  |                             |                                            | Your password should have at least 8 characters and contain 1 number, 1 uppercase and 1 lowercase letter |                                                 |          |
      | test+aa@2pventures.com | test+aa@2pventures.com | Test1234 |                  |                             |                                            |                                                                                                          |                                                 |          |
      | test+aa@2pventures.com | test+aa@2pventures.com | Test1234 | Test4321         |                             |                                            |                                                                                                          | Password and password confirmation do not match |          |
      | test+af@2pventures.com | test+af@2pventures.com | Test1234 | Test1234         |                             |                                            |                                                                                                          |                                                 |          |

  @signupTest_onmobile
  Scenario Outline: Data driving new user sign-up screen2
    Given navigates to integration-www-sandman.mobiusbookingengine.com
    Then he/she tap on hamburger icon.
    Then he/she click on login CTA.
    Then he/she click on register button.
    Then he/she provides the userEmail as "<UserEmail>".
    Then he/she provides the Confirm_Email address as "<Confirm_Email>".
    Then he/she provides the password as "<Password>".
    Then he/she provides the confirm_password as "<confirm_password>".
    Then he/she click on next button.
    Then he/she select the title.
    Then he/she provides the Firstname name as "<Firstname>".
    Then he/she provides the surname name as "<Surname>".
    Then he/she select the country options.
    Then he/she select the Gender option.
    Then he/she check the term & conditions.
    Then he/she check the Privacy Policy.
    Then he/she click on Rigster now button.
    Then he/she verify "<FirstnameVal>" for "<Firstname>" validation message for Firstname.
    Then he/she verify "<SurnameVal>" for "<Surname>" validation message for Surname.
    Then he/she "<Signup_ErrorMsg>" for "<Firstname>" for "<Surname>" validation message for all invalid credentials.

    # Then signuptest with screen2 validation
    Examples: 
      | UserEmail                | Confirm_Email            | Password | confirm_password | Firstname | Surname | FirstnameVal | SurnameVal | Signup_ErrorMsg |
      | test+aa@2pventures.com   | test+aa@2pventures.com   | Test1234 | Test1234         |           |         |              |            |                 |
      | test+aa@2pventures.com   | test+aa@2pventures.com   | Test1234 | Test1234         | Test      |         |              |            |                 |
      | test+aa@2pventures.com   | test+aa@2pventures.com   | Test1234 | Test1234         |           | Amqa    |              |            |                 |
      | test+sad1@2pventures.com | test+sad1@2pventures.com | Test1234 | Test1234         | Test      | Amqa    |              |            |                 |
      
     @Login_Test_onmobile 
  Scenario Outline: login the application.
    Given navigates to integration-www-sandman.mobiusbookingengine.com
    Then he/she tap on hamburger icon.
    Then he/she click on login CTA.
    Then he/she provides the userEmail as "<UserEmail>".
    Then he/she provides the password "<Password>".
    Then he/she click on login cta.
    Then he/she verify "<PasswordVal>" for "<Password>" validation message for password.
    And he/she "<SignIn_ErrorMsg>" for "<UserEmail>" and "<Password>" for invalid credentials.

    Examples: 
      | UserEmail                 | Password | PasswordVal            | SignIn_ErrorMsg                                          |
      | test+art@2pventures.com   |          | This filed is required |                                                          |
      | test+art@2pventures.com   | Test4321 |                        | [OAuthLogin] Email and password combination is incorrect |
      | test+art01@2pventures.com | Test1234 |                        |                                                          |
      
      