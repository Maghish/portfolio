/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "tech-stack-tag-shadow": "0px 1px 3px 3px rgba(139 92 246 / 1.0)",
        "exp-modal-shadow": "0px 0px 20px 20px rgba(255 255 255/ 0.15)",
      },
      colors: {
        navbarBg: "#141414",
      },
      keyframes: {
        fadeInScale: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        fadeOutScale: {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.95)" },
        },
      },
      animation: {
        "fade-in-scale": "fadeInScale 300ms ease-out forwards",
        "fade-out-scale": "fadeOutScale 300ms ease-in forwards",
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
