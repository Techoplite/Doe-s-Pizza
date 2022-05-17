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
                            // The animation time depends on how distant (y-axis) is the section from landing section
                            const animationTime = 700
                            cy.get(`[data-test=${s.dataTest}]`).then($sectionRetrieved => {
                                cy.isNotInViewport($sectionRetrieved)
                            })
                            cy.get(`[data-test=${s.dataTest}_nav-link]`).click()
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
                                            cy.wrap($state)
                                                .its('menu').its('section').should('equal', s.dataTest)
                                        })
                                })
                        })
                    })
            })
            it('displays auth buttons if user NOT authenticated', () => {
                cy.window()
                    .its('store')
                    .invoke('getState')
                    .then($state => {
                        cy.wrap($state)
                            .its('auth').its('isAuthenticated')
                            .should('equal', false)
                    })
                cy.contains('Log In')
                cy.contains('Sign Up')
                cy.contains('Log Out').should('not.exist')
            })
            it('displays "Log Out" button if user authenticated', () => {
                cy.window()
                    .its('store')
                    .invoke('getState')
                    .then($state => {
                        cy.wrap($state)
                            .its('auth').its('isAuthenticated')
                            .should('equal', false)
                    })
                cy.window()
                    .its('store')
                    .invoke('dispatch', {
                        type: 'auth/setIsAuthenticated',
                        payload: {
                            isAuthenticated: true,
                            credentials: {
                                username: 'test',
                                password: '11111111'
                            }
                        }
                    })
                cy.window()
                    .its('store')
                    .invoke('getState')
                    .then($state => {
                        cy.wrap($state)
                            .its('auth').its('isAuthenticated')
                            .should('equal', true)
                    })
                cy.contains('Log In').should('not.exist')
                cy.contains('Sign Up').should('not.exist')
                cy.contains('Log Out')
            })
        }
    })


describe('Navbar', () => {
    devices.map(d => {
        test(d)
    })
})