import { devices, hasHamburger, sectionsOtherThanLanding } from "../support/global_variables"

const test = (device) =>
    describe(`${device.name}: ${device.orientation}`, () => {
        beforeEach(() => {
            cy.viewport(device.width, device.height)
            cy.visit('')
        })
        if (!hasHamburger(device)) {
            sectionsOtherThanLanding.map(s => {
                describe(`"${s.name}" link`,
                    () => {
                        it(`scrolls to "${s.name}" sections once clicked`, () => {
                            const animationTime = 500
                            cy.get(`[data-test=${s.dataTest}]`).then($sectionRetrieved => {
                                cy.isNotInViewport($sectionRetrieved)
                            })
                            cy.get(`[data-test=${s.dataTest}_nav-link]`).click()
                                // TODO: Cypress claim that it automatically waits for the animation to be finished but it looks like I need to force the wait. Needs investigating further 
                            cy.wait(animationTime)
                            cy.get(`[data-test=${s.dataTest}]`).then($sectionRetrieved => {
                                cy.isInViewport($sectionRetrieved)
                            })

                        })
                        it('correctly updates "menuSlice" when clicked', () => {
                            cy.window()
                                .its('store')
                                .invoke('getState')
                                .then($state => {
                                    cy.wrap($state)
                                        .its('menu').its('open')
                                        .should('equal', false)
                                        // section is reset to 'null' after 400ms (see index.tsx)
                                    cy.wrap($state)
                                        .its('menu').its('section')
                                        .should('equal', 'landing')
                                })
                            cy.get(`[data-test=${s.dataTest}_nav-link]`).click()
                                .then(() => {
                                    cy.window()
                                        .its('store')
                                        .invoke('getState')
                                        .then($state => {
                                            cy.wrap($state)
                                                .its('menu').its('open')
                                                .should('equal', false)
                                                // section is reset to 'null' after 400ms (see index.tsx)
                                            cy.wrap($state)
                                                .its('menu').its('section').should('equal', s.dataTest)
                                        })
                                })
                        })
                    })
            })
        }
    })


describe('Navbar', () => {
    devices.map(d => {
        test(d)
    })
})