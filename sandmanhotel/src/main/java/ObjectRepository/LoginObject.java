package ObjectRepository;

import org.openqa.selenium.By;

/**
 * 
 * @LoginObjects Here I have created all objects which we will use to run Login
 *               test cases.
 *
 */
public class LoginObject {
	// Register in Object
	public static By login_link = By.cssSelector(".ks-btn");
	public static By min_banner = By
			.cssSelector(".floating-bar--tab-booking.main-mobile-toggle.is-active.mobile-is-open>a");
	public static By Register = By.cssSelector(".login-screen-lower-options>a:nth-child(2)");
	public static By user_email = By.name("email");
	public static By Confirm_useremail = By.name("confirm-email");
	public static By Passfield = By.name("password");
	public static By Con_Passfield = By.name("confirm-password");
	public static By Next_CTA = By.cssSelector(".form-panel>form>div:nth-child(1)>div:nth-child(2)>button");
	public static By Select_title = By.cssSelector(".upper-element>select");
	public static By First_name = By
			.cssSelector(".form-panel>form>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)>input");
	public static By sur_name = By
			.cssSelector(".form-panel>form>div:nth-child(2)>div:nth-child(1)>div:nth-child(3)>input");
	public static By Select_country = By.cssSelector(".space-container>select:last-child");
	public static By Select_Gender = By
			.cssSelector(".form-panel>form>div:nth-child(2)>div:nth-child(1)>div:nth-child(5)>select");
	public static By Check_TC = By.cssSelector("#tc-checkbox");
	public static By Check_PP = By.cssSelector("#privacy-checkbox");
	public static By Register_CTA = By.cssSelector(".form-panel>form>div:nth-child(2)>div:nth-child(2)>button");
	public static By Email_valid = By.cssSelector(".italic-text.form-validation-error:nth-child(3n+1)");
	public static By Confirm_Email_valid = By.cssSelector(".italic-text.form-validation-error:nth-child(4n+4)");
	public static By password_valid = By.cssSelector(".italic-text.form-validation-error:nth-child(4n+1)");
	public static By confirm_password_valid = By.cssSelector(".italic-text.form-validation-error:nth-child(6n)");
	public static By Scroll_popup = By.cssSelector("#ks-login__panel");

	// Login and logout object
	public static By user_password = By.name("password");
	public static By menu_option = By.cssSelector(".ks-status__menu");
	public static By profile=By.cssSelector(".ks-status__menu__panel.active.animate>li:nth-child(2)");
	public static By logout = By.cssSelector(".ks-status__menu__panel.active.animate>li:nth-child(3)");
	public static By Login_button = By.cssSelector(".init-button");

	// forgot password object

	public static By forgot = By.cssSelector(".login-screen-lower-options>a:nth-child(2n+1)");
	public static By registered_email = By.cssSelector(".space-container>input");
	public static By register_cta = By.cssSelector(".init-button");
	public static By valid_message = By.cssSelector(".vue-toast_message");
	
	
	
	// mobile_devices
	
	public static By Menu=By.id("mobile-menu-opener");
	 public static By login=By.xpath("//*[@class='ks-btn']");
	 public static By new_register=By.xpath("//*[text()='Register Now']");
	 public static By next_button=By.xpath("(//*[@class='init-button'])[1]");
	 public static By Select_Title=By.xpath("//*[contains(text(),'Select Title')]");
	 

}