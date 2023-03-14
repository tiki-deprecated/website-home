/*
 * Copyright (c) TIKI Inc.
 * MIT license. See LICENSE file in root directory.
 */

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      gray: "#545454",
      black: "#1C0000",
      blue: "#00133F",
      yellow: "#FFE68F",
      orange: "#EE7F19",
      green: "#00B272",
      transparent: "#FFFFFFFF",
    },
    fontFamily: {
      sans: ["Space Grotesk", "sans-serif"],
      koara: ["Koara", "Space Grotesk", "sans-serif"],
    },
    boxShadow: {
      sm: "2px 3px 0 1px rgba(255, 230, 143, 0.5)",
      md: "2px 3px 0 2px rgba(255, 230, 143, 0.5)",
      DEFAULT: "2px 3px 0 4px rgba(255, 230, 143, 0.5)",
      lg: "2px 3px 0 6px rgba(255, 230, 143, 0.5)",
      xl: "2px 4px 0 8px rgba(255, 230, 143, 0.5)",
      "2xl": "2px 8px 0 10px rgba(255, 230, 143, 0.5)",
    },
    extend: {},
  },
};
