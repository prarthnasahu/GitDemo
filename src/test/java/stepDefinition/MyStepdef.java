package stepDefinition;

import java.util.List;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepdef {
	
	@Given("^Validate the browser$")
    public void validate_the_browser() throws Throwable {
       System.out.println("validate browser");
    }

    @When("^Browser is triggered$")
    public void browser_is_triggered() throws Throwable {
        System.out.println("Browser triggered");
    }

    @Then("^Check if browser is started$")
    public void check_if_browser_is_started() throws Throwable {
        System.out.println("browser started");
    }

	
	 @Given("^User is on netbanking landing page$")
	    public void user_is_on_netbanking_landing_page() {
	        // Write code here that turns the phrase above into concrete actions
	        System.out.println("in given statement");
	        
	    }

	 @When("^User login into application with \"([^\"]*)\" and password \"([^\"]*)\"$")
	    public void user_login_into_application_with_something_and_password_something(String strArg1, String strArg2) {
		 System.out.println("in when statement" + strArg1 + strArg2);
	    }

	    @Then("^Home page is populated$")
	    public void home_page_is_populated() {
	        // Write code here that turns the phrase above into concrete actions
	        System.out.println("in then statement");
	       
	    }

	    @Then("^Cards displayed are \"([^\"]*)\"$")
	    public void cards_displayed_are(String arg1) {
	        // Write code here that turns the phrase above into concrete actions
	    	System.out.println(arg1);
	    }
	    
	    @When("^User sign up with following details$")
	    public void user_sign_up_with_following_details(DataTable data){
	        // Write code here that turns the phrase above into concrete actions
	        // For automatic transformation, change DataTable to one of
	        // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	        // E,K,V must be a scalar (String, Integer, Date, enum etc)
	        
	    	//List<List<String>> obj1 = data.asLists(null);
	    	
	    	List<List<String>> obj = data.raw();
	    	System.out.println(obj.get(0).get(0));
	    	System.out.println(obj.get(0).get(1));
	    }


	    @When("^User login in to application with (.+) and password (.+)$")
	    public void user_login_into_application_with_and_password(String username, String password){
	        
	    	System.out.println(username);
	    	System.out.println(password);
	    }
	    
	    


}
