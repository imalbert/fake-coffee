const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        ...defaultTheme.fontSize,
        xxs: ".625rem",
      },
    },
    screens: {
      sm: "768px",
      lg: "1024px",
    },
    colors: {
      black: "#160000",
      white: "#ffffe4",
      primary: {
        light: "#ffe24c",
        default: "#fcb001",
        dark: "#c48100",
      },
      gray: { ...defaultTheme.colors.gray },
    },
  },
  variants: {},
  plugins: [],
}
