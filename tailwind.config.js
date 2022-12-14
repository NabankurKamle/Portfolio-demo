module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xl: { min: "1280px" }, //  Large Screen
      // => @media (max-width: 1280px) { ... }

      lg: { min: "992px" }, //  Desktop
      // => @media (min-width: 992px) { ... }

      md: { min: "796px" }, //  Tablet
      // => @media (min-width: 768px) { ... }

      sm: { min: "480px" }, //  Mobile Landscape
      // => @media (min-width: 480px) { ... }
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Helvetica: ["Helvetica", "cursive"],
        HelveticaBold: ["HelveticaBold", "cursive"],
        HelveticaLight: ["HelveticaLight", "cursive"],
        HelveticaItalic: ["HelveticaItalic", "cursive"],
        HelveticaBoldItalic: ["HelveticaBoldItalic", "cursive"],
        HelveticaRoundedBold: ["HelveticaRoundedBold", "cursive"],
      },
      boxShadow: {
        neo: "8px 8px 12px #C6D2E0,-8px -8px 12px #F6FAFD",
        neohover: "12px 12px 15px #C6D2E0,-12px -12px 15px #F6FAFD",
        neoInset:
          "8px 8px 12px #C6D2E0,-8px -8px 12px #F6FAFD,-5px -5px 5px #F6FAFD inset,5px 5px 5px #C6D2E0 inset",
        neoInsetButton:
          "5px 5px 8px #C6D2E0,-5px -5px 8px #F6FAFD,-3px -3px 5px #F6FAFD inset,3px 3px 5px #C6D2E0 inset",
        inset: "-8px -8px 8px #F6FAFD inset, 8px 8px 8px #C6D2E0 inset",
        insetInput: "-4px -4px 4px #F6FAFD inset, 4px 4px 4px #C6D2E0 inset",
        neoButton: "5px 5px 12px #C6D2E0,-5px -5px 12px #F6FAFD",
        neoDark: "8px 8px 12px #021221,-8px -8px 12px #06233d",
        neohoverDark: "12px 12px 15px #021221,-12px -12px 15px #06233d",
        neoInsetDark:
          "8px 8px 12px #021221,-8px -8px 12px #06233d,-5px -5px 5px #06233d inset,5px 5px 5px #021221 inset",
        neoInsetButtonDark:
          "5px 5px 8px #021221,-5px -5px 8px #06233d,-3px -3px 5px #06233d inset,3px 3px 5px #021221 inset",
        insetDark: "-8px -8px 8px #06233d inset, 8px 8px 8px #021221 inset",
        insetInputDark:
          "-4px -4px 4px #06233d inset, 4px 4px 4px #021221 inset",
        neoButtonDark: "5px 5px 12px #021221,-5px -5px 12px #06233d",
      },
      backgroundColor: {
        light: "#E9F2FB",
        dark: "#001830",
      },
      colors: {
        light: "#41507B",
        dark: "#5a74bb",
      },
    },
  },
  plugins: [],
};
