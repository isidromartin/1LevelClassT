/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E1C2B3",
        secondary: "#E1C2B3", // Marrón elegante
        background: "#091C2A",
        dark: "#091C2A", // Gris oscuro
      },
      fontFamily: {
        heading: ["Geometros", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
