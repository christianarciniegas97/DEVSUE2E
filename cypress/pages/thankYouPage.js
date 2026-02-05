import checkoutData from '../fixture/checkout.json'


const thankyouElements = {
    purchasesContainer : ".sweet-alert"
}

export default class ThankYouPage {

    static validatePurchases(){
        cy.get(thankyouElements.purchasesContainer).should("be.visible").and(($e) =>{
            expect($e).to.contain.text(checkoutData.data.name);
            expect($e).to.contain.text(checkoutData.data.creditCard)
        }).screenshot()
    }

}