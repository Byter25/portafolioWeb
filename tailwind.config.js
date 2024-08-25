/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'responsive': 'repeat(auto-fit, minmax(250px, 1fr))',
        'custom': 'repeat(auto-fit, minmax(200px, 300px))',
      },
    },
  },
  plugins: [],
}
