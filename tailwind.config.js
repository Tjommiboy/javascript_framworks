/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pastelGreen: {
          50: "#f2fbf3",
          100: "#e1f7e4",
          200: "#c4eecb",
          300: "#79d788",
          400: "#60c871",
          500: "#3aad4d",
          600: "#2b8e3b",
          700: "#257032",
          800: "#22592c",
          900: "#1d4a26",
          950: "#0b2811",
        },
      },
    },
  },
  plugins: [],
};
