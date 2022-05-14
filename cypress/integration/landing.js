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
            const animationTime = 500 // From index.tsx (400 + 100 otherwise causing problems on 'mobile portrait')
            it('scrolls to "Popular Pizza" when click on down chevrons', () => {
                cy.get('[data-test=popular-pizzas]').then($popularPizzas => {
                    cy.isNotInViewport($popularPizzas)
                })
                cy.get('[data-test=down-chevs]').click()
                cy.wait(animationTime)
                cy.get('[data-test=popular-pizzas]').then($popularPizzas => {
                    cy.isInViewport($popularPizzas)
                })
            })
        })
        describe('"Book Now" button', () => {
            it.only('navigates to "book-now" URL', () => {
                cy.get('[data-test=book-now-btn]').click()
                cy.url().should('include', '/book-now')
            })
        })
    })


describe('Landing Section', () => {
    const devices = [
        { name: 'mobile', width: 367, height: 812, orientation: 'portrait' },
        { name: 'mobile', width: 812, height: 375, orientation: 'landscape' },
        { name: 'tablet', width: 810, height: 1080, orientation: 'portrait' },
    ]
    devices.map(d => {
        test(d)
    })
})