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
                //navigating to the request Quotation tab
                proRef.retreiveQuote();
            });
    })

    it("Inputing the Quotation ID", function () {
        proRef.getIdInput();
        proRef.getQuoteButton();
        proRef.getTable();
        proRef.assertTableValue();
    })
})