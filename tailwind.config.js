module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
    theme: {
      extend: {
        fontFamily:{
          'antic': ['Antic Didone', 'serif'],
          'italiana': ['Italiana', 'serif'],
          'open-sans': ['Open Sans', 'sans-serif'],
          'beau-rivage': ['Beau Rivage', 'cursive']
        },
        colors: {
          "blackest": "#0b0b0d",
          "blacker": "#181619",
          "jet-black": "#191919",
          "light-gray": "#272a31",
          "dark-gold": "#a76b09",
          "light-gold": "#fdf5a6",
        }
      },
    },
    plugins: [],
  }