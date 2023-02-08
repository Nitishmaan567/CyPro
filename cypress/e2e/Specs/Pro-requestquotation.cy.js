///<reference types = 'cypress'/>
import proPom from "../../PageObject/proPom";

describe("Request Quotation", function () {
    let ref = new proPom();
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
                ref.getReqQuote();
            });
    })

    it("Calculating Premium without filling in fields", () => {

        //directly hitting Calculate premium
        ref.calcPremium();
        //Asserting premium is not displayed
        cy.get("#calculatedpremium")
            .should("not.have.text")

    })

    it("Calculating Premium after filling feilds with valid dummy data", () => {

        //filling the fields
        ref.breakdownSelect();
        ref.reqRadioCheck();
        ref.setIncident(this.data.incidents);
        ref.setRegistration(this.data.registration);
        ref.setMileage(this.data.mileage);
        ref.setEstValue(this.data.estvalue);
        ref.setParkingLocation();
        ref.setPolicyYear();
        ref.setPolicyMonth();
        ref.setPolicyDay();
        ref.calcPremium();
        //Asserting premium
        cy.get("#calculatedpremium")
            .should('have.text', 'No discountPremium: £130');
    });

    it("Calculating Premium after filling feilds with valid dummy data and then reseting it", () => {

        //filling the fields
        ref.breakdownSelect();
        ref.reqRadioCheck();
        ref.setIncident(this.data.incidents);
        ref.setRegistration(this.data.registration);
        ref.setMileage(this.data.mileage);
        ref.setEstValue(this.data.estvalue);
        ref.setParkingLocation();
        ref.setPolicyYear();
        ref.setPolicyMonth();
        ref.setPolicyDay();
        ref.calcPremium();
        //Asserting premium
        cy.get("#calculatedpremium")
            .should('have.text', 'No discountPremium: £130');
        cy.wait(6000);
        //reseting the form
        cy.get("#resetquote").click();
    });

    it("Save Quotation", () => {

        ref.breakdownSelect();
        ref.reqRadioCheck();
        ref.setIncident(this.data.incidents);
        ref.setRegistration(this.data.registration);
        ref.setMileage(this.data.mileage);
        ref.setEstValue(this.data.estvalue);
        ref.setParkingLocation();
        ref.setPolicyYear();
        ref.setPolicyMonth();
        ref.setPolicyDay();
        ref.calcPremium();
        //hitting the Save Quotation button
        ref.saveQuote()
        cy.get('body')
            .should("contain", "You have saved this quotation!Your identification number is : ");

    })
})