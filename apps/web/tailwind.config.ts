import sharedConfig from "@surfbit/tailwind-config/sharedConfig"

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedConfig,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{ts, js , tsx , jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0d74f5",
          dark: "#0a5dc2",
          light: "#3d8ff7",
        },
        secondary: {
          DEFAULT: "#edf6ff",
          dark: "#d6e9ff",
        },
        fontFamily: {
          sans: ["Montserrat", "sans-serif"], // default
          grotesk: ['"Space Grotesk"', "sans-serif"], // use via class
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
