/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        legend: {
          dark: '#020205',
          blue: '#1A73E8',
          red: '#E81A1A',
          cyan: '#00FFFF',
        },
      },
    },
  },
  plugins: [],
}
