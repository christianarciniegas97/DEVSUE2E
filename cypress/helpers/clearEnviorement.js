export const clearSites = () => {
  cy.clearAllCookies();
  cy.clearAllLocalStorage()
}
