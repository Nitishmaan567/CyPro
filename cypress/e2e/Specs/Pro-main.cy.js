///<reference types = 'cypress'/>
import proPom from "../../PageObject/proPom";

describe("Verifying Logging in scenarios", function () {
    let ref = new proPom();
    beforeEach(() => {
        ref.visit();
        cy.fixture('formdata')
            .then((data) => {
                this.data = data;
            })
    })
    //Login success scenario
    it("Logging in with valid credentials", () => {
        ref.setEmail(this.data.email);
        ref.setPassword(this.data.password);
        ref.loginButton();
        cy.title().should("eq", "Insurance Broker System");
        cy.get(".content > h4").should("have.text", this.data.email)
    });

    //Login failure scenario
    it("Logging in with invalid credentials", () => {
        ref.setEmail(this.data.invalidData);
        ref.setPassword(this.data.invalidData);
        ref.loginButton();
        cy.wait(3000);
        cy.title().should("eq", "Insurance Broker System - Login");
        ref.errorMsg();
    })

    //Login failure scenario
    it("Logging in with invalid email and valid password", () => {
        ref.setEmail(this.data.invalidData);
        ref.setPassword(this.data.password);
        ref.loginButton();
        cy.wait(3000);
        cy.title().should("eq", "Insurance Broker System - Login")
        ref.errorMsg();
    })

    //Login failure scenario
    it("Logging in with valid email and invalid password", () => {
        ref.setEmail(this.data.email);
        ref.setPassword(this.data.invalidData);
        ref.loginButton();
        cy.wait(3000);
        cy.title().should("eq", "Insurance Broker System - Login");
        ref.errorMsg();
    })

    //Login failure scenario
    //This test case fails as the system allows "Log In" to function 
    //when user tries loggin in without providing any credentials
    it("hitting log in button without providing credentials", () => {
        ref.loginButton();
        ref.errorMsg();
        //This will fail because there is no validation for this scenario
    })

})