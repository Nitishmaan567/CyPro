///<reference types = 'cypress'/>
import proPom from "../../PageObject/proPom";
import proPomNext from "../../PageObject/proPomNext";

describe("Retrive Quotation", function () {
    let ref = new proPom();
    let proRef = new proPomNext();
    beforeEach(() => {
        cy.fixture('formdata')
            .then((data) => {
                this.data = data;
                ref.visit();
                ref.setEmail(this.data.email);
                ref.setPassword(this.data.password);
                ref.loginButton();
                cy.title().should("eq", "Insurance Broker System");
                cy.get(".content > h4").should("have.text", this.data.email)
                //navigating to the retreive Quotation tab
                proRef.retreiveQuote();
            });
    })

    it("Verifying the quotation data for a specific quotation ID", function () {
        proRef.getIdInput();
        proRef.getQuoteButton();
        proRef.getTable();
        proRef.assertTableValue();
    })

    it("Clicking the retreive button without any quotation ID", function () {
        proRef.getQuoteButton();
        //asserts that clicking the retrieve button 
        //without inputing any value navigates user back to the home tab
        proRef.getAriaSelectedFlag();
        proRef.getHomeHeading();

    })

    it("Trying to retrieve quotation using a non-existent id", function () {
        proRef.setNonexistentQuotationID();
        proRef.getQuoteButton();
        proRef.checkQuotationErrorMessage();
    })
})