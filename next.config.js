/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const nextConfig = {
    pwa: {
        dest: 'public',
    },
    reactStrictMode: true,
    images: {
        domains: ['localhost', 'dev-does-pizza.pantheonsite.io'],
    },
}

module.exports = withPWA(nextConfig)