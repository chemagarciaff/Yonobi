/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        show: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        hide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        dropdown: {
          '0%' : { opacity: 1},
          '49%' : { opacity: 0, top: "25px"},
          '50%' : { opacity: 0, top: "-25px"},
          '100%' : { opacity: 1, top: 0 }
        },
        scale: {
          '0%' : { transform: 'scale(1)' },
          '100%' : {transform: 'scale(1.05)'}
        },
      },

      animation: {
        show: 'show 0.5s ease-in-out forwards',
        hide: 'hide 0.5s ease-in-out forwards',
        dropdown: 'dropdown 0.3s forwards',
        scale: 'scale 0.4s forwards'
      },

      colors: {
        'principal': '#FAFBFD',
      }
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '108%': '108%',
      
    }
  },
  plugins: [],
}