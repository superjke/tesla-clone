module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#557ce5',
        grey: '#a2a3a5',
      },
      fontFamily: {
        gotham: ['Gotham', 'sans-serif'],
      },
      width: {
        700: '700px',
        320: '320px',
      },
    },
  },
  plugins: [],
}
