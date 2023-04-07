/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/.src/**/*.{html,js}", "/public/index.html", './src/App.jsx'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],

  daisyui: {
    themes: false,
  },
}

