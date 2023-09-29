/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#fab973',
        secondary: '#ffc98f',
        contrast: '#73d6fa',
      },
    },
    keyframes: {
      wiggle: {
        '0%': { width: '0%' },
        '100%': { width: '100%' },
      }
    },
    animation:{
      wiggle: 'wiggle 1s ',
    }
  },
  plugins: [],
};
