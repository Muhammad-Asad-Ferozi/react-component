/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#23252C",
        'primary-dark': "#1A1B21",
        'primary-darker': "#161619",
        'secondary':"#5093E2",
        'forth': "#D5D4D8",
      },
    },
  },
  plugins: [],
}

