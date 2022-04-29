/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost', 'dev-does-pizza.pantheonsite.io'],
    },
}

module.exports = nextConfig