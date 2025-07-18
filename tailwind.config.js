/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "992px",
      },
      colors: {
        customGreen: "#10b981",
        primary: "#1030ff",
        secondary: "#272727",
      },
      fontFamily: {
        serif: ["Merriweather", "serif"],
      },
      fontSize: {
        xl: "32px",
      },
    },
  },
  plugins: [],
};
