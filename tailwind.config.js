const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'contact-image': "url('/flower/flower_3.png')",
      })
    },
    colors: {
      // Build your palette here
      white: colors.white,
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      teal: colors.teal,
      pink: colors.pink,
      lightPink: '#fdf5f4'

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
