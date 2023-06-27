/** @type {import('tailwindcss').Config} */

import colors from './src/styles/colors';

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      lg: ['1.125rem', '1.5rem'] /* 18px */,
    },
    extend: {
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
};
