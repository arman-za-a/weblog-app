/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "sm": "576px",
      "md": "768px",
      "lg": "992px",
      "xl": "1200px",
      "2xl": "1500px"
    },
    fontFamily: {
      "yekan-medium": "yekan-bakh-medium"
    },
    extend: {
      colors: {
        "primary": "#1976d2",
        "primary-dark": "#0d5297",
        "secondary": "#b0032b",
        "siver": "#f7f7f7;"
      },
      borderWidth: {
        1: "1px"
      },
      borderRadius: {
        circle: "50%"
      }
    },
  },
  plugins: [],
}