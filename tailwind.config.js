/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontfamily: {
        sans: ['iranyekan'],
      },
      backgroundImage: {
        'login': "url('./assets/images/fastfood.jpg')",
      },
      colors: {
        primaryColor: '#d97706',
      },
    },
  },
  plugins: [],
}
