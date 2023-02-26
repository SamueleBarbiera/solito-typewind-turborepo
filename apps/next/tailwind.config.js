const { theme } = require('../../packages/app/design/tailwind/theme')
const { typewindTransforms } = require('typewind/transform')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: [
      './pages/**/*.{js,jsx,ts,tsx}',
      '../../packages/**/*.{js,jsx,ts,tsx}',
    ],
    transform: typewindTransforms,
  },
  plugins: [require('nativewind/tailwind/css')],
  important: 'html',
  theme: {
    ...theme,
  },
}
