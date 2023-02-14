/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        small: "22px",
        medium: "28px",
        large: "50px",
        xlarge: "62px",
      },
      colors: {
        primary: "#F4A88E",
        secondary: "#E4E4E4",
      },
    },
  },
  plugins: [],
};
