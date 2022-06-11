/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#CBF457",
        secondary: "#18181b",
        tertiary: "#514ED4",
      },
      spacing: {
        '800': '800px',
      },
    },
  },
  plugins: [],
}
