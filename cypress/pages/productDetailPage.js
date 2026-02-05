
export const productDetailElements = {
    addTocartButton : `a[onclick^="addToCart"]`,
}

export default class ProductDetailPage{

    static clickOnAddToCart(){
        cy.intercept('POST', '**/addtocart').as("addtocart")
        cy.get(productDetailElements.addTocartButton)
        .should("be.visible")
        .click()
        cy.wait('@addtocart').then((res) =>{
            if(res.response.statusCode == 400 ){
                throw new Error("Error add to cart")
            } else if (res.response.statusCode == 200){
                expect(res.response.statusCode).equals(200)
            }
        })
    }

}