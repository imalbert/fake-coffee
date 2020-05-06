module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    screens: {
      'sm': '768px',
      'lg': '1024px',
    },
    colors: {
      black: '#160000',
      white: '#ffffe4',
      primary: {
        'light': '#ffe24c',
        'default': '#fcb001',
        'dark': '#c48100',
      },
      secondary: {
        'light': '#392a74',
        'default': '#040348',
        'dark': '#000022',
      },
      accent: {
        'light': '#99abb5',
        'default': '#7f4637',
        'dark': '#405058',
      },
    }
  },
  variants: {},
  plugins: [],
}
