export default class proPomNext {

    retreiveQuote() {
        cy.get("#ui-id-3")
            .click();
    }

    getIdInput() {
        cy.get("input[placeholder='identification number']")
            .type(21710);
    }

    getQuoteButton() {
        cy.get('#getquote').click();
    }

    getTable() {
        cy.get("table[border='1']>tbody>tr")
            .should("have.length", 10);
        cy.get("table[border='1']>tbody>tr:eq(0)>td")
            .should("have.length", 2)
    }

    assertTableValue() {
        cy.get('tbody > :nth-child(2) > :nth-child(2)')
            .should("be.empty");
        cy.get('tbody > :nth-child(3) > :nth-child(2)')
            .should("have.text", "Yes");
        cy.get('tbody > :nth-child(4) > :nth-child(2)')
            .should("have.text", "52143");
        cy.get('tbody > :nth-child(5) > :nth-child(2)')
            .should("have.text", "0");
        cy.get('tbody > :nth-child(6) > :nth-child(2)')
            .should("have.text", "3201336B");
        cy.get('tbody > :nth-child(7) > :nth-child(2)')
            .should("have.text", "9000");
        cy.get('tbody > :nth-child(8) > :nth-child(2)')
            .should("have.text", "5000");
        cy.get('tbody > :nth-child(9) > :nth-child(2)')
            .should("have.text", "Garage");
        cy.get('tbody > :nth-child(10) > :nth-child(2)')
            .should("have.text", "2021.3.15");
    }

    getEditProfile() {
        cy.get("#ui-id-5")
            .click();
    }

    verifyEditProfilepage() {
        cy.get("div[id='tabs-5'] h1")
            .should("exist")
            .and("have.text", "Editing user profile");
    }

    setEditTitle() {
        cy.get('#user_title')
            .select('Captain')
            .should("have.value", "Captain");
    }

    setEditUserName(usrnme) {
        cy.get('#user_surname')
            .type(usrnme);
    }

    setEditFirstName(fnme) {
        cy.get('#user_firstname')
            .type(fnme);
    }

    setEditPhoneNumber(phn) {
        cy.get('#user_phone')
            .type(phn);
    }

    setEditYear() {
        cy.get('#user_dateofbirth_1i')
            .select('1936')
            .should("have.value", "1936");
    }

    setEditMonth() {
        cy.get('#user_dateofbirth_2i')
            .select('7')
            .should("have.value", "7");
    }

    setEditDay() {
        cy.get('#user_dateofbirth_3i')
            .select("16")
            .should("have.value", "16");
    }

    setEditLicensePeriod() {
        cy.get('#user_licenceperiod')
            .select('20')
            .should("have.value", "20")
    }

    setEditOccupation() {
        cy.get('#user_occupation_id')
            .select(26)
            .should("have.value", "27");
    }

    SetEditStreet(strt) {
        cy.get('#user_address_attributes_street')
            .type(strt);
    }

    setEditCity(ct) {
        cy.get('#user_address_attributes_city')
            .type(ct);
    }

    setEditCountry(cntry) {
        cy.get('#user_address_attributes_county')
            .type(cntry);
    }

    setEditPostcode(pstcd) {
        cy.get('#user_address_attributes_postcode')
            .type(pstcd);
    }

    updateUserProfile() {
        cy.get('#edit_user_ > .actions > .btn')
            .click();
    }

}