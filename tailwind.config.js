/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:  {
      colors : {
        "purple": "#cb98ff",
      },
      fontFamily: {
        'primary': ['Blinker', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

