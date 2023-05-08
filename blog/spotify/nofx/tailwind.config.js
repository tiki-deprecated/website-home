/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      yellow: '#FFD225',
      'yellow-xxlight': '#FFF8DD',
      'yellow-xlight': '#FFE68F99',
      'yellow-light': '#FFE68F',
      'yellow-dark': '#FFB822',
      orange: '#EE7F19',
      blue: '#00133F',
      'green-dark': '#00442C',
      green: '#00B272',
      'green-light': '#D5ECD5',
      white: '#FFFFFF',
      gray: '#F8F8F8',
      'black-xlight': '#505C59',
      'black-light': '#262E33',
      black: '#1C0000',
      purple: '#6C184E',
      purpleLight: '#A66990',
      pink: '#ED8DCB',
      pinkDark: '#B5006C',
    },
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
        koara: ['Koara', ...defaultTheme.fontFamily.sans],
      },
    },
    boxShadow: {
      xs: '1px 2px 0 1px rgba(255, 184, 34, 0.5)',
      sm: '2px 3px 0 1px rgba(255, 184, 34, 0.5)',
      md: '2px 3px 0 2px rgba(255, 184, 34, 0.5)',
      DEFAULT: '2px 3px 0 4px rgba(255, 184, 34, 0.5)',
      lg: '2px 3px 0 6px rgba(255, 184, 34, 0.5)',
      xl: '2px 4px 0 8px rgba(255, 184, 34, 0.5)',
      '2xl': '2px 8px 0 10px rgba(255, 184, 34, 0.5)',
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  },
}
