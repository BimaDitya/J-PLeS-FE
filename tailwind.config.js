/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        head: ["Ysabeau Infant", "sans-serif"],
        body: ["Assistant", "sans-serif"],
        code: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [require("rippleui")],
  rippleui: {
    removeThemes: ["dark"],
    themes: [
      {
        themeName: "light",
        colorScheme: "light",
        colors: {
          primary: "#1e293b",
          backgroundPrimary: "#e5e5e5",
        },
      },
    ],
  },
};
