const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "480px",
        md: "700px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px",
        xxxl: "1536px",
        xxxxl: "2000px",
        ...defaultTheme.screens,
      },
      colors: {
        primaryBlack: "#1D2939",
        secondaryBlack: "#344054",
        primaryWhite: "#F7F8FF",
        secondaryWhite: "rgba(143, 155, 179, 0.08)",
        primaryGray: "#8F9BB3",
        darkBg: "rgba(249, 251, 252, 0.08)",
        lightBg: "rgba(143, 155, 179, 0.08)",
        lightWhite: "rgba(255, 255, 255, 0.05)",
        cardbg: "rgba(255, 255, 255, 0.08)",
        ratingBtns: "rgba(255, 255, 255, 0.10)",
      },
      fontFamily: {
        "groteska-bold": ["Groteska-Bold", "sans-serif"],
        "groteska-bold-italic": ["Groteska-BoldItalic", "sans-serif"],
        "groteska-book": ["Groteska-Book", "sans-serif"],
        "groteska-book-italic": ["Groteska-BookItalic", "sans-serif"],
        "groteska-heavy": ["Groteska-Heavy", "sans-serif"],
        "groteska-heavy-italic": ["Groteska-HeavyItalic", "sans-serif"],
        "groteska-italic": ["Groteska-Italic", "sans-serif"],
        "groteska-light": ["Groteska-Light", "sans-serif"],
        "groteska-light-italic": ["Groteska-LightItalic", "sans-serif"],
        "groteska-medium": ["Groteska-Medium", "sans-serif"],
        "groteska-medium-italic": ["Groteska-MediumItalic", "sans-serif"],
        "groteska-regular": ["Groteska-Regular", "sans-serif"],
        "groteska-thin": ["Groteska-Thin", "sans-serif"],
        "groteska-thin-italic": ["Groteska-ThinItalic", "sans-serif"],
      },
      boxShadow: {
        "socials-shadow": "0px 5.84px 33.58px 0px rgba(196, 196, 196, 0.15)",
        "follow-btn-shadow": "0px 15px 32px 0px rgba(0, 0, 0, 0.60)",
        "send-shadow": "0px 8px 26.85px 0px rgba(0, 29, 109, 0.35)",
        "close-shadow": "0px 3px 20px 0px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
