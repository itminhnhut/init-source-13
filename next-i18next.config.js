// process.env.NODE_ENV === 'development'
module.exports = {
    debug: false,
    i18n: {
        locales: ['vi', 'en'],
        defaultLocale: 'en',
        localeDetection: true,
    },
    keySeparator: '.',
    localePath: typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/locales',
    reloadOnPrerender: process.env.NODE_ENV === 'development',
}
