/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./public/index.html", // Ensure the path to index.html is correct
        "./src/**/*.{js,jsx,ts,tsx}", // Match all JavaScript, JSX, TypeScript, and TSX files
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};