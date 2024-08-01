/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      letterSpacing: {
        wider: '0.05em',
      },
      fontFamily: {
        caslon: ['"ITC Caslon No 224"', 'serif'],
        avenir: ['"Avenir Next"', 'sans-serif'],
      },
      colors: {
        primary: '#F4D7CF',
        gradientStart: '#F4D7CF',
        gradientEnd: '#FFFFFF',
        buton: '#d0afa8'
      },
      backgroundImage: {
        'gradient-header': 'linear-gradient(to right, #F4D7CF, #FFFFFF)',
        'gradient-footer': 'linear-gradient(to left, #F4D7CF, #FFFFFF)',
      },
      screens: {
        'xs': '700px',
      },
    },
  },
  plugins: [],
}
