/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["var(--font-figtree)"],
        urbanist: ["var(--font-urbanist)"],
      },
      colors: {
        brand: {
          red: "#FC004E",
          blue: "#10CBE0"
        },
        gray: '#ABABAB'
      },
      dropShadow: (theme) => ({
        red: `0 4px 2px ${theme('colors.brand.red')}`,
        blue: `0 4px 2px ${theme('colors.brand.blue')}`,
      }),
      boxShadow: (theme) => ({
        red: `2px 2px 10px 0 ${theme('colors.brand.red')}`,
        blue: `2px 2px 10px 0 ${theme('colors.brand.blue')}`,
      }),
      keyframes: {
        "folded-entrance": {
          "0%": {
            transform: "perspective(1000px) rotateX(-90deg)",
            opacity: 0,
          },
          "100%": {
            transform: "perspective(1000px) rotateX(0)",
            opacity: 1,
          },
        },
      },
      animation: {
        "folded-entrance": "folded-entrance 0.3s ease-out",
      },
    },
  },
  plugins: [],
};