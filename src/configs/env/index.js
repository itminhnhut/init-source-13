/* eslint-disable import/no-anonymous-default-export */
/**
 * @typedef {Object} RuntimeEnv
 * @property {string} API_BASE_HOST - API_BASE_HOST
 * @property {number} UPLOAD_BASE_HOST - UPLOAD_BASE_HOST
 */
const ENV = {
    development: {
        API_BASE_HOST: 'https://jsonplaceholder.typicode.com',
        NEXT_PUBLIC_APP_URL: 'http://localhost:3000',
    },
    staging: {
        API_BASE_HOST: 'https://jsonplaceholder.typicode.com',
    },
    production: {
        API_BASE_HOST: 'https://jsonplaceholder.typicode.com',
    },
}

/**
 * Returns runtime env variables
 * @returns {RuntimeEnv}
 */

module.exports = {
    runEnv: ENV[typeof window !== 'undefined' ? window.RUN_ENV : 'development'] || ENV.development,
}
