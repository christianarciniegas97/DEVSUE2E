import { interceptCartRequests, interceptHomeRequests } from "../helpers/network";
import CartPage from "../pages/cartPage";
import CheckoutPage from "../pages/checkoutPage";
import Homepage from "../pages/homepage";
import ProductDetailPage from "../pages/productDetailPage";
import ThankYouPage from "../pages/thankYouPage";

describe('Purchase flow', () => {
  it('User can buy two products successfully', () => {
    interceptHomeRequests()


    /* Add first product to the cart */
    Homepage.goToSite();
    Homepage.clickOnCardProduct(0);
    ProductDetailPage.clickOnAddToCart();
    
    /* Add first product to the cart */
    Homepage.backToHomepage();
    Homepage.clickOnCardProduct(1);
    ProductDetailPage.clickOnAddToCart();
    
    /* valid products on cart */
    interceptCartRequests()
    Homepage.goToCartPage();
    CartPage.validateCart();
    CartPage.validateProductsOnCart();
    
    /* complete the form payment */
    CartPage.clickOnGoToPlaceOrder()
    CheckoutPage.completeFormPlaceOrderMain()

    /* Validate purchases*/
    ThankYouPage.validatePurchases()
  })
})