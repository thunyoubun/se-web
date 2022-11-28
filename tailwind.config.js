/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background-Contact":
          "url('/pages/assets/background/8d98wrhcwlp51.png')",
      },
    },
  },
  plugins: [],
};
