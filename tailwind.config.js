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
  plugins: [],
};
