import checkoutData from '../fixture/checkout.json'

const checkoutElements = {
    /* form place order elements*/
    modalContainer: ".modal-content",
    nameInput: `#name`,
    countryInput: "#country",
    cityInput: "#city",
    creditCardInput: "#card",
    monthInput: "#month",
    yearInput: "#year",
    purchaseOrderButton: `button[onclick="purchaseOrder()"]`

}

export default class checkoutPage {

    static completeFormPlaceOrderMain(){
        this.validateFormPlaceOrder()
        this.addDataOnInputs()
        this.clickOnSubmitFormPlaceOrder()
    }

    static validateFormPlaceOrder(){
        cy.get(checkoutElements.modalContainer).should("contain.text", "Place order")
    }

    static addDataOnInputs(){
        cy.get(checkoutElements.nameInput).type(checkoutData.data.name, {force:true})
        cy.get(checkoutElements.countryInput).type(checkoutData.data.country)
        cy.get(checkoutElements.cityInput).type(checkoutData.data.city)
        cy.get(checkoutElements.creditCardInput).type(checkoutData.data.creditCard)
        cy.get(checkoutElements.monthInput).type(checkoutData.data.month)
        cy.get(checkoutElements.yearInput).type(checkoutData.data.year)
    }

    static clickOnSubmitFormPlaceOrder(){
        cy.get(checkoutElements.purchaseOrderButton).click()
    }
}