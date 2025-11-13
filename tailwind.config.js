/** @type {import('tailwindcss').Config} */

const { transform } = require('typescript');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'black': '#0f0f0f',
      },
      keyframes: {
        // popup: {
        //   '0%, 90%, 100%': { transform: 'translate(0%, 150%)' },
        //   '7%, 83%': { transform: 'translate(0%, 0%)'},
        // },
        // wiggle: {
        //     '0%, 100%' : { transform: 'rotate(-3deg)' },
        //     '50%' : { transform: 'rotate(3deg)' }
        // }
      },
      animation: {
        // popup: 'popup 3.3s',
        // wiggle: 'wiggle 10s ease-in-out infinite'
      },
      inset: {
        '8.25': '36px'
      }
    },
    borderWidth: {
      '1': '1px',
      '2': '2px'
    }
  },
  plugins: [],
}