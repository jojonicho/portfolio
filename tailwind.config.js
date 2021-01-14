const color = require("color");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "screen/6": "calc(100vh / 6)",
        "screen-60": "60vw",
        "screen-55": "55vw",
      },
      height: {
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "screen/6": "calc(100vh / 6)",
        "screen-60": "60vw",
        "screen-55": "55vw",
      },
      width: {
        "screen/2": "50vw",
        "screen/3": "calc(100vw / 3)",
        "screen/4": "calc(100vw / 4)",
        "screen/5": "calc(100vw / 5)",
        "screen/6": "calc(100vw / 6)",
        "screen-60": "60vw",
        "screen-55": "55vw",
      },
      colors: {
        red: colors.rose,
        success: "#0CA788",
        error: "#FF2D55",
        blue: {
          lighter: color("#0266D3").lighten(0.2).hex(),
          DEFAULT: "#0266D3",
        },
        purple: "#AF52DE",
        orange: {
          DEFAULT: "#FF9500",
          lighter: color("#FF9500").lighten(0.2).hex(),
        },
        yellow: "#FFCC00",
        violet: "#5856D6",
        black: {
          100: "#000000",
          80: "#333333",
          60: "#666666",
          40: "#999999",
          20: "#CCCCCC",
        },
        grey: "#F2F4F4",
      },
      fontFamily: {
        sans: [
          "Inter",
          "sans-serif",
          "Open Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
        stretch: ["Stretch Pro", "sans-serif"],
      },
      minWidth: {
        0: "0",
        "1/4": "25%",
        "1/3": "33%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
