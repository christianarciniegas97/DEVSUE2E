import { Given } from "@badeball/cypress-cucumber-preprocessor"
import Homepage from "../pages/homepage"


before(() => {
    Homepage.goToSite()
})

Given("I navigate to blaze website", () => {
})