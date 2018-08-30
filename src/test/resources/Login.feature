Feature: Login test on mobile devices
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
							