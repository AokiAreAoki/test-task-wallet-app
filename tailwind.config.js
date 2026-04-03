/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'panel-bg': '#fefefe',
        'app-bg': '#f2f2f6',
      },
    },
  },
  plugins: [],
}
