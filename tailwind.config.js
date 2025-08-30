/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/*.ejs', // or your template files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

