/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#002760',
        secondary: '#1557C0',
        accent: '#FFD21F',
        charcoal: '#172033',
        'light-blue-bg': '#F4F8FD',
        'subtle-border': '#E6ECF3',
        'ati-yellow': '#FFD21F',
        'ati-royal': '#1557C0',
        'ati-red': '#E61932',
        orangeAccent: {
          light: '#FFF0E6',
          DEFAULT: '#ff8c00',
          dark: '#e07b00',
        },
        primaryBg: '#FDF7F4',
      },
      fontFamily: {
        sans: ['"Work Sans"', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        worksans: ['"Work Sans"', 'sans-serif'],
        mukta: ['Mukta', 'sans-serif'],
        yantramanav: ['Yantramanav', 'sans-serif'],
        serif: ['Domine', 'serif'],
      },
      boxShadow: {
        'low': '0px 2px 8px rgba(0, 39, 96, 0.04)',
        'high': '0px 16px 32px rgba(0, 39, 96, 0.08)',
        'card': '0px 4px 16px rgba(0, 39, 96, 0.06)',
        'card-hover': '0px 12px 24px rgba(0, 39, 96, 0.12)',
      },
    },
  },
  plugins: [],
}
