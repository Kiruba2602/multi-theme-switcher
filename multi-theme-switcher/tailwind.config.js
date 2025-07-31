/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"],
        serif: ["Roboto Slab", "serif"],
        pacifico: ["Pacifico", "cursive"],
      },
      colors: {
        primary: "#7e3af2",
      },
    },
  },
  plugins: [],
}

