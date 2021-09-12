const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.html',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      cyan: colors.cyan,
      sky: colors.sky,
      indigo: {
        light: '#966EFF',
        DEFAULT: '#966EFF',
        dark: '#966EFF',
        50: '#faf8ff',
        100: '#f4f0ff',
        200: '#eae2ff',
        300: '#dfd3ff',
        400: '#d5c5ff',
        500: '#cab6ff',
        600: '#c0a8ff',
        700: '#b599ff',
        800: '#ab8bff',
        900: '#a07cff',
      },
      red: colors.rose,
      yellow: colors.amber,
      blue: {
        light: '#0038A6',
        DEFAULT: '#0038A6',
        dark: '#0038A6',
      },
    },
    fontFamily: {
      'mons': ['Montserrat'],
    },
    extend: {}
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ]
}
