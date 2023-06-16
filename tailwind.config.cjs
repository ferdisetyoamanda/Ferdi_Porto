/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#2dd4bf",
        secondary: "#94a3b8",
        light: "#cbd5e1",
        navy: "#0a192f",
      },
      fontFamily: {
        fira: "Fira Code",
        inter: "Inter",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
