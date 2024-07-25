/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
      },
      colors: {
        nextblue: '#1243F3',
        nextlightblue : "#6899fc",
        nextgrey: "#575a7b"
      },
    },
  },
  plugins: [],
}
