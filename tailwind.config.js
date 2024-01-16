/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      roboto: "Roboto",
      sans: ['"Roboto"', "Arial", "sans-serif"],
    },
    extend: {
      boxShadow: {
        "primary": "0px 0px 0px 4px #BDE2DE, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        "danger": "0px 0px 0px 4px #FFC0AD, 0px 1px 2px 0px rgba(16, 24, 40, 0.05"
      },
      colors: {
        primary: {
          "00756e": "#00756E",
          "005e58": "#005E58",
          eaf6f4: "#EAF6F4",
          bde2de: "#BDE2DE",
          "004742": "#004742",
          "008c84": "#008C84",
          "66b9b1": "#66B9B1",
        },
        gray: {
          "5a6575": "#5A6575",
          aeb7c5: "#AEB7C5",
          f8f9fa: "#F8F9FA",
          dfe3e9: "#DFE3E9",
          "6d798a": "#6D798A",
          a5a5a5: "#A5A5A5",
          485260: "#485260",
          c6cdd7: "#C6CDD7",
          "3a3a3a": "#3A3A3A",
        },
        neutral: {
          232323: "#232323",
          "6d6d6d": "#6D6D6D",
          c2c2c2: "#C2C2C2",
          535353: "#535353",
        },
      },
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
