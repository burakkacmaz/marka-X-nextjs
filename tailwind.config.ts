import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      ekran200: "200px", //! benim
      ekran300: "300px", //! benim
      ekran400: "400px", //! benim
      ekran500: "500px", //! benim
      sm: "640px",
      md: "768px",
      ekran865: "865px", //! benim
      lg: "1024px",
      ekran1168: "1168px", //! benim
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#333",
        ccc: "#ccc",
        red: "red",
      },
    },
  },
  plugins: [],
};
export default config;
