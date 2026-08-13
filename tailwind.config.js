/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeAccent: {
          light: '#FFF0E6',
          DEFAULT: '#ff8c00', // Primary theme color from legacy site
          dark: '#e07b00',
        },
        primaryBg: '#FDF7F4', // Soft warm background derived from Mansingh Market legacy styling
      },
      fontFamily: {
        sans: ['"Hind Madurai"', 'sans-serif'],
        serif: ['Domine', 'serif'],
      },
    },
  },
  plugins: [],
}
