/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config')

const nextConfig = {
    reactStrictMode: true,
    skipTrailingSlashRedirect: true,
    i18n,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['static.ghost.org', 'demo.ghost.io'],
    },
}

module.exports = nextConfig
