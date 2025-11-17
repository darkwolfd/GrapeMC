/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        grapeBlue: "#66d0ff",
        grapeCyan: "#00d4ff",
        grapeRed: "#ff3b3b",
        "bg-dark": "#0b0f14"
      },
      boxShadow: {
        neon: "0 4px 24px rgba(102,208,255,0.12), 0 0 40px rgba(0,212,255,0.08)"
      }
    }
  },
  plugins: []
}
