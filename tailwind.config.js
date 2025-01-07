/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': 'rgba(230, 63, 58, 0.03)',
      },
    },
  },
  plugins: [],
}