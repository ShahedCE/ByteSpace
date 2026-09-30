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
        clash: ["var(--font-clash)", "'Clash Display'", "sans-serif"],
        poppins: ["var(--font-poppins)", "'Poppins'", "sans-serif"],
        satoshi: ["var(--font-satoshi)", "'Satoshi'", "sans-serif"],
      },
      colors: {
        brand: {
          blue: "#003BE2",
          lime: "#D4FB20",
          neon: "#CBFC01",
          light: "#F5F5F6",
          subtext: "#E5E6E8",
        },
      },
    },
  },
  plugins: [],
};

export default config;
