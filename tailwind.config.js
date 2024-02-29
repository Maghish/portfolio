/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        themeWhite: "#DCDFE4",
        themeLightGray: "#cbcdd2",
        bgThemeGray: "#353638",
        bgThemeLighterGray: "#3d3e40",
        borderGreenColor: "#a1ffef7e",
        borderDarkerGreenColor: "#a1ffef29",
        borderContrastGreenColor: "#a1ffefb9",
      },
      fontFamily: {
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
        consolas: ["Consolas", "sans-serif"],
      },
    },
  },
  plugins: [],
};
