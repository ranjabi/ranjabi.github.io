/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#18181b",
        secondary: "#a3e635",
        tertiary: "#3f3f46",
      },
    },
  },
  plugins: [],
}
