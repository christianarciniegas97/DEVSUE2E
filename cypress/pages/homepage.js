import { clearSites } from "../helpers/clearEnviorement";

export const homeElements = {
    cardTitleText : ".card-title",
    productStoreIcon : ".navbar-brand",
    cartButton: "#cartur"

}

export default class Homepage{

    static goToSite(){
        cy.visit("/");
        clearSites()
        cy.wait("@entries")
    }

    static clickOnCardProduct (item){
        cy.intercept('POST', '**/view').as("waitPdpLoaded")
        cy.get(homeElements.cardTitleText).eq(item).click()
        cy.wait("@waitPdpLoaded")
    }

    static backToHomepage(){
        cy.get(homeElements.productStoreIcon).click()
        cy.wait("@entries")
    }

    static goToCartPage() {
        cy.get(homeElements.cartButton).click()
    }
}