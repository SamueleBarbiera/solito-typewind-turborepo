// @ts-check
const { theme } = require('app/design/tailwind/theme')
const { typewindTransforms } = require('typewind/transform')

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: {
    files: ['./App.tsx', '../../packages/**/*.{js,jsx,ts,tsx}'],
    transform: typewindTransforms,
  },
  theme: {
    ...theme,
  },
  plugins: [],
}
