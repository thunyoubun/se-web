/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background-Contact":
          "url('/pages/assets/background/8d98wrhcwlp51.png')",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
