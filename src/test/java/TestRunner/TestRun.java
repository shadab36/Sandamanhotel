package TestRunner;


import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "." }, format ={
		"pretty", "html:target" },tags= {"@Loginttest"})
public class TestRun {
/* comment added */
	@BeforeClass
	public static void beforeClass() throws Exception {
		
			SetupClass.before_Class();
	}	
	@AfterClass
	public static void afterClass() throws InterruptedException {
		SetupClass.afterClass();
}}
