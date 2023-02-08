export default class proPom {
    //Pro-main starts
    visit() {
        cy.visit("https://demo.guru99.com/insurance/v1/index.php");
    }

    setEmail(eml) {
        cy.get("#email").type(eml);
    }

    setPassword(pw) {
        cy.get("#password").type(pw);
    }

    loginButton() {
        cy.get("input[value='Log in']")
            .click();
    }

    errorMsg() {
        cy.get("form[id='login-form'] > div > span > b")
            .should("have.text", "Enter your Email address and password correct");
    }
    //Pro-main ends

    //Pro-afterlogin starts
    getReqQuote() {
        cy.get("#ui-id-2")
            .click();
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
    //Pro-afterlogin ends
}