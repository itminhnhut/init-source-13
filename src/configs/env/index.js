/* eslint-disable import/no-anonymous-default-export */
/**
 * @typedef {Object} RuntimeEnv
 * @property {string} API_BASE_HOST - API_BASE_HOST
 * @property {number} UPLOAD_BASE_HOST - UPLOAD_BASE_HOST
 */
const ENV = {
    development: {
        GHOST_VERSION: 'v5.0',
        GHOST_URL: 'https://demo.ghost.io',
        GHOST_KEY: '22444f78447824223cefc48062',
        NEXT_PUBLIC_APP_URL: 'http://localhost:3000',
    },
    staging: {
        GHOST_VERSION: 'v5.0',
        GHOST_URL: 'https://blog.scilabs.io',
        GHOST_KEY: '7cbcd42b3777ec6cacc94574c2',
    },
    production: {
        GHOST_VERSION: 'v5.0',
        GHOST_URL: 'https://blog.scilabs.io',
        GHOST_KEY: '7cbcd42b3777ec6cacc94574c2',
    },
}

/**
 * Returns runtime env variables
 * @returns {RuntimeEnv}
 */

module.exports = {
    runEnv: ENV[typeof window !== 'undefined' ? window.RUN_ENV : 'development'] || ENV.development,
}
