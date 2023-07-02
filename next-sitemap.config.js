/** @type {import('next-sitemap').IConfig} */

import runEnv from '@/config/env'
const { NEXT_PUBLIC_APP_URL } = runEnv()

const siteUrl = NEXT_PUBLIC_APP_URL

module.exports = {
    changefreq: 'daily',
    generateRobotsTxt: true,
    priority: 0.7,
    siteUrl: siteUrl,
    sitemapSize: 5000,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/_next/*', '/.git/*', '/library/*', '/*utm='],
            },
        ],
    },
}
