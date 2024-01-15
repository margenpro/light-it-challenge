/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: "Roboto",
      sans: ['"Roboto"', "Arial", "sans-serif"],
    },
    extend: {
      borderRadius: {
        none: "0",
        1: "1px",
        2: "2px",
        4: "4px",
        6: "6px",
        8: "8px",
        12: "12px",
        16: "16px",
        32: "32px",
      },
    },
  },
  plugins: [],
};
