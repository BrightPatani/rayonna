/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nft-primary": "#131835",
        "nft-secondary": "#529fd8",
        "nft-text": "#9ff0fb",
        "nft-hover": "#be65ab",
        "nft-backgroundlg": "#632451",
        "nft-backgroundsm": "#110620",
      },
    },
    fontFamily: {
      exo: ['Exo 2', 'serif'], 
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens:{
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
}

