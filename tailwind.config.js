/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      'bg-indigo-900': colors.indigo[900],
      'bg-opacity-80': 'rgba(0, 0, 0, 0.8)'
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

