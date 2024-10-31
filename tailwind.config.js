/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
       primary:"#FF7A00",
       secondary: "#2E2E2E",
       white: "#fff",
       black: "#000"
    },
    extend: {},
  },
  plugins: [],
}