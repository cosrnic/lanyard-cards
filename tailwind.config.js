/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite-react/**/*.js",
    ],
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
        },
    },
    plugins: [require("flowbite/plugin")],
    important: true,
};
