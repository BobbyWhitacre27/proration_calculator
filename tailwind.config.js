/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html", './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('daisyui')],

  daisyui: {
    themes: false,
  },
}

