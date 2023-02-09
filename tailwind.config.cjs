/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      screens: {
        customh: { raw: "(min-height: 550px)" },
      },
    },
  },
  plugins: [],
};
