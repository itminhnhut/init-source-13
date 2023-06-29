/** @type {import('tailwindcss').Config} */

import colors from './src/styles/colors'

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontSize: {
            sm: ['0.875rem', '1.25rem'] /* 14px */,
            lg: ['1.125rem', '1.5rem'] /* 18px */,
            base: ['1rem', '1.5rem'] /* 16px */,
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-2': 'linear-gradient(270deg, #4D09BC 0%, #6E1FCE 32.29%, #CC55E9 67.23%, #FDBDF9 100%)',
                'gradient-1': 'linear-gradient(0deg, rgba(240,135,255,0) 0%, rgba(240,135,255,1) 100%)',
                'gradient-width': 'linear-gradient(0deg, rgba(240,135,255,0) 0%, rgba(240,135,255,1) 100%)',
            },
            colors: {
                ...colors,
            },

            screens: {
                '2k': '2160px',
                xxl: '1216px',
                mb: '820px',
            },
        },
    },
    plugins: [],
}
