/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',  // Look for .ts and .tsx files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0052ff"
      }
    },
  },
  plugins: [],
}

