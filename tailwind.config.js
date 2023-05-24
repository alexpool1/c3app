/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        'dark-green': '#409165',
        'medium-gray': '#9C9C9C',
        'light-yellow': '#FFD277',
        'dark-yellow': '#FFD277',
        'dark-gray': '#373737',
        'coral': '#F69B86',
        'light-purple': '#A198E9',
        'dark-purple': '#675FAA',
        'toned-blue': '#69A1CD',
        'red': '#D64A51',
        'light-green': '#94C14C',
        'teal': '#56AE91',

     },
     fontFamily: {
      sans: ['Lexend'],
     },
    },
  },
  plugins: [],
}

