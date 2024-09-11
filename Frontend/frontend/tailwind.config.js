/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      transitionDuration: {
        '500': '500ms', // Customize as needed
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite', // Slower spin
        'spin-fast': 'spin 500ms linear infinite', // Faster spin
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}

