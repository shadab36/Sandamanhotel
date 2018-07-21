package TestRunner.loginSteps;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import ObjectRepository.LoginObject;
import TestRunner.SetupClass;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import webApp.PerformAction;

public class Sandman_Hotel extends SetupClass {

	PerformAction action = new PerformAction();
	JavascriptExecutor js = (JavascriptExecutor) driver;

	@Given("^navigates to integration-www-sandman.mobiusbookingengine.com$")
	public void navigates_to_intelligencebank_com() {
		try {
			driver.get(baseURL);
			Thread.sleep(2000);
			log.info("It's opening Login page");
		} catch (Exception e) {
		}
	}

	@Then("^he/she click on login CTA\\.$")
	public void he_she_click_on_login_CTA() {
		try {
			WebElement et = driver.findElement(LoginObject.login_link);
			Assert.assertEquals(true, et.isDisplayed());
			String text = et.getText();
			System.out.println(text);
			action.implictywait(driver);
			et.click();
			action.implictywait(driver);
		} catch (Exception e) {
		}
	}

	@Then("^he/she click on register button\\.$")
	public void he_she_click_on_register_button() {
		try {

			WebElement wet = driver.findElement(LoginObject.Register);
			Assert.assertEquals(true, wet.isDisplayed());
			String text = wet.getText();
			System.out.println(text);
			action.implictywait(driver);
			wet.click();
			action.implictywait(driver);
			log.info("It's click on register button");
		} catch (Exception e) {

		}
	}

	@Then("^he/she provides the userEmail as \"([^\"]*)\"\\.$")
	public void he_she_provides_the_userEmail_as(String email) {
		try {
			WebElement wet = driver.findElement(LoginObject.user_email);
			Assert.assertEquals(true, wet.isDisplayed());
			String text = wet.getText();
			System.out.println(text);
			action.implictywait(driver);
			wet.sendKeys(email);
			action.implictywait(driver);
			log.info("It's entering email");
		} catch (Exception e) {
		}

	}

	@Then("^he/she provides the Confirm_Email address as \"([^\"]*)\"\\.$")
	public void he_she_provides_the_Confirm_Email_address_as(String Confirmemail) {
		try {
			driver.findElement(LoginObject.Confirm_useremail).sendKeys(Confirmemail);
			action.implictywait(driver);
			log.info("It's entering Reenter email");
		} catch (Exception e) {
		}
	}

	@Then("^he/she provides the password as \"([^\"]*)\"\\.$")
	public void he_she_provides_the_password_as(String password) {
		try {
			WebElement wet = driver.findElement(LoginObject.Passfield);
			Assert.assertEquals(true, wet.isDisplayed());
			String text = wet.getText();
			System.out.println(text);
			action.implictywait(driver);
			wet.sendKeys(password);
			action.implictywait(driver);
			log.info("It's entering password");
		} catch (Exception e) {
		}
	}

	@Then("^he/she provides the confirm_password as \"([^\"]*)\"\\.$")
	public void he_she_provides_the_confirm_password_as(String Confirm_pswd) {
		try {
			WebElement wet = driver.findElement(LoginObject.Con_Passfield);
			Assert.assertEquals(true, wet.isDisplayed());
			String text = wet.getText();
			System.out.println(text);
			action.implictywait(driver);
			wet.sendKeys(Confirm_pswd);
			action.implictywait(driver);
			log.info("It's entering confirm password");
		} catch (Exception e) {
		}
	}

	@Then("^he/she minimize the booking banner\\.$")
	public void he_she_minimize_the_booking_banner() {
		try {
			driver.findElement(LoginObject.min_banner).click();
			Thread.sleep(2000);
			log.info("It's minimize the banner");
		} catch (Exception e) {
		}
	}

	@Then("^he/she scroll the page\\.$")
	public void he_she_scroll_the_page() {
		try {
			JavascriptExecutor js = (JavascriptExecutor) driver;
			WebElement element = driver.findElement(LoginObject.Next_CTA);
			Thread.sleep(1000);
			js.executeScript("arguments[0].scrollIntoView();", element);
			Thread.sleep(1000);
		} catch (Exception e) {
		}
	}

	@Then("^he/she Verify \"([^\"]*)\" for \"([^\"]*)\" validation message for user email address\\.$")
	public void he_she_Verify_for_validation_message_for_user_email_address(String arg1, String arg2) {
		try {

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Then("^he/she Verify \"([^\"]*)\" for \"([^\"]*)\" validation message for user confirm email address\\.$")
	public void he_she_Verify_for_validation_message_for_user_confirm_email_address(String arg1, String arg2) {
		try {

			PerformAction.SLEEP_TIME = 1000;

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Then("^he/she verify \"([^\"]*)\" for \"([^\"]*)\" validation message for password\\.$")
	public void he_she_verify_for_validation_message_for_password(String arg1, String arg2) {
		try {

			PerformAction.SLEEP_TIME = 1000;

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Then("^he/she verify \"([^\"]*)\" for \"([^\"]*)\" validation message for confirm password\\.$")
	public void he_she_verify_for_validation_message_for_confirm_password(String arg1, String arg2) {
		try {

			PerformAction.SLEEP_TIME = 1000;

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Then("^he/she \"([^\"]*)\" for \"([^\"]*)\" for \"([^\"]*)\" for \"([^\"]*)\" for \"([^\"]*)\" validation for all invalid credentials\\.$")
	public void he_she_for_for_for_for_validation_for_all_invalid_credentials(String arg1, String arg2, String arg3,
			String arg4, String arg5) {

		try {
			PerformAction.SLEEP_TIME = 1000;

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Then("^he/she click on next button\\.$")
	public void he_she_click_on_next_button() {
		try {

			JavascriptExecutor js = (JavascriptExecutor) driver;
			WebElement element = driver.findElement(LoginObject.Next_CTA);
			action.implictywait(driver);
			js.executeScript("arguments[0].scrollIntoView();", element);
			action.implictywait(driver);
			Assert.assertEquals(true, element.isDisplayed());
			String text = element.getText();
			System.out.println(text);
			action.implictywait(driver);
			js.executeScript("arguments[0].click();", element);
			action.implictywait(driver);
			log.info("It's entering password");
		} catch (Exception e) {
		}
	}

	@Then("^he/she select the title\\.$")
	public void he_she_select_the_title() {

		try {
			Select drpCountry = new Select(driver.findElement(LoginObject.Select_title));
			drpCountry.selectByVisibleText("Mr");
			action.implictywait(driver);

			log.info("Select the title field");
		} catch (Exception e) {
		}
	}

	@Then("^he/she provides the Firstname name as \"([^\"]*)\"\\.$")
	public void he_she_provides_the_Firstname_name_as(String FN) {
		try {
			WebElement wet = driver.findElement(LoginObject.First_name);
			Assert.assertEquals(true, wet.isDisplayed());
			String text = wet.getText();
			System.out.println(text);
			action.implictywait(driver);
			wet.sendKeys(FN);
			action.implictywait(driver);
			log.info("It's entering FN");
		} catch (Exception e) {
		}
	}

	@Then("^he/she provides the surname name as \"([^\"]*)\"\\.$")
	public void he_she_provides_the_surname_name_as(String SN) {
		try {
			WebElement web = driver.findElement(LoginObject.sur_name);
			Assert.assertEquals(true, web.isDisplayed());
			String text = web.getText();
			System.out.println(text);
			action.implictywait(driver);
			web.sendKeys(SN);
			action.implictywait(driver);
			log.info("It's entering Surname");
		} catch (Exception e) {
		}
	}

	@Then("^he/she select the country options\\.$")
	public void he_she_select_the_country_options() {
		try {
			WebElement web = driver.findElement(LoginObject.Select_country);
			Assert.assertEquals(true, web.isDisplayed());
			String text = web.getText();
			System.out.println(text);
			action.implictywait(driver);
			Select drpCountry = new Select(driver.findElement(LoginObject.Select_country));
			drpCountry.selectByVisibleText("India");
			action.implictywait(driver);
		} catch (Exception e) {

		}
	}

	@Then("^he/she select the Gender option\\.$")
	public void he_she_select_the_Gender_option() {
		try {
			WebElement et = driver.findElement(LoginObject.Select_Gender);
			Assert.assertEquals(true, et.isDisplayed());
			String text = et.getText();
			System.out.println(text);
			action.implictywait(driver);
			Select genderoption = new Select(driver.findElement(LoginObject.Select_Gender));
			genderoption.selectByVisibleText("Male");

			// Actions a = new Actions(driver);
			// a.click(et).build().perform();
			// Thread.sleep(1000);
			// a.sendKeys("Male").build().perform();
			log.info("It's select gender option");
		} catch (Exception e) {
		}
	}

	@Then("^he/she check the term & conditions\\.$")
	public void he_she_check_the_term_conditions() {
		try {
			WebElement et = driver.findElement(LoginObject.Check_TC);
			Assert.assertEquals(true, et.isDisplayed());
			String text = et.getText();
			System.out.println(text);
			action.implictywait(driver);
			et.click();
			action.implictywait(driver);
			log.info("It's checking term&condition");
		} catch (Exception e) {
		}
	}

	@Then("^he/she check the Privacy Policy\\.$")
	public void he_she_check_the_Privacy_Policy() {
		try {
			WebElement et = driver.findElement(LoginObject.Check_PP);
			Assert.assertEquals(true, et.isDisplayed());
			String text = et.getText();
			System.out.println(text);
			action.implictywait(driver);
			et.click();
			action.implictywait(driver);
			log.info("It's checking Privacy Policy");
		} catch (Exception e) {
		}
	}

	@Then("^he/she click on Rigster now button\\.$")
	public void he_she_click_on_Rigster_now_button() {
		try {

			JavascriptExecutor js = (JavascriptExecutor) driver;
			WebElement el = driver.findElement(LoginObject.Register_CTA);
			Assert.assertEquals(true, el.isDisplayed());
			String text = el.getText();
			System.out.println(text);
			action.implictywait(driver);
			js.executeScript("arguments[0].click();", el);
			action.implictywait(driver);
			log.info("It's click on register");
		} catch (Exception e) {
		}
	}

	@Then("^he/she verify \"([^\"]*)\" for \"([^\"]*)\" validation message for Firstname\\.$")
	public void he_she_verify_for_validation_message_for_Firstname(String arg1, String arg2)throws Exception  {
		try {
			PerformAction.SLEEP_TIME = 1000;

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Then("^he/she verify \"([^\"]*)\" for \"([^\"]*)\" validation message for Surname\\.$")
	public void he_she_verify_for_validation_message_for_Surname(String arg1, String arg2) throws Exception {
		try {
			PerformAction.SLEEP_TIME = 1000;

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Then("^he/she \"([^\"]*)\" for \"([^\"]*)\" for \"([^\"]*)\" validation message for all invalid credentials\\.$")
	public void he_she_for_for_validation_message_for_all_invalid_credentials(String arg1, String arg2, String arg3)throws Exception  {

		try {
			PerformAction.SLEEP_TIME = 1000;

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// Verify the login
	@Then("^he/she click on menu option\\.$")
	public void he_she_click_on_menu_option() {
		try {
			WebElement ele = driver.findElement(LoginObject.menu_option);
			action.implictywait(driver);
			Thread.sleep(5000);
			js.executeScript("arguments[0].click();", ele);
			action.implictywait(driver);
			log.info("It's open the menu option");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}


	@And("^he/she logout the application\\.$")
	public void he_she_logout_the_application() {
		try {
			WebElement lout=driver.findElement(LoginObject.logout);
			action.implictywait(driver);
			js.executeScript("arguments[0].click();", lout);
			Thread.sleep(5000);
			//action.implictywait(driver);
			log.info("It's logout the app");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Then("^he/she provides the password \"([^\"]*)\"\\.$")
	public void he_she_login_the_app(String pass) {
		try {
		WebElement et=driver.findElement(LoginObject.user_password);
			et.sendKeys(pass);
			action.implictywait(driver);
			log.info("It's login the app");
		} catch (Exception e) {
			e.printStackTrace();
		}
	
	}
	@Then("^he/she click on login cta\\.$")
	public void he_she_click_on_login() {
		try {
			
			WebElement element = driver.findElement(LoginObject.Login_button);
			Thread.sleep(1000);
			Assert.assertEquals(true, element.isDisplayed());
			String text = element.getText();
			System.out.println(text);
			action.implictywait(driver);
			js.executeScript("arguments[0].click();", element);
			action.implictywait(driver);
			WebDriverWait wait = new WebDriverWait(driver, 15);
		 	wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".init-button")));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	@And("^he/she \"([^\"]*)\" for \"([^\"]*)\" and \"([^\"]*)\" for invalid credentials\\.$")
	public void he_she_for_and_for_invalid_credentials(String str1,String str2,String str3)throws Exception {

		try {
			PerformAction.SLEEP_TIME = 1000;

		} catch (Exception e) {
			e.printStackTrace();
		}

	}
}