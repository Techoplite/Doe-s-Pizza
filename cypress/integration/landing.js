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
    describe('mobile', () => {
        landingSectionTests(365, 812, 'portrait')
        landingSectionTests(812, 365, 'landscape')
    })
    describe('tablet', () => {
        landingSectionTests(810, 1080, 'portrait')
            // Landscape orientated tablet will not display the hamburger
    })

})