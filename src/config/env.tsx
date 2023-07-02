/* eslint-disable import/no-anonymous-default-export */
/**
 * @typedef {Object} RuntimeEnv
 * @property {string} API_BASE_HOST - API_BASE_HOST
 * @property {string} NEXT_PUBLIC_APP_URL - NEXT_PUBLIC_APP_URL
 */

declare global {
    interface Window {
        RUN_ENV: any; // 👈️ turn off type checking
    }
}

type ENV_NAME = 'development' | 'staging' | 'production' | any;
interface ENV_INFO {
    API_BASE_HOST: string;
    NEXT_PUBLIC_APP_URL?: string
}

const ENV: Record<ENV_NAME, ENV_INFO> = {
    development: {
        API_BASE_HOST: 'https://jsonplaceholder.typicode.com',
        NEXT_PUBLIC_APP_URL: 'http://localhost:3000'
    },
    staging: {
        API_BASE_HOST: 'https://jsonplaceholder.typicode.com',
    },
    production: {
        API_BASE_HOST: 'https://jsonplaceholder.typicode.com',
    },
};

/**
 * Returns runtime env variables
 * @returns {RuntimeEnv}
 */

export default (): any => ENV[typeof window !== 'undefined' ? window.RUN_ENV : 'development'] || ENV.development;
