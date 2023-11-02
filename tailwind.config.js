/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '500px',
      'sm': '640px', 
      'md': '1024px', 
      'lg': '1280px', 
      'xl': '1920px', 
      '2xl': '2140px'
    },
    extend: {
      keyframes: {
        commentsHeighlight: {
          '0%': { color: '#737373',  transform: 'scale(1)' },
          '50%': { color: '#1635e0',  transform: 'scale(1.2)' },
          '100%': { color: '#737373',  transform: 'scale(1)' }
        }
      },
      animation: {
        commentsHeighlight:'commentsHeighlight 1s cubic-bezier(0, 0, 0.2, 1) 1'
      }
    },
  },
  plugins: [],
}
