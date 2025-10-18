import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    // include common project folders and all jsx/tsx files
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
    // explicit patterns to ensure .jsx files are discovered
    "./**/*.jsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./WhoWeAre/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
        display: ['Playfair Display', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: "#0A2540",
          light: "#071F38",
        },
        gold: {
          DEFAULT: "#BBA25A",
        },
        beige: {
          DEFAULT: "#EDEBE7",
          light: "#DFD9CC",
        },
        sage: {
          DEFAULT: "#88938F",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
