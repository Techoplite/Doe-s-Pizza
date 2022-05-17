import { devices } from "../support/global_variables"

const test = (device) =>
    describe(`${device.name}: ${device.orientation}`, () => {
        beforeEach(() => {
            cy.viewport(device.width, device.height)
            cy.visit('')
            cy.get('[data-test=contact-us]').scrollIntoView()
            cy.wait(500)
        })
        describe('"Up Chevrons" button', () => {
            it('scrolls to "Landing" (top) when click on up chevrons', () => {
                cy.get('[data-test=landing]').then($landing => {
                    cy.isNotInViewport($landing)
                })
                cy.get('[data-test=up-chevs]').click()
                cy.get('[data-test=landing]').then($landing => {
                    cy.isInViewport($landing)
                })
            })
        })
        describe('"Facebook" Icon',
            () => {
                it('navigates to "https://en-gb.facebook.com"', () => {
                    cy.get('[data-test=facebook-icon]')
                        .should(
                            'have.attr', 'href', 'https://en-gb.facebook.com/'
                        )
                })
            })
        describe('"Instagram" Icon',
            () => {
                it('navigates to "https://www.instagram.com/"', () => {
                    cy.get('[data-test=instagram-icon]')
                        .should(
                            'have.attr', 'href', 'https://www.instagram.com/'
                        )
                })
            })
        describe('"Twitter" Icon',
            () => {
                it('navigates to "https://twitter.com/?lang=en-gb"', () => {
                    cy.get('[data-test=twitter-icon]')
                        .should(
                            'have.attr', 'href', 'https://twitter.com/?lang=en-gb'
                        )
                })
            })
    })


describe('Contact Us Section', () => {
    devices.map(d => {
        test(d)
    })
})