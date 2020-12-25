const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./src/components/**/*.vue",
    "./src/views/**/*.vue",
    "./public/index.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans]
      },

      colors: {
        brand: "#e2b007",
      },
      rotate: {
        "10": "10deg",
        "-10": "-10deg"
      }
    }
  },
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled"
  ],
  plugins: []
};
