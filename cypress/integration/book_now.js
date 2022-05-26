import { devices } from "../support/global_variables"
import dayjs from 'dayjs';


const test = (device) =>
    describe(`${device.name}: ${device.orientation}`, () => {
        beforeEach(() => {
            cy.viewport(device.width, device.height)
            cy.visit('/book-now')
        })
        it('successfully books a table', () => {
            cy.get('[data-test=date-and-time_input]').type('2022-12-01T18:30')
            cy.get('[data-test=party-size_input]').type('4')
            cy.get('[data-test=first-name_input]').type('John')
            cy.get('[data-test=last-name_input]').type('Doe')
            cy.get('[data-test=contact-number_input]').type('12345678910')
            cy.get('[data-test=book-now_btn]').click()
            cy.contains('Booking Successful').should('exist')
        })
        it(
            'defaults "Date and Time" input value to one hour in the future', () => {
                cy.get('[data-test=date-and-time_input]')
                    .children('.MuiFilledInput-root')
                    .children()
                    .should('have.value',
                        dayjs().add(1, 'hour').format('YYYY-MM-DDThh:mm'))
            }
        )
        it('should default "Party Size" value to "0"', () => {
            cy.get('[data-test=party-size_input]')
                .children('.MuiFilledInput-root')
                .children()
                .should('have.value', '0')
        })
        it('does NOT book a table if all fields are empty and informs user', () => {
            cy.get('[data-test=book-now_btn]').click()
            cy.contains('Booking Successful').should('not.exist')
            cy.get('[data-test=party-size_input]').should('contain', 'This field is required.')
            cy.get('[data-test=first-name_input]').should('contain', 'This field is required.')
            cy.get('[data-test=last-name_input]').should('contain', 'This field is required.')
            cy.get('[data-test=contact-number_input]').should('contain', 'This field is required.')
        })
        it('does NOT book a table if "Party Size" is "0" and informs user', () => {
            cy.get('[data-test=date-and-time_input]').type('2022-12-01T18:30')
            cy.get('[data-test=first-name_input]').type('John')
            cy.get('[data-test=last-name_input]').type('Doe')
            cy.get('[data-test=contact-number_input]').type('12345678910')
            cy.get('[data-test=book-now_btn]').click()
            cy.contains('Booking Successful').should('not.exist')
            cy.get('[data-test=party-size_input]').should('contain', 'This field is required.')
            cy.get('[data-test=first-name_input]').should('not.contain', 'This field is required.')
            cy.get('[data-test=last-name_input]').should('not.contain', 'This field is required.')
            cy.get('[data-test=contact-number_input]').should('not.contain', 'This field is required.')
        })
        it('does NOT book a table if "First Name" empty and informs user', () => {
            cy.get('[data-test=date-and-time_input]').type('2022-12-01T18:30')
            cy.get('[data-test=party-size_input]').type('4')
            cy.get('[data-test=last-name_input]').type('Doe')
            cy.get('[data-test=contact-number_input]').type('12345678910')
            cy.get('[data-test=book-now_btn]').click()
            cy.contains('Booking Successful').should('not.exist')
            cy.get('[data-test=first-name_input]').should('contain', 'This field is required.')
            cy.get('[data-test=last-name_input]').should('not.contain', 'This field is required.')
            cy.get('[data-test=contact-number_input]').should('not.contain', 'This field is required.')
        })
        it('does NOT book a table if "Last Name" empty and informs user', () => {
            cy.get('[data-test=date-and-time_input]').type('2022-12-01T18:30')
            cy.get('[data-test=party-size_input]').type('4')
            cy.get('[data-test=first-name_input]').type('John')
            cy.get('[data-test=contact-number_input]').type('12345678910')
            cy.get('[data-test=book-now_btn]').click()
            cy.contains('Booking Successful').should('not.exist')
            cy.get('[data-test=first-name_input]').should('not.contain', 'This field is required.')
            cy.get('[data-test=last-name_input]').should('contain', 'This field is required.')
            cy.get('[data-test=contact-number_input]').should('not.contain', 'This field is required.')
        })
    })


describe('Book Now', () => {
    devices.map(d => {
        test(d)
    })
})