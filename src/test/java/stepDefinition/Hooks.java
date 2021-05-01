package stepDefinition;

import automationBase.Base;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends Base{
	
	@Before("@MobileTest")
	public void beforevalidation()
	{
		System.out.println("Mobile before hook");
	}
	
	@After("@SmokeTest")
	public void aftervalidation()
	{
		driver.close();
	}
	
	@After("@RegressionTest")
	public void AfterSeleniumTest()
	{
		driver.close();
	}

}
