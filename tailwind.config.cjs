/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      'XS': 14,
      'SM': 16,
      'MD': 18,
      'LG': 20,
      'XL': 24,
      '2XL': 32,
    },
    colors: {
      'black': '#000000',

      'gray-900': '#121214',
      'gray-800': '#202024',
      'gray-400': '#7C7C8A',
      'gray-200': '#C4C4CC',
      'gray-100': '#E1E1E6',

      'cyan-500': '#81D8F7',
      'cyan-200': '#ACE9FF',
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      }
    },
  },
  plugins: [],
}
