///<reference types = 'cypress'/>
import proPom from "../../PageObject/proPom";
import proPomNext from "../../PageObject/proPomNext";

describe("User Profile editing and viewing", function () {
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
                proRef.getEditProfile();
            });
    })

    it("Editing profile", () => {
        proRef.verifyEditProfilepage();
        proRef.setEditTitle();
        proRef.setEditUserName(this.data.edituname);
        proRef.setEditFirstName(this.data.editfname);
        proRef.setEditPhoneNumber(this.data.editphone);
        proRef.setEditYear();
        proRef.setEditMonth();
        proRef.setEditDay();
        proRef.setEditLicensePeriod();
        proRef.setEditOccupation();
        proRef.SetEditStreet(this.data.editstreet);
        proRef.setEditCity(this.data.editcity);
        proRef.setEditCountry(this.data.editcountry);
        proRef.setEditPostcode(this.data.edipostcode);
        console.log(proRef.updateUserProfile());

    })

})