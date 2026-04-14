/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["DM Serif Display", "serif"],
        body: ["Manrope", "sans-serif"]
      },
      colors: {
        canvas: "#f6f4ee",
        ink: "#121820",
        accent: "#0e8f7c",
        ember: "#d9531e",
        mist: "#dce6ef"
      },
      boxShadow: {
        panel: "0 25px 70px -30px rgba(17, 23, 33, 0.35)"
      }
    }
  },
  plugins: []
};
