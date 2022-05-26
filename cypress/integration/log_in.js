import { devices } from "../support/global_variables"
const performLogIn = (username, password) => {
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
    cy.get('[data-test=form_log-in_btn]').click()
}
const test = (device) =>
    describe(`${device.name}: ${device.orientation}`, () => {
        beforeEach(() => {
            cy.viewport(device.width, device.height)
            cy.visit('/login')
            cy.window()
                .its('store')
                .invoke('dispatch', {
                    type: 'auth/setIsAuthenticated',
                    payload: {
                        isAuthenticated: false,
                        credentials: {
                            username: 'johndoe',
                            password: '12345678'
                        }
                    }
                })
        })
        it('successfully logs in', () => {
            performLogIn('johndoe', '12345678')
            cy.window()
                .its('store')
                .invoke('getState')
                .then($state => {
                    cy.wrap($state)
                        .its('auth').its('isAuthenticated')
                        .should('equal', true)
                })
            cy.contains('Login Successful').should('exist')
        })
        it('does NOT log in if empty "username" and informs user', () => {
            performLogIn('', '12345678')
            cy.window()
                .its('store')
                .invoke('getState')
                .then($state => {
                    cy.wrap($state)
                        .its('auth').its('isAuthenticated')
                        .should('equal', false)
                })
            cy.contains('Login Successful').should('not.exist')
            cy.get('[data-test=username_input]').should('contain', 'This field is required.')
            cy.get('[data-test=password_input]').should('not.contain', 'This field is required.')
        })
        it('does NOT log in if empty "password" and informs user', () => {
            performLogIn('johndoe', '')
            cy.window()
                .its('store')
                .invoke('getState')
                .then($state => {
                    cy.wrap($state)
                        .its('auth').its('isAuthenticated')
                        .should('equal', false)
                })
            cy.contains('Login Successful').should('not.exist')
            cy.get('[data-test=username_input]').should('not.contain', 'This field is required.')
            cy.get('[data-test=password_input]').should('contain', 'This field is required.')
        })
        it('does NOT log in if all fields are empty and informs user', () => {
            performLogIn('', '')
            cy.window()
                .its('store')
                .invoke('getState')
                .then($state => {
                    cy.wrap($state)
                        .its('auth').its('isAuthenticated')
                        .should('equal', false)
                })
            cy.contains('Login Successful').should('not.exist')
            cy.get('[data-test=username_input]').should('contain', 'This field is required.')
            cy.get('[data-test=password_input]').should('contain', 'This field is required.')
        })
        it('navigates to "Sign Up" page when relevant link clicked', () => {
            cy.get('[data-test=signup-redirect_btn]').click()
            cy.wait(500)
            cy.url().should('include', '/signup')
        })

    })


describe('Log In', () => {
    devices.map(d => {
        test(d)
    })
})