import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#FFD500",
        ink: "#111111",
        hoverink: "#1A1A1A",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 14px rgba(0,0,0,.07)",
        lift: "0 18px 50px rgba(0,0,0,.14)",
      },
    },
  },
  plugins: [],
};
export default config;
