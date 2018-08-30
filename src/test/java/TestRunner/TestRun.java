package TestRunner;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = {".","."}, format ={
		"pretty", "html:target2"},
glue={"TestRunner.loginSteps"},
tags= {"@Loginttest"})
public class TestRun {
	@BeforeClass
	public static void beforeClass() throws Exception {
		
			SetupClass.before_Class();
	}	
	
}
