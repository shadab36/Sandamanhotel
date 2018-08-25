package TestRunner;

import java.io.FileReader;
import java.net.URL;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

//import GenericAction.NewuserHelper;
import GenericAction.ReusableActions;
import webApp.CommonData;

public class SetupClass {
//	public static NewuserHelper newuserhelper = new NewuserHelper();
	public static WebDriver driver;
	public static String baseURL;
	public static String appiumVersion;
	public static Properties property = new Properties(System.getProperties());
	public static String sauceURL;
	public static String browserName;
	public static String platformVersion;
	public static String platform;
	public static String browserVersion;
	public static String platformName;
	public static String deviceName;
	public static String deviceOrientation;
	public static String oncloud;
	public static String onjenkins;
	public static Logger log;
	public static DesiredCapabilities capabilities;
	public static ReusableActions reusableMethods = new ReusableActions();
	public static String local_chromebrowser;
	public static String local_chrome;
	public static String localtestFF;
	public static String localFF;
	public static String onmobile;
	public static String chrom_mobile;
	public static String local_IE11browser;
	public static String local_IE11;

	@BeforeClass
	public static void before_Class() throws Exception {
		PropertyConfigurator.configure("log4j.properties");
		log = Logger.getLogger("devpinoyLogger");
		property.load(new FileReader(
				"C:\\Users\\AL Moin Webtech\\new test clone\\SandamanhotelNew\\src\\main\\resources\\configuration.property"));
		baseURL = property.getProperty("base_url");
		sauceURL = property.getProperty("sauce_url");
		deviceName = property.getProperty("device_name");
		appiumVersion = property.getProperty("appium_version");
		platformVersion = property.getProperty("platform_version");
		platformName = property.getProperty("platform_name");
		platform = property.getProperty("platform");
		oncloud = property.getProperty("oncloud");
		onmobile = property.getProperty("onmobile");
		onjenkins = property.getProperty("onjenkins");
		local_chromebrowser = property.getProperty("local_chrome_browser");
		local_chrome = property.getProperty("local_chrome");
		localtestFF = property.getProperty("localtestFF");
		localFF = property.getProperty("local_Fifefox_browser");
		local_IE11browser = property.getProperty("local_IE11_browser");
		local_IE11 = property.getProperty("local_IE11");

		// if (browser.equalsIgnoreCase("chrome"))

		if ((local_chrome.equals("yes")) && oncloud.equals("no")) {


			/*** To run desktop project on local */
			local_chromebrowser = System.setProperty(CommonData.Chrome_Name, CommonData.Chrome_Path);
			driver = new ChromeDriver();
			System.out.println("Bname=====" + baseURL);


			// if (browser.equalsIgnoreCase("firefox"))
		}	else if ((localtestFF.equals("yes")) && oncloud.equals("no")) {
			/*** To run desktop project on local */
			
			localFF = System.setProperty(CommonData.Firefox_Name, CommonData.Firefox_Path);
			driver = new FirefoxDriver();
			System.out.println("Bname=====" + baseURL);
			System.out.println(localFF);
			System.out.println(baseURL);
		}
			// if (browser.equalsIgnoreCase("IE11"))

		 else if ((local_IE11.equals("yes")) && oncloud.equals("no")) {
			/*** To run desktop project on local */
			local_IE11browser = System.setProperty(CommonData.IE_Name, CommonData.IE_Path);
			driver = new InternetExplorerDriver();
			System.out.println("Bname=====" + baseURL);
			System.out.println(local_IE11);
			System.out.println(baseURL);

			// if (browser.equalsIgnoreCase("mobile"))
		} else if ((onmobile.equals("yes")) && oncloud.equals("no")) {
			baseURL = property.getProperty("base_url");
			System.out.println("Bname=====" + baseURL);
			DesiredCapabilities cab = new DesiredCapabilities();
			cab.setCapability("deviceName", "ZW2223XXGX");
			cab.setCapability("platformName", "Android");
			cab.setCapability("platformVersion", "7.1.1");
			cab.setBrowserName("chrome");
			// provided appium serverid
			// Thread.sleep(2000);
			// provided appium server id and create object to launch app in ARD
			Thread.sleep(2000);

			// if (browser.equalsIgnoreCase("saucelabs"))
	}
			
else  {
		
			platform = System.getenv("SELENIUM_PLATFORM");
			browserName = System.getenv("SELENIUM_BROWSER");
			browserVersion = System.getenv("SELENIUM_VERSION");
			System.out.println("Platform from sauce labs == "+platform);
			System.out.println("browser name from sauce labs == "+browserName);
			System.out.println("browser Version from sauce labs == "+browserVersion);
			
			System.out.println("**********************hello****************");
			DesiredCapabilities caps = new DesiredCapabilities();
			//caps.setCapability("browser", browserName);
			caps.setBrowserName(browserName);
			caps.setCapability("platform", platform);
			caps.setCapability("version", browserVersion);
			caps.setCapability("name", "My Desktop automation test-4");
			driver = new RemoteWebDriver(new URL(sauceURL), caps);
			

		}

	}

	@AfterClass
	public static void afterClass() throws InterruptedException{
		
			driver.close();
			driver.quit();
			Thread.sleep(2000);
		
	}
}
