export const interceptHomeRequests = () => {
  cy.intercept('GET', '**/entries').as('entries')
}

export const interceptCartRequests = () => {
  cy.intercept('POST', '**/view').as('cardProducts')
}
