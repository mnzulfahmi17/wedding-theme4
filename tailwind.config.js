/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      xs: "370px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      keyframes: {
        openInvitation: {
          "0%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(30px)" },
          "100%": { transform: "translateY(-2500px)", display: "none" },
        },
        zoomInOut: {
          "0%": { transform: "scale(1, 1)" },
          "50%": { transform: "scale(1.05, 1.05)" },
          "100%": { transform: "scale(1, 1)" },
        },
      },
      animation: {
        openInvitation: "openInvitation 3s linear forwards",
        zoomInOut: "zoomInOut 1s ease infinite",
      },
      fontFamily: {
        rochester: ["Rochester", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        customLightGrey: "#D9D9D9",
        customGreen: "#7A9577",
        customBrown: "#6B6654",
        customDarkGrey: "#6C757D",
        // New
        customDarkGreen: "#3A4E3F",
        customDarkGreen2: "#122617",
        customGreen: "#BCB683",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
