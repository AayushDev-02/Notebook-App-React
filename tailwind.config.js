/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#141414",
        secondary: "#3B3D42",
        tertiary: "#697686",
        primary_text: "#F0F1F1",
        brand:"#A0C4D9",
        secondary_Text: "#9FA2A6",

      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },

    },
  },
  plugins: [],
}
