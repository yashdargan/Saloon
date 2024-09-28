// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Include all source files in the src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        greatvibes: ["Great Vibes", "cursive"],
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
