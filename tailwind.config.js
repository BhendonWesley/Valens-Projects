/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#0193E1",
        "primary-container": "#0079D8",
        "on-primary": "#ffffff",
        "surface": "#050B1A",
        "surface-container-lowest": "#040814",
        "surface-container-low": "#0B1424",
        "surface-container": "#101C34",
        "surface-container-high": "#16243F",
        "surface-container-highest": "#1D2F4E",
        "on-surface": "#EAF1FB",
        "on-surface-variant": "#A6B4CC",
        "outline": "#5C6E8C",
        "outline-variant": "#27374F",
        "background": "#050B1A",
        "brand-navy": "#01054F",
        "brand-navy-soft": "#233772",
        "brand-blue": "#0079D8",
        "brand-blue-lite": "#0193E1",
        "silver": "#868686",
        "paper": "#F8F8F8",
        "ink": "#0B1220",
        "ink-soft": "#2A2A2A"
      },
      fontFamily: {
        "display": ["'Playfair Display'", "Georgia", "serif"],
        "sans": ["Archivo", "sans-serif"],
        "body": ["Inter", "sans-serif"]
      },
      maxWidth: { "site": "1440px" }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ]
}
