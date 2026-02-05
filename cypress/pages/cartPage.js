
export const cartElements = {
    cardProductContainer : ".success",
    cartPage: "#page-wrapper",
    placeOrderButton: `button[data-target="#orderModal"]`,
}

export default class CartPage{

    static validateCart(){
        cy.url().should("contain", "cart")
        const strings = ["Products", "Pic" , "Title", "Price", "x"]
        strings.forEach( text =>{
            cy.get(cartElements.cartPage).should("contain.text", text)
        })
    }

    static validateProductsOnCart (){
        cy.wait("@cardProducts")
        cy.get(cartElements.cardProductContainer).eq(0).should("be.visible")
        cy.get(cartElements.cardProductContainer).eq(1).should("be.visible")
    }

    static clickOnGoToPlaceOrder(){
        cy.get(cartElements.placeOrderButton).click()
    }



}