import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0E0E0E",
        barBackground: "#000000",
        primaryColor: "#FFFFFF",
        accentColor: "#212121",
      },
      fontFamily: {
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
