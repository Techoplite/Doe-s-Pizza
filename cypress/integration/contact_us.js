import { devices } from "../support/global_variables"

const test = (device) =>
    describe(`${device.name}: ${device.orientation}`, () => {
        beforeEach(() => {
            cy.viewport(device.width, device.height)
            cy.visit('')
        })
        describe('"Up Chevrons" button', () => {
            it('scrolls to "Landing" (top) when click on up chevrons', () => {
                cy.get('[data-test=contact-us]').scrollIntoView().then(() => {
                    cy.get('[data-test=landing]').then($landing => {
                        cy.isNotInViewport($landing)
                    })

                })
                cy.get('[data-test=up-chevs]').click()
                cy.get('[data-test=landing]').then($landing => {
                    cy.isInViewport($landing)
                })
            })
        })
    })


describe('Contact Us Section', () => {
    devices.map(d => {
        test(d)
    })
})