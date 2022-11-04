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
      boxShadow: {
        neo: "8px 8px 12px #C6D2E0,-8px -8px 12px #F6FAFD",
        neohover: "12px 12px 15px #C6D2E0,-12px -12px 15px #F6FAFD",
        neoInset:
          "8px 8px 12px #C6D2E0,-8px -8px 12px #F6FAFD,-5px -5px 5px #F6FAFD inset,5px 5px 5px #C6D2E0 inset",
        neoInsetButton:
          "5px 5px 8px #C6D2E0,-5px -5px 8px #F6FAFD,-3px -3px 5px #F6FAFD inset,3px 3px 5px #C6D2E0 inset",
        inset: "-8px -8px 8px #F6FAFD inset, 8px 8px 8px #C6D2E0 inset",
        neoButton: "5px 5px 12px #C6D2E0,-5px -5px 12px #F6FAFD",
      },
      backgroundColor: {
        light: "#E9F2FB",
      },
    },
  },
  plugins: [],
};
