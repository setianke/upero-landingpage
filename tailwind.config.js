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
        50:  '#eef4ff',
        100: '#dde8ff',
        200: '#bad1ff',
        300: '#98bbff',
        400: '#75a4ff',
        500: '#538dff',
        600: '#3176ff',
        700: '#0e5fff',
        800: '#004feb',
        900: '#0044c8',
      },
      lime: {
        light: '#B5FF2B',
        DEFAULT: '#B5FF2B',
        dark: '#B5FF2B',
        50:  '#fbfff4',
        100: '#f8ffea',
        200: '#f0ffd5',
        300: '#e9ffbf',
        400: '#e1ffaa',
        500: '#daff95',
        600: '#d3ff80',
        700: '#cbff6b',
        800: '#c4ff55',
        900: '#bcff40',
      }
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
