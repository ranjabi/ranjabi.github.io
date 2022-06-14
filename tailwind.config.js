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
      container: {
        center: true,
      },
      colors: {
        primary: "#FFE8C5",
        secondary: "#1E1E1E",
        tertiary: "#514ED4",
      },
      spacing: {
        '800': '800px',
      },
    },
  },
  plugins: [],
}
