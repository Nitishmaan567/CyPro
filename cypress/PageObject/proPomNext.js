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
        cy.get("table[border='1']>tbody>tr").should("have.length", 10);
        cy.get("table[border='1']>tbody>tr:eq(0)>td").should("have.length", 2)
    }

    assertTableValue() {
        cy.get('tbody > :nth-child(2) > :nth-child(2)').should("be.empty");
        cy.get('tbody > :nth-child(3) > :nth-child(2)').should("have.text", "Yes");
        cy.get('tbody > :nth-child(4) > :nth-child(2)').should("have.text", "52143");
        cy.get('tbody > :nth-child(5) > :nth-child(2)').should("have.text", "0");
        cy.get('tbody > :nth-child(6) > :nth-child(2)').should("have.text", "3201336B");
        cy.get('tbody > :nth-child(7) > :nth-child(2)').should("have.text", "9000");
        cy.get('tbody > :nth-child(8) > :nth-child(2)').should("have.text", "5000");
        cy.get('tbody > :nth-child(9) > :nth-child(2)').should("have.text", "Garage");
        cy.get('tbody > :nth-child(10) > :nth-child(2)').should("have.text", "2021.3.15");




    }
}