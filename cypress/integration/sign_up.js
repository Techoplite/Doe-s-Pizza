import { devices } from "../support/global_variables"
const performSignUp = (username, password, confirmPassword) => {
    cy.window()
        .its('store')
        .invoke('getState')
        .then($state => {
            cy.wrap($state)
                .its('auth').its('isAuthenticated')
                .should('equal', false)
        })
    username &&
        cy.get('[data-test=username_input]').type(username)
    password &&
        cy.get('[data-test=password_input]').type(password)
    confirmPassword &&
        cy.get('[data-test=confirm-password_input]').type(confirmPassword)
    cy.get('[data-test=form_sign-up_btn]').click()
}
const test = (device) =>
    describe(`${device.name}: ${device.orientation}`, () => {
        beforeEach(() => {
            cy.viewport(device.width, device.height)
            cy.visit('/signup')
        })
        it('successfully signs up', () => {
            performSignUp('johndoe', '12345678', '12345678')
            cy.window()
                .its('store')
                .invoke('getState')
                .then($state => {
                    cy.wrap($state)
                        .its('auth').its('isAuthenticated')
                        .should('equal', true)
                })
        })
        it('does NOT sign up if empty "username" and informs user', () => {
            performSignUp('', '12345678', '12345678')
            cy.window()
                .its('store')
                .invoke('getState')
                .then($state => {
                    cy.wrap($state)
                        .its('auth').its('isAuthenticated')
                        .should('equal', false)
                })
            cy.get('[data-test=username_input]').contains('This field is required.')
            cy.get('[data-test=password_input]').should('not.contain', 'This field is required.')
            cy.get('[data-test=confirm-password_input]').should('not.contain', 'This field is required.')
            cy.window()
                .its('store')
                .invoke('getState')
                .then($state => {
                    cy.wrap($state)
                        .its('auth').its('isAuthenticated')
                        .should('equal', false)
                })

        })
        it('does NOT sign up if empty "password" and informs user of action to take', () => {
            performSignUp('johndoe', '', '12345678')
            cy.window()
                .its('store')
                .invoke('getState')
                .then($state => {
                    cy.wrap($state)
                        .its('auth').its('isAuthenticated')
                        .should('equal', false)
                })
            cy.get('[data-test=username_input]').should('not.contain', 'This field is required.')
            cy.get('[data-test=password_input]').contains('Must be at least 8 characters.')
            cy.get('[data-test=confirm-password_input]').should('not.contain', 'This field is required.')
            cy.window()
                .its('store')
                .invoke('getState')
                .then($state => {
                    cy.wrap($state)
                        .its('auth').its('isAuthenticated')
                        .should('equal', false)
                })

        })
        it('does NOT sign up if "password" less than 8 characters and informs user of action to take', () => {
            performSignUp('johndoe', '', '12345678')
            cy.window()
                .its('store')
                .invoke('getState')
                .then($state => {
                    cy.wrap($state)
                        .its('auth').its('isAuthenticated')
                        .should('equal', false)
                })
            cy.get('[data-test=username_input]').should('not.contain', 'This field is required.')
            cy.get('[data-test=password_input]').contains('Must be at least 8 characters.')
            cy.get('[data-test=confirm-password_input]').should('not.contain', 'This field is required.')
            cy.window()
                .its('store')
                .invoke('getState')
                .then($state => {
                    cy.wrap($state)
                        .its('auth').its('isAuthenticated')
                        .should('equal', false)
                })

        })
        it('does NOT sign up if empty "confirm password" and informs user of action to take', () => {
            performSignUp('johndoe', '12345678', '')
            cy.window()
                .its('store')
                .invoke('getState')
                .then($state => {
                    cy.wrap($state)
                        .its('auth').its('isAuthenticated')
                        .should('equal', false)
                })
            cy.get('[data-test=username_input]').should('not.contain', 'This field is required.')
            cy.get('[data-test=password_input]').should('not.contain', 'This field is required.')
            cy.get('[data-test=confirm-password_input]').contains('This field is required.')
            cy.window()
                .its('store')
                .invoke('getState')
                .then($state => {
                    cy.wrap($state)
                        .its('auth').its('isAuthenticated')
                        .should('equal', false)
                })

        })
        it('does NOT sign up if passwords mismatch and informs user of action to take', () => {
            performSignUp('johndoe', '12345678', '87654321')
            cy.window()
                .its('store')
                .invoke('getState')
                .then($state => {
                    cy.wrap($state)
                        .its('auth').its('isAuthenticated')
                        .should('equal', false)
                })
            cy.get('[data-test=username_input]').should('not.contain', 'This field is required.')
            cy.get('[data-test=password_input]')
                .contains('Passwords must match.')
            cy.get('[data-test=confirm-password_input]')
                .contains('Passwords must match.')
            cy.window()
                .its('store')
                .invoke('getState')
                .then($state => {
                    cy.wrap($state)
                        .its('auth').its('isAuthenticated')
                        .should('equal', false)
                })

        })
        it('navigates to "Log In" page when relevant link clicked', () => {
            cy.get('[data-test=login-redirect_btn]').click()
            cy.wait(500)
            cy.url().should('include', '/login')
        })
    })


describe('Sign Up', () => {
    devices.map(d => {
        test(d)
    })
})