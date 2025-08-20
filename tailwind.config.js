/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fefbf0',
          100: '#fdf6d9',
          200: '#fbe9b3',
          300: '#f8d87d',
          400: '#f4c147',
          500: '#e7b72d', // Cor principal da marca
          600: '#d1962e', // Cor secundária da marca
          700: '#b37a25',
          800: '#8f5f22',
          900: '#744e20',
        },
        dark: {
          50: '#f6f7f8',
          100: '#edeef0',
          200: '#d5d9de',
          300: '#b0b9c3',
          400: '#8593a2',
          500: '#40505f', // Cor azul escuro da marca
          600: '#253847', // Cor azul mais escuro da marca
          700: '#1e2d3a',
          800: '#1a2530',
          900: '#1a202c',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
