const landingSectionTests = (device) =>
    describe(`${device.name}: ${device.orientation}`, () => {
        const animationTime = 600 // from Menu.module.scss
        beforeEach(() => {
            cy.viewport(device.width, device.height)
            cy.visit('')

        })
        describe('Sliding ', () => {
            it('slides hidden menu in when click on hamburger', () => {
                cy.get('#menu').then($menu => {
                    expect($menu.is(":visible")).to.be.false
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