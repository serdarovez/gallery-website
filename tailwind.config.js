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
          400: "#e23535",
          500: "#cf1d1d",
          600: "#a81414",
          700: "#7a0c0c",
          800: "#580606",
          900: "#3a0303",
          950: "#1f0101",
        },
        // base "ink" repurposed as deep oxblood so existing classes still apply
        ink: {
          950: "#160303",
          900: "#260606",
          800: "#330909",
          700: "#440f0f",
          600: "#5a1414",
        },
        bone: {
          50: "#f4ece0",
          100: "#ead8c4",
          200: "#d6bfa3",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      animation: {
        "marquee-x": "marqueeX 28s linear infinite",
      },
      keyframes: {
        marqueeX: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
