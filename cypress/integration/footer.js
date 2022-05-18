import { devices, sectionsOtherThanLanding } from "../support/global_variables"
const test = (device) =>
    describe(`${device.name}: ${device.orientation}`, () => {
        beforeEach(() => {
            cy.viewport(device.width, device.height)
            cy.visit('')
            cy.get('[data-test=footer]').scrollIntoView()
            cy.wait(800)
        })
        describe('sections links', () => {
            it(`scrolls to "Landing" when "Home" is clicked`, () => {
                cy.get('[data-test=landing]').then($landing => {
                    cy.isNotInViewport($landing)
                })
                cy.get('[data-test=footer_home_link]').click()
                cy.get('[data-test=landing]').then($landing => {
                    cy.isInViewport($landing)
                })
            })
            sectionsOtherThanLanding.map(s => {
                it(`scrolls to "${s.name}" when "${s.name}" is clicked`, () => {
                    if (s.name !== 'Contact Us') {
                        // "Contact Us" sections will always be in viewport when "Footer is displaying", so needs to be excluded from this check
                        cy.get(`[data-test=${s.dataTest}`).then($section => {
                            cy.isNotInViewport($section)
                        })
                    }
                    cy.get('[data-test=footer]').scrollIntoView().then(() => {
                        cy.get(`[data-test=footer_${s.dataTest}_link]`).click()
                        cy.get(`[data-test=${s.dataTest}`).then($section => {
                            cy.isInViewport($section)
                        })
                    })
                })
            })
        })
        it('displays auth link if user NOT authenticated', () => {
            cy.window()
                .its('store')
                .invoke('getState')
                .then($state => {
                    cy.wrap($state)
                        .its('auth').its('isAuthenticated')
                        .should('equal', false)
                })
            cy.get('[data-test=footer_sign-up_link]')
            cy.get('[data-test=footer_log-in_link]')
            cy.get('[data-test=footer_log-out_link]').should('not.exist')
        })
        it('displays "Log Out" link if user authenticated', () => {
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
            cy.get('[data-test=footer_sign-up_link]').should('not.exist')
            cy.get('[data-test=footer_log-in_link]').should('not.exist')
            cy.get('[data-test=footer_log-out_link]')
        })
        it('navigates to "Sign Up" page when relevant link clicked',
            () => {
                cy.get('[data-test=footer_sign-up_link]').click()
                cy.wait(500)
                cy.url().should('include', '/signup')
            })
        it('navigates to "Log In" page when relevant link clicked',
            () => {
                cy.get('[data-test=footer_log-in_link]').click()
                cy.wait(500)
                cy.url().should('include', '/login')
            })
        it('navigates to "book-now" URL when relevant link clicked',
            () => {
                cy.get('[data-test=footer_book-now_link]').click()
                cy.wait(500)
                cy.url().should('include', '/book-now')
            })
        it('should NOT display "Order Online" link', () => {
            cy.contains('Account Required').should('not.exist')
            cy.get('[data-test=footer_order-online_link]').should('not.exist')
            cy.url().should('include', '/')
        })
        it('should not display "Your Orders" link',
            () => {
                cy.get('[data-test=footer_your-orders_link]').should('not.exist')
            })
        it('navigates to "online-order" URL when relevant link clicked',
            () => {
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
                cy.get('[data-test=footer_order-online_link]').click()
                cy.wait(500)
                cy.url().should('include', '/online-order')
            })
        it('navigates to "your-orders" URL when relevant link clicked',
            () => {
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
                cy.get('[data-test=footer_your-orders_link]').click()
                cy.wait(500)
                cy.url().should('include', '/your-orders')
            })
        it.only('logs user out when relevant link clicked', () => {
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
            cy.get('[data-test=footer_log-out_link]').click()
            cy.window()
                .its('store')
                .invoke('getState')
                .then($state => {
                    cy.wrap($state)
                        .its('auth').its('isAuthenticated')
                        .should('equal', false)
                })
        })
    })


describe('Footer', () => {
    devices.map(d => {
        test(d)
    })
})