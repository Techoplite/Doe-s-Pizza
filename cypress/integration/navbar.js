import { devices, hasHamburger } from "../support/global_variables"

const test = (device) =>
    describe(`${device.name}: ${device.orientation}`, () => {
        beforeEach(() => {
            cy.viewport(device.width, device.height)
            cy.visit('')
        })
        if (!hasHamburger(device)) {
            describe('"Popular Pizzas" link',
                () => {
                    it('scrolls to "Popular Pizzas" sections once clicked', () => {
                        cy.get('[data-test=popular-pizzas]').then($popularPizzas => {
                            cy.isNotInViewport($popularPizzas)
                        })
                        cy.get('[data-test=popular-pizzas_nav-link]').click()
                            .then(() => {
                                cy.window()
                                    .its('store')
                                    .invoke('getState')
                                    .then($state => {
                                        cy.wrap($state)
                                            .its('menu').its('open').should('equal', false)
                                            // section is reset to 'null' after 400ms (see index.tsx)
                                        cy.wrap($state)
                                            .its('menu').its('section').should('equal', 'popular-pizzas')
                                    })
                            })
                    })
                })
            describe('"About Us" link',
                () => {
                    it('scrolls to "About Us" sections once clicked', () => {
                        cy.get('[data-test=about-us]').then($aboutUs => {
                            cy.isNotInViewport($aboutUs)
                        })
                        cy.get('[data-test=about-us_nav-link]').click()
                            .then(() => {
                                cy.window()
                                    .its('store')
                                    .invoke('getState')
                                    .then($state => {
                                        cy.wrap($state)
                                            .its('menu').its('open').should('equal', false)
                                            // section is reset to 'null' after 400ms (see index.tsx)
                                        cy.wrap($state)
                                            .its('menu').its('section').should('equal', 'about-us')
                                    })
                            })
                    })
                })
            describe('"Contact Us" link',
                () => {
                    it('scrolls to "Contact Us" sections once clicked', () => {
                        cy.get('[data-test=contact-us]').then($contactUs => {
                            cy.isNotInViewport($contactUs)
                        })
                        cy.get('[data-test=contact-us_nav-link]').click()
                            .then(() => {
                                cy.window()
                                    .its('store')
                                    .invoke('getState')
                                    .then($state => {
                                        cy.wrap($state)
                                            .its('menu').its('open').should('equal', false)
                                            // section is reset to 'null' after 400ms (see index.tsx)
                                        cy.wrap($state)
                                            .its('menu').its('section').should('equal', 'contact-us')
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