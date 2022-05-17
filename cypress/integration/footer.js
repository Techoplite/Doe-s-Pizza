import { devices, sectionsOtherThanLanding } from "../support/global_variables"
const test = (device) =>
    describe(`${device.name}: ${device.orientation}`, () => {
        beforeEach(() => {
            cy.viewport(device.width, device.height)
            cy.visit('')
        })
        describe('sections links', () => {
            it(`scrolls to "Landing" when "Home" is clicked`, () => {
                cy.get('[data-test=footer]').scrollIntoView()
                cy.wait(800)
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
                    cy.get('[data-test=footer]').scrollIntoView()
                    cy.wait(800)
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
    })


describe('Footer', () => {
    devices.map(d => {
        test(d)
    })
})