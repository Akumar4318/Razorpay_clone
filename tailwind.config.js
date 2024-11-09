/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        blue1: "#0b72e7",
        deepblue: "#02042a",
        lightblue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenlight: "#61cea6",
        greentext: "#22c55e",
        graytext: "#818597",
        lightgray: "#e2e2e2",
        grayblue: "#344a6c",
        deepbluehead: "#162f56",
        gray2: "#525a76",
      },
      fontFamily: {
        mullish: ["Mullish", "sans-serif"],
        Doto: ["Doto", "sans-sarif"],
      },
    },
  },
  plugins: [],
};
