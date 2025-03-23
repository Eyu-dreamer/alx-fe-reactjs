/** @type {import('tailwindcss').Config} */
export default {
  // The content section specifies the paths to all the files that should be scanned for Tailwind classes.
  content: [
    // Path to your HTML file
    "./public/index.html", 
    
    // Path to your source files (JS, JSX, TS, TSX, etc.)
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],

  theme: {
    extend: {
      // You can extend Tailwind's default theme here, such as adding custom colors, fonts, or spacing.
    },
  },

  plugins: [
    // You can add any Tailwind plugins here. For now, it's an empty array.
  ],
};
