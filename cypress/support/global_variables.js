export const devices = [
    { name: 'small', width: 367, height: 812, orientation: 'portrait' },
    { name: 'small', width: 812, height: 375, orientation: 'landscape' },
    { name: 'medium', width: 810, height: 1080, orientation: 'portrait' },
    // The following devices are not displaying hamburger menu
    { name: 'medium', width: 1080, height: 810, orientation: 'landscape' },
    { name: 'large', width: 1920, height: 1080, orientation: 'landscape' },
]

export const hasHamburger = (device) => {
    const index = devices.indexOf(device)
    return index !== 3 && index !== 4
}