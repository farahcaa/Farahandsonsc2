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
      screens: {
        sm: "400px",
        md: "640px",
        lg: "768px",
        xl: "1024px",
        twoxl: "1289px",
      },
    },
  },
  plugins: [],
};
