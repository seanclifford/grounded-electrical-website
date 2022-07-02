module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'geblue': '#17194a'
      }
    },
    fontFamily: {
      'sans': ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      'vag-rounded' : ['VAGRoundedBT', 'sans-serif']
    }
  },
  plugins: [],
  darkMode: 'class',
}