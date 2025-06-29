/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ This enables dark mode based on a CSS class (required for next-themes)
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",     // App Router
    "./pages/**/*.{js,ts,jsx,tsx}",   // Pages Router (if used)
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}