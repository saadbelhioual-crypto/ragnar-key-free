/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        legend: {
          dark: '#020205',
          darker: '#000000',
          blue: '#1A73E8', // أزرق قوي
          red: '#E81A1A',  // أحمر قرمزي
          cyan: '#00FFFF', // لمسة نيون
        },
      },
      fontFamily: {
        legend: ['Cinzel Decorative', 'serif'], // خط أسطوري
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}