/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "light-gray": "#F6F6F6",
      "dark-gray": "#00000099",
      yellow: "#FFD225",
      white: "#FFFFFF",
      green: "#00B272",
      'tiki-black': '#1C0000',
      'tiki-gray': '#505C59'
    },
    fontFamily: {
      sans: ["Space Grotesk, sans-serif"],
    },
    extend: {
      height:{
        "h-screen-1/2": "50vh"
      }
    },
  },
  plugins: [],
}

