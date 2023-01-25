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
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
