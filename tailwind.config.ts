import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "440px",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle, rgba(35,72,255,1) 0%, rgba(0,0,0,1) 100%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryColor: "#0067FF",
        yellowColor: "#FEB60D",
        purpleColor: "#9771FF",
        irisBlueColor: "#01B5C5",
        headingColor: "#181A1E",
        textColor: "#4E545F",
        primaryDarkcolor: "#010101",
        darkcolor: "#0d0d0d",
        darklightcolor: "#1a1d1e",
        darkbluecolor: "#0b1120",
        darkbluelightcolor: "#0f172a",
        lenearGradient: `linear-gradient(
          to right,
          rgba(180, 58, 177, 1) 0%,
          rgba(29, 253, 243, 1) 50%,
          rgba(229, 252, 69, 1) 100%
        )
        1`,
      },
      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
      },
    },
  },
  plugins: [],
};
export default config;
