module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xl: { min: "1280px" }, //  Large Screen
      // => @media (max-width: 1280px) { ... }

      lg: { min: "992px" }, //  Desktop
      // => @media (min-width: 992px) { ... }

      md: { min: "768px" }, //  Tablet
      // => @media (min-width: 768px) { ... }

      sm: { min: "480px" }, //  Mobile Landscape
      // => @media (min-width: 480px) { ... }
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Gotham: ["Gotham", "cursive"],
        GothamBold: ["GothamBold", "cursive"],
        GothamLight: ["GothamLight", "cursive"],
        GothamItalic: ["GothamItalic", "cursive"],
        GothamBoldItalic: ["GothamBoldItalic", "cursive"],
        GothamLightItalic: ["GothamLightItalic", "cursive"],
      },
    },
  },
  plugins: [],
};
