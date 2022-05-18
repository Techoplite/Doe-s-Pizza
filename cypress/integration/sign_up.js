import { devices } from "../support/global_variables"
const test = (device) =>
    describe(`${device.name}: ${device.orientation}`, () => {
        beforeEach(() => {
            cy.viewport(device.width, device.height)
            cy.visit('/signup')
        })
        it('successfully signs up', () => {
            cy.window()
                .its('store')
                .invoke('getState')
                .then($state => {
                    cy.wrap($state)
                        .its('auth').its('isAuthenticated')
                        .should('equal', false)
                })
            cy.get('[data-test=username_input]').type('John')
            cy.get('[data-test=password_input]').type('12345678')
            cy.get('[data-test=confirm-password_input]').type('12345678')
            cy.get('[data-test=form_sign-up_btn]').click()
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
        })
    })


describe('Sign Up', () => {
    devices.map(d => {
        test(d)
    })
})