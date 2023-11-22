/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      blue: "#00133F",
      "light-gray": "#F6F6F6",
      "dark-gray": "#00000099",
      yellow: "#FFD225",
      white: "#FFFFFF",
      green: "#00B272",
      black: "#000000"
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

