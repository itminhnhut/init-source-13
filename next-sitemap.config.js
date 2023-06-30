/** @type {import('next-sitemap').IConfig} */

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

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
