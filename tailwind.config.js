/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Blue: "#00ADEF",
        Orange: "#AF5D63",
        DarkBlue: "#1D2F6F",
        Black: "#000000",
        White: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
