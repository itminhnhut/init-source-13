/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config')

const nextConfig = {
    future: {
        webpack5: true,
    },
    webpack(config) {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
        }
        return config
    },
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
