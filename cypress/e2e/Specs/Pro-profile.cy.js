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
            })
    })

    it("Editing profile details using the edit profile tab", () => {
        //navigating to the Edit Profile tab
        proRef.getEditProfile();
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
        proRef.updateUserProfile();
    })

    it("Checking the data present in the profile tab", () => {
        //navigating to the Edit Profile tab
        proRef.getEditProfile();
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
        proRef.updateUserProfile();
        //navigating to the profile tab
        //This is expected to fail since the h5 values are not displayed
        proRef.getProfile();
        proRef.verifyProfileDataExisits();
        proRef.getProfileTitle();
        proRef.getProfileUserName();
        proRef.getProfileSurname();
        proRef.getProfilePhone();
        proRef.getProfileDOB();
        proRef.getProfileLicensePeriod();
        proRef.getProfileOccupation();
        proRef.getProfileIncident();
        proRef.getProfileAddress();
    })

})