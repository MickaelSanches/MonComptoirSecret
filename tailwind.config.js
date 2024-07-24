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
        gradientStart: '#D0AFA8',
        gradientEnd: '#FFFFFF',
      },
      backgroundImage: {
        'gradient-header': 'linear-gradient(to right, #D0AFA8, #FFFFFF)',
      },
    },
  },
  plugins: [],
}
