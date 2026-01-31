/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2F7D6B',
          dark: '#25624f',
          light: '#3d9e87',
        },
        accent: {
          DEFAULT: '#2F7D6B',
          dark: '#25624f',
          light: '#3d9e87',
        },
        ivory: {
          DEFAULT: '#F6F7F4',
          dark: '#eeefe8',
          light: '#ffffff',
        },
        charcoal: {
          DEFAULT: '#0F1115',
          dark: '#000000',
          light: '#1a1d23',
        },
        dark: {
          bg: '#F6F7F4',
          surface: '#ffffff',
          card: '#ffffff',
          border: '#e5e7e0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
