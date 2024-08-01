/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#F4D7CF',
        gradientStart: '#F4D7CF',
        gradientEnd: '#FFFFFF',
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
