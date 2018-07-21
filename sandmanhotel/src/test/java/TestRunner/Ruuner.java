package TestRunner;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "F:\\AutoProject\\sandmanhotel\\src\\test\\resources\\Sandman.feature" }, format ={
		"pretty", "html:target5" })
public class Ruuner {

	@BeforeClass
	public static void beforeClass() throws Exception {
		
			SetupClass.before_Class();
		
	}

	@AfterClass
	public static void afterClass() throws Exception {
	
			SetupClass.afterClass();
	}
}