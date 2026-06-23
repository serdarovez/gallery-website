/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        crimson: {
          50: "#fbecec",
          100: "#f4c8c8",
          200: "#e89898",
          300: "#d96868",
          400: "#c83a3a",
          500: "#a81d1d",
          600: "#8b1414",
          700: "#6e0d0d",
          800: "#520808",
          900: "#350303",
          950: "#1a0101",
        },
        ink: {
          900: "#0a0606",
          800: "#120909",
          700: "#1a0e0e",
          600: "#241414",
        },
        bone: {
          50: "#faf6f1",
          100: "#f1e9dc",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
        "scale-in": "scaleIn 0.25s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
