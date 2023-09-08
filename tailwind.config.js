/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   white: "#FFFFFF",
    //   primary: "#00FFFF",
    //   secondary1: "#69ABE5",
    //   secondary2: "#487DE5",
    //   secondary3: "#67C790",
    //   secondary4: "#BDEED2",
    //   secondary5: "#69ABE5",
    //   secondary6: "#69ABE5",
    //   secondary7: "#DD8157",
    // },
    extend: {
      fontFamily: {
        sans: "Archivo, sans-serif",
        display: "Poppins, sans-serif",
      },
      colors: {
        white: "#FFFFFF",
        black: "#161616",
        primary: "#00FFFF",
        secondary1: "#DD8157",
        secondary2: "#63C5CF",
        secondary3: "#BA75E8",
        secondary4: "#E9DA56",
        secondary5: "#69ABE5",
        secondary6: "#487DE5",
        secondary7: "#DDE6FD",
        secondary8: "#161616",
        secondary9: "#67C790",
        secondary10: "#C077A0",
      },
    },
  },
  plugins: [],
};
