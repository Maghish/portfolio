/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navbarBg: "#141414",
      },
      fontFamily: {
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
        consolas: ["Consolas", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      lw: "376px",
      mdlw: "520px",
      ...defaultTheme.screens,
      hxl: "1295px",
      xxl: "1367px",
    },
  },
  plugins: [],
};
