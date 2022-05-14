const landingSectionTests = (device) =>
    describe(`${device.name}: ${device.orientation}`, () => {
        beforeEach(() => {
            cy.viewport(device.width, device.height)
            cy.visit('')
        })
        describe('Sliding Menu', () => {
            // This test uses :visibility because the element is not reachable by the user through scrolling (parent has overflowX:"hidden")
            const animationTime = 600 // from Menu.module.scss
            it('slides hidden menu in when click on hamburger', () => {
                cy.get('#menu').then($menu => {
                    cy.isInViewport($menu)
                })
                cy.get('#hamburger').click()
                cy.wait(animationTime)
                cy.get('#menu').then($menu => {
                    expect($menu.is(":visible")).to.be.true
                })
            })
            it('slides displaying menu out when click on back button', () => {
                cy.get('#hamburger').click()
                cy.wait(animationTime)
                cy.get('#menu').then($menu => {
                    expect($menu.is(":visible")).to.be.true
                })
                cy.get('#back-btn').click()
                cy.wait(animationTime)
                cy.get('#menu').then($menu => {
                    expect($menu.is(":visible")).to.be.false
                })
            })
        })
        describe('Down Chevrons', () => {
            const animationTime = 500 // From index.tsx (400 + 100 otherwise causing problems on 'mobile portrait')
            it('scrolls to "Popular Pizza" when click on down chevrons', () => {
                cy.get('#popular-pizzas').then($popularPizzas => {
                    cy.isNotInViewport($popularPizzas)
                })
                cy.get('#down-chevs').click()
                cy.wait(animationTime)
                cy.get('#popular-pizzas').then($popularPizzas => {
                    cy.isInViewport($popularPizzas)
                })
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
        landingSectionTests(d)
    })
})