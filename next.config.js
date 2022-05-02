/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const nextConfig = {
    pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === 'development',
    },
    reactStrictMode: true,
    images: {
        domains: ['localhost', 'dev-does-pizza.pantheonsite.io'],
    },
}

module.exports = withPWA(nextConfig)