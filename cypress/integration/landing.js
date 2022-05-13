const landingSectionTests = (width, height, orientation) =>
    describe(`${orientation}`, () => {
        beforeEach(() => {
            cy.viewport(width, height)
            cy.visit('')

        })
        describe('displays menu when click on hamburger', () => {
            it('does NOT display the menu before click on hamburger', () => {
                cy.get('#menu').then($menu => {
                    expect($menu.is(":visible")).to.be.false
                })
            })
            it('displays side menu after click on hamburger', () => {
                cy.get('#hamburger').click().then(() => {
                    cy.get('#menu').then($menu => {
                        expect($menu.is(":visible")).to.be.false
                    })

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
        describe(`${d.name}`, () => {
            landingSectionTests(d.width, d.height, d.orientation)
        })
    })
})