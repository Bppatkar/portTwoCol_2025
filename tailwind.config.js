/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,jsx,ts,tsx}", // Scan all files in app directory
  "./components/**/*.{js,jsx,ts,tsx}", // If you create a top-level components directory
];
export const theme = {
  extend: {
    // Define custom fonts
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      // Assuming Geist and Geist_Mono are handled by next/font/google in layout.js
    },
    // Define custom colors
    colors: {
      primary: '#1a202c', // Dark background
      secondary: '#2d3748', // Slightly lighter dark
      accent: '#63b3ed', // Blue accent
      text: '#e2e8f0', // Light text
    },
  },
};
export const plugins = [];
