/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
    './index.css',
    
  ],
  theme: {

    // fontSize: {

    // },
    extend: {
      colors: {
        'zwart': '#1D1D1F',
        'white' : '#FFFFFF',
        'achtergrond' : '#f0f0f0',
        'blauw1': '#4187AB',
        'blauw2': '#214456',
      },
      fontFamily: {
        'inter': ["'Inter'", 'sans-serif'],
        'poppins': ["'Poppins'", 'sans-serif']
      }
    },
  },
  plugins: [],
}
