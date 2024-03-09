module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    'postcss-font-magician': {
      variants: {
        Mulish: {
          200: [],
          300: [],
          400: [],
          500: [],
          600: [],
          700: [],
          800: [],
          900: [],
        },
      },
      foundries: ['google'],
      formats: 'woff2 woff',
    },
  },
};
