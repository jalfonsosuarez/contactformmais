import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Karla': ['Karla', 'sans-serif'],
      },
      colors: {
        "Green-200": "hsl(148, 38%, 91%)",
        "Green-600": "hsl(169, 82%, 27%)",
        "Red": "hsl(0, 66%, 54%)",
        "White": "hsl(0, 0%, 100%)",
        "Grey-500-medium": "hsl(186, 15%, 59%)",
        "Grey-900-datker": "hsl(187, 24%, 22%)",
      }
    },
  },
  plugins: [],
};
export default config;
