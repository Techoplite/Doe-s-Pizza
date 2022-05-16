import { devices, hasHamburger } from "../support/global_variables"
const test = (device) =>
    describe(`${device.name}: ${device.orientation}`, () => {
        beforeEach(() => {
            cy.viewport(device.width, device.height)
            cy.visit('')
        })
        if (hasHamburger(device)) {
            describe('"Hamburger" button', () => {
                // This test uses :visibility because the element is not reachable by the user through scrolling (parent has overflowX:"hidden")
                const animationTime = 600 // from Menu.module.scss
                describe('slides hidden menu in when click on hamburger', () => {
                    it('displays the menu', () => {
                        cy.get('[data-test=menu]').then($menu => {
                            cy.isInViewport($menu)
                        })
                        cy.get('[data-test=hamburger]').click()
                        cy.wait(animationTime)
                        cy.get('[data-test=menu]').then($menu => {
                            expect($menu.is(":visible")).to.be.true
                        })

                    })
                    it('correctly updates "menuSlice" in redux store', () => {
                        cy.window().its('store').invoke('getState')
                            .then($state => {
                                const menu = cy.wrap($state).its('menu')
                                menu.its('open').should('equal', false)
                                    // section is 'null' at this point so won't be accessible
                                cy.get('[data-test=hamburger]').click()
                                    .then(() => {
                                        cy.window()
                                            .its('store')
                                            .invoke('getState')
                                            .then($state => {
                                                cy.wrap($state).its('menu').its('open').should('equal', true)
                                                    // section is 'null' at this point so won't be accessible
                                            })
                                    })
                            })
                    })
                })
                describe('slides displaying menu out when click on back button', () => {
                    it('hides the menu', () => {
                        cy.get('[data-test=hamburger]').click()
                        cy.wait(animationTime)
                        cy.get('[data-test=menu]').then($menu => {
                            expect($menu.is(":visible")).to.be.true
                        })
                        cy.get('[data-test=back-btn]').click()
                        cy.wait(animationTime)
                        cy.get('[data-test=menu]').then($menu => {
                            expect($menu.is(":visible")).to.be.false
                        })
                    })
                    it('correctly updates "menuSlice" in redux store', () => {
                        cy.window().its('store').invoke('getState')
                            .then(() => {
                                cy.get('[data-test=hamburger]').click()
                                    .then(() => {
                                        cy.window()
                                            .its('store')
                                            .invoke('getState')
                                            .then($state => {
                                                cy.wrap($state).its('menu').its('open').should('equal', true)
                                                    // section is 'null' at this point so won't be accessible
                                            })
                                    })
                                cy.get('[data-test=back-btn]').click()
                                    .then(() => {
                                        cy.window()
                                            .its('store')
                                            .invoke('getState')
                                            .then($state => {
                                                cy.wrap($state).its('menu').its('open').should('equal', false)
                                                    // section is 'null' at this point so won't be accessible
                                            })
                                    })
                            })
                    })
                })
            })
        }
        describe('"Down Chevrons" button', () => {
            it('scrolls to "Popular Pizza" when click on down chevrons', () => {
                cy.get('[data-test=popular-pizzas]').then($popularPizzas => {
                    cy.isNotInViewport($popularPizzas)
                })
                cy.get('[data-test=down-chevs]').click()
                cy.get('[data-test=popular-pizzas]').then($popularPizzas => {
                    cy.isInViewport($popularPizzas)
                })
            })
            it('correctly updates "menuSlice" in redux store',
                () => {
                    cy.get('[data-test=down-chevs]').click()
                        .then(() => {
                            cy.window()
                                .its('store')
                                .invoke('getState')
                                .then($state => {
                                    cy.wrap($state)
                                        .its('menu').its('open').should('equal', false)
                                        // section is reset to 'null' after 400ms (see index.tsx)
                                    cy.wrap($state)
                                        .its('menu').its('section').should('be.null')
                                })
                        })
                })
        })
        describe('"Book Now" button', () => {
            it('navigates to "book-now" URL', () => {
                cy.get('[data-test=book-now-btn]').click()
                cy.url().should('include', '/book-now')
            })
        })
        describe('"Order Online*" button', () => {
            it('displays dialog if user not authenticated', () => {
                cy.contains('Account Required').should('not.exist')
                cy.get('[data-test=order-online-btn]').click()
                cy.contains('Account Required').should('exist')
                cy.url().should('include', '/')
            })
        })
    })


describe('Landing Section', () => {
    devices.map(d => {
        test(d)
    })
})