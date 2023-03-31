/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Notable', 'sans-serif'],
      },
      boxShadow: {
        /* offset-x | offset-y | blur-radius | spread-radius | color */
        'slate': '0px 0px 20px 10px rgba(0, 255, 255, 0.1);',
      }
    },
    width: {
      '13': '3.25rem'
    },
  },
  plugins: [],
}
