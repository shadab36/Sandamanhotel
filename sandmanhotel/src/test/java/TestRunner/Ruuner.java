package TestRunner;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "." }, format ={
		"pretty", "html:target" },tags= {"@Loginttest"})
public class Ruuner {

	@BeforeClass
	public static void beforeClass() throws Exception {
		
			SetupClass.before_Class();
	}	
			@AfterClass
			public static void AfterClass() throws Exception {	
				SetupClass.afterClass();
			
}}
