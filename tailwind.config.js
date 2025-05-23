/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: "#2b2d42",
        light: "#FAF3E0",
        bborder: "#E0E0E0",
        accent: "#7B00D3",
        accentDark: "#ffdb4d",
        gray: "#747474",
      },
      // 需要重新npm run dev
      animation: {
        roll: "roll 24s linear infinite",
      },

      keyframes: {
        roll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      screens:{
        sxl: "1180px",
        xs: "480px",
        xxxl: "1880px",
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

