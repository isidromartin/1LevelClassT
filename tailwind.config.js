/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E1C2B3",
        secondary: "#5B242A", // Marrón elegante
        background: "#091C2A",
        dark: "#091C2A", // Gris oscuro
      },
      fontFamily: {
        heading: ["Geometos", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
