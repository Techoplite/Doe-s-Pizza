import { devices } from "../support/global_variables"
const test = (device) =>
    describe(`${device.name}: ${device.orientation}`, () => {
        beforeEach(() => {
            cy.viewport(device.width, device.height)
            cy.visit('')
        })
        describe('"Hamburger" button', () => {
            // This test uses :visibility because the element is not reachable by the user through scrolling (parent has overflowX:"hidden")
            const animationTime = 600 // from Menu.module.scss
            it('slides hidden menu in when click on hamburger', () => {
                cy.get('[data-test=menu]').then($menu => {
                    cy.isInViewport($menu)
                })
                cy.get('[data-test=hamburger]').click()
                cy.wait(animationTime)
                cy.get('[data-test=menu]').then($menu => {
                    expect($menu.is(":visible")).to.be.true
                })
            })
            it('slides displaying menu out when click on back button', () => {
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
        })
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