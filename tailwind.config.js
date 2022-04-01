const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'media', // or 'media' or 'class'
  content: [
    "./src/styles.css",
    "./public/index.html",
    "./public/base.css"],
  theme: {

    extend: {

      screens: {
        'xs': '375px',
        ...defaultTheme.screens,
      },
      backgroundImage: {
        'intro': 'url("../images/bg-intro-mobile.svg")',
        'introDesktop': 'url("../images/bg-intro-desktop.svg")',
      },
      height: {
        '42': '31rem',
      },


    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
