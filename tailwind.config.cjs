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
      'transparent': 'transparent',

      'black': '#000000',
      'white': '#FFF',

      'gray': {
        '900': '#121214',
        '800': '#202024',
        '400': '#7C7C8A',
        '200': '#C4C4CC',
        '100': '#E1E1E6',
      },

      'cyan': {
        '500': '#81D8F7',
        '200': '#ACE9FF',
      }
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      }
    },
  },
  plugins: [],
}
