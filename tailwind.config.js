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
          'beau-rivage': ['Beau Rivage', 'cursive'],
          'athene': ['Athene']
        },
        colors: {
          "primary": "#241C1E",
          "secondary": "#191919",
          // "blackest": "#0b0b0d",
          // "blacker": "#181619",
          // "jet-black": "#191919",
          // "light-gray": "#272a31",
          "accent1": "#fdf5a6",
          "accent2": "#a76b09",
          "accent3": "#d1a00d"
        }
      },
    },
    plugins: [],
  }