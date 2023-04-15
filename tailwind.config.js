/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: "#1A1A1A",
        secondary: "#2A2A2A",
        highlight: "#3B3B3B",
      },
      textColor: {
        primary: "#F8F8F8",
        secondary: "#A3A3A3",
        neonGreen: "#39FF14",
        neonBlue: "#00FFFF",
        neonPink: "#FF69B4",
        neonYellow: "#FFFF00",
        neonRed: "#FF0000",
      },
      borderColor: {
        primary: "#3B3B3B",
        secondary: "#2A2A2A",
        neonGreen: "#39FF14",
        neonBlue: "#00FFFF",
        neonPink: "#FF69B4",
        neonYellow: "#FFFF00",
        neonRed: "#FF0000",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)",
      },
    },
  },
  plugins: [],
};
