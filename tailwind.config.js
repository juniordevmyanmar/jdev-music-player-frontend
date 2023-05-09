/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg1: '#353445',
        bg2: '#2B2A3E',
        primary: '#FFEC41',
        text1: '#CFCFCF',
        text2: '#FFFFFF',
        text3: '#7C7C7C',
        buttonContent: '#000000',
        button: '#DCDEE2',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      }

    },
  },
  plugins: [],
}
