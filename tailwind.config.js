/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      keyframes: {
        pulseSmooth: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      animation: {
        pulseSmooth: 'pulseSmooth 1.5s ease-in-out',
      },
      colors: {
        portalGreen: '#00FFAB',
        electricBlue: '#2ECCFA',
        galacticPurple: '#8E44AD',
        brightPink: '#F81CE5',
        acidYellow: '#F4D03F',
        darkGray: '#2C3E50',
        softWhite: '#FDFEFE',
        portalLight: '#66FFCC',
        rickBlue: '#4169E1',
        mortyYellow: '#FFDD57',
        alienGreen: '#6FFF00',
        plumbusPink: '#FF6EC7',
        voidBlack: '#101820',
        nebulaPurple: '#9B59B6',
        squanchOrange: '#FFA500',
      },
    },
      fontFamily: {
        rick: ['Orbitron', 'sans-serif'],
      },
  },
  plugins: [],
}