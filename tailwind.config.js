/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-color': '#2f2f2f',
        'secundario-color': '#0a0a23',
        'brother-color': '#2a2a2a',
        'text-color': '#ffffff',
        'secondary-text-color': '#ccc',
        'shadow-moon' : '#087ec4',
        'shadow-orange': '#cc8338'
      }
    },
  },
  plugins: [],
}
