/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Lora", "serif"],
      mono: ["Inconsolata", "monospace"],
    },
    colors: {
      "gray-darkest": "#050505",
      "gray-darker": "#1F1F1F",
      "gray-dark": "#2D2D2D",
      gray: "#3A3A3A",
      "gray-lighter": "#757575",
      "gray-light": "#E9E9E9",
      "gray-lightest": "#F4F4F4",
      white: "#FFFFFF",
      purple: "#A445ED",
      crimson: "#FF5252",
    },
    extend: {
      borderWidth: {
        1: "1px",
      },
      backgroundImage: {
        downArrow: "url('./assets/images/icon-arrow-down.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
