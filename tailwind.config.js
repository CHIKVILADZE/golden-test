/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        indieFlower: ['Indie Flower', 'cursive'],
        imprima: ['Imprima', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
