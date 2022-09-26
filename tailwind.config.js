/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#0085f4",
        body: "#000000",
        "body-contrast": "#151515"
      },
      textColor: {
        primary: "#ffffff",
        secondary: "#ababab",
        link: "#0085f4"
      }
    },
  },
  plugins: [],
}
