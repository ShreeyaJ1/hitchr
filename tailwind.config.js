/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          bg: 'rgba(22, 28, 45, 0.5)',
          border: 'rgba(255, 255, 255, 0.1)',
          shadow: 'rgba(0, 0, 0, 0.35)',
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}