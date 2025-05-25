// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        slideInFromRight: "slideInFromRight 0.5s ease-in-out",
        slideInFromLeft: "slideInFromLeft 0.5s ease-in-out",
      },
      keyframes: {
        slideInFromRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
};
