import type { Config } from 'tailwindcss';


const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}"
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
};


export default config; 