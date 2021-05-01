package stepDefinition;

import java.io.IOException;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import automationBase.Base;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.HomePage;

public class MyStepDefinitions {
	public WebDriver driver;
	HomePage h;
	

	@Given("^User is on Greencart Landing page$")
	public void user_is_on_greencart_landing_page() throws IOException {
		driver = Base.getDriver();

	}

	@When("^User searched for (.+) vegetable$")
	public void user_searched_for_something_vegetable(String strArg1) throws InterruptedException {

		h = new HomePage(driver);
		h.getSearch().sendKeys(strArg1);
		Thread.sleep(3000);
	}

	@Then("^\"([^\"]*)\" results are displayed$")
	public void something_results_are_displayed(String strArg1) {

		Assert.assertTrue(driver.findElement(By.cssSelector("h4.product-name")).getText().contains(strArg1));
	}

	@And("^Added items to cart$")
	public void added_items_to_cart() throws Throwable {
		driver.findElement(By.cssSelector("a.increment")).click();
		driver.findElement(By.xpath("//button[contains(text(),'ADD TO CART')]")).click();
	}

	@And("^user proceeded to Checkout page for purchase$")
	public void user_proceeded_to_checkout_page_for_purchase() {
		driver.findElement(By.xpath("//a[@class='cart-icon']//img[contains(@class,'')]")).click();
		driver.findElement(By.xpath("//button[contains(text(),'PROCEED TO CHECKOUT')]")).click();

	}

	@Then("^verify selected (.+) items are displayed on checkout page$")
	public void verify_selected_something_items_are_displayed_on_checkout_page(String strArg1) {
		

		Assert.assertTrue(driver.findElement(By.cssSelector("p.product-name")).getText().contains(strArg1));
	}

}
