// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      container: {
        padding: "2rem",
      },
      inset: {
        "0": "20px",
        auto: "auto",
        "1/2": "50%",

        "20": "2rem",
      },
      width: {
        "45/100": "45%",
        "55/100": "55%",
      },
      height: {
        "40vh": "40vh",
      },
      textColor: {
        textColor: (theme) => theme("colors"),
        white: "#fff",
        black: "#000",
        primary: "#005eff",
        "grey-500": "#6b7280",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        "primary-blue": "#005eff",
        "secondary-blue": "#6ea3ff",
        "gray-50": "#f9fafb;",
      }),
      fontFamily: {
        regular: "Camphor Regular",
        bold: "Camphor Bold",
      },
    },
  },

  variants: {},
  plugins: [],
};
