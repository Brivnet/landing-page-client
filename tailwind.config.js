/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      backgroundImage: {
        entamarket: "url('/assets/img/entamarket.png')",
        medpharm: "url('/assets/img/medpharm.png')",
        magnus: "url('/assets/img/magnusmedia.png')",
        about: "url('/assets/img/about.jpg')",
      },
      animation: {
        "custom-bounce":
          "up-down 2s ease-in-out infinite alternate-reverse both",
        "custom-zigzag":
          "left-right 0.4s ease-in-out infinite alternate-reverse both",
        "animate-spin": "rotate 1s infinite linear",
      },
      colors: {
        primary: {
          100: "#8137BE",
        },
        primaryhover: {
          100: "#7431ab",
        },
        secondary: {
          100: "#ebd9fc",
        },
        darkpurple: {
          100: "#3B074B",
        },
        black: {
          100: "#333",
        },
        grey: {
          100: "#F5F6F8",
          200: "#b4b4b4",
        },
      },
      screens: {
        cxl: {
          raw: "(min-width: 1024px) and (max-height: 1000px)",
        },
        xs: { raw: "(min-width: 400px)" },
        xxs: { raw: "(min-width: 320px)" },
      },
    },
  },
  plugins: [],
};
