/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#3F2305",
      secondary: "#DFD7BF",
      tertiary: "#F2EAD3",
      accent: "#F5F5F5",
    },
  },
  plugins: [],
};
