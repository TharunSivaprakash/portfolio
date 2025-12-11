/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Syne', 'sans-serif']
      },
      colors: {
        dark: '#0a0a0a',
        accent: '#eb5939'
      }
    }
  },
  plugins: []
}
