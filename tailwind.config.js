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
        'dark-yellow': '#FFD277',
        'dark-gray': '#373737',
     },
     fontFamily: {
      sans: ['Lexend'],
     },
    },
  },
  plugins: [],
}
