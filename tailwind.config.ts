import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        mist: "#f3f7f5",
        leaf: "#2f7d6d",
        coral: "#e85d4a",
        sun: "#f4b860",
        sea: "#2d6cdf"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(23, 32, 51, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
