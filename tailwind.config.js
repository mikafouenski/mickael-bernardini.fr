/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: ["cupcake"],
  },
  theme: {
    extend: {
      backgroundImage: {
        'wave-pattern': "url('/img/pattern.svg')",
      }
    }
  },
  plugins: [require("daisyui")]
};