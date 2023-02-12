export default class proPom {
    //Pro-main starts
    visit() {
        cy.intercept("https://demo.guru99.com/insurance/v1/index.php")
            .as("indexLoaded");
        cy.visit("https://demo.guru99.com/insurance/v1/index.php");
        cy.wait("@indexLoaded");
    }

    setEmail(eml) {
        cy.get("#email").type(eml);
    }

    setPassword(pw) {
        cy.get("#password").type(pw);
    }

    loginButtonforInvalids() {
        cy.get("input[value='Log in']")
            .click();
    }

    loginButton() {
        cy.intercept("https://demo.guru99.com/insurance/v1/header.php")
            .as("headerLoaded");
        cy.get("input[value='Log in']")
            .click();
        cy.wait("@headerLoaded");
    }

    errorMsg() {
        cy.get("form[id='login-form'] > div > span > b")
            .should("have.text", "Enter your Email address and password correct");
    }
    //Pro-main ends

    //Pro-request Quotation starts
    getReqQuote() {
        cy.get("#ui-id-2")
            .click();
    }

    getRequestQuotationHeading() {
        cy.get("div[id='tabs-2'] h2").should("have.text", "Request a quotation")
    }

    breakdownSelect() {
        cy.get('select[id="quotation_breakdowncover"]')
            .select('Roadside')
            .should('have.value', '2');
    }

    reqRadioCheck() {
        cy.get('input[id="quotation_windscreenrepair_t"]')
            .check();
    }

    setIncident(incdnt) {
        cy.get("input[id= 'quotation_incidents']")
            .type(incdnt);
    }

    setRegistration(rgstrtn) {
        cy.get("input[id= 'quotation_vehicle_attributes_registration']")
            .type(rgstrtn);
    }

    setMileage(mlg) {
        cy.get("input[id= 'quotation_vehicle_attributes_mileage']")
            .type(mlg);
    }

    setEstValue(estval) {
        cy.get("input[id= 'quotation_vehicle_attributes_value']")
            .type(estval);
    }

    setParkingLocation() {
        cy.get("select[id='quotation_vehicle_attributes_parkinglocation']")
            .select('Locked Garage')
            .should('have.value', 'Garage');
    }

    setPolicyYear() {
        cy.get("select[id='quotation_vehicle_attributes_policystart_1i']")
            .select('2021')
            .should('have.value', '2021');
    }

    setPolicyMonth() {
        cy.get("select[id='quotation_vehicle_attributes_policystart_2i']")
            .select('3')
            .should('have.value', '3');
    }

    setPolicyDay() {
        cy.get("select[id='quotation_vehicle_attributes_policystart_3i']")
            .select('15')
            .should('have.value', '15');
    }

    calcPremium() {
        cy.get("input[value = 'Calculate Premium']")
            .click();
    }

    saveQuote() {
        cy.get("input[value='Save Quotation']")
            .click();
    }
    //Pro-requestquotation ends
}