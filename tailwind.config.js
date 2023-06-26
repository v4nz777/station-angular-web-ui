/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(63,81,181, 1)",
        hover: "rgba(0, 88, 193, 1)",
        secondary: "rgba(218, 118, 0, 0.2)",
        accent: "rgba(255,64,129, 1)",
        disabled: "#D3D3D3",
      }
    },
  },
  plugins: [],
}
