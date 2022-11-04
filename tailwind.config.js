/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                lanyard: "#D7BB87",
                light: "#599BF0",
                dark: "#466FA3",
            },
            fontFamily: {
                sans: ["Lato", ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                "fade-in-down": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-10px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                "fade-in": {
                    "0%": {
                        opacity: "0",
                    },
                    "100%": {
                        opacity: "1",
                    },
                },
            },
            animation: {
                "fade-in-down": "fade-in-down 0.5s ease-in-out",
                "fade-in": "fade-in 0.5s ease-in-out",
            },
        },
    },
};
