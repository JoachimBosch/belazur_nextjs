/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite-react/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                belazurblue: "#125E8A",
                belazurpink: "#a13d63",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
