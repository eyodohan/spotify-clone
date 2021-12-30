module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    colors: {
      backdrop: "#121212",
      primary: "#1db954",
      active: "#282828",
      link: "#b3b3b3",
      footer: "#181818",
      white: "#fff",
      black: "#000",
    },
    fontSize: {
      s: "0.813rem",
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
