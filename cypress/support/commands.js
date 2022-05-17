// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('isNotInViewport', element => {
    cy.get(element).then($el => {
        const bottom = Cypress.$(cy.state('window')).height()
        const rect = $el[0].getBoundingClientRect()
        if (rect.top < 0) {
            // top is above the viewport so bottom should be too
            cy.wrap(rect.bottom).should('be.lt', 0)
        } else if (rect.bottom > bottom) {
            // bottom is overflowing so top should too
            cy.wrap(rect.top).should('be.gte', bottom)
        }
    })
})

Cypress.Commands.add('isInViewport', element => {
    cy.get(element).then($el => {
        const bottom = Cypress.$(cy.state('window')).height()
        const rect = $el[0].getBoundingClientRect()

        if (rect.bottom > bottom) {
            console.log('rect.bottom ', rect.bottom)
                // top is within viewport and bottom is overflowing
            cy.wrap(rect.top).should('not.be.gt', bottom)

        } else if (rect.top < bottom) {
            console.log('rect.top', rect.top)
                // bottom is within viewport and top is overflowing
            cy.wrap(rect.bottom).should('not.be.gt', bottom)
        }
    })
})