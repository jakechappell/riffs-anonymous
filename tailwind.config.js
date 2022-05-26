module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      apple: "'Segoe UI'"
    },
    extend: {
      colors: {
        'matte-grey': '#454e56',
        'matte-darkgrey': '#2a2e35',
        'matte-black': '#12181b',
        'matte-purple': '#8658a5'
      },
    },
  },
  plugins: [],
}
