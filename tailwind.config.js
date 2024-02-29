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
        borderColor: "#a1ffef7e",
      },
      fontFamily: {
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
        consolas: ["Consolas", "sans-serif"],
      },
    },
  },
  plugins: [],
};
