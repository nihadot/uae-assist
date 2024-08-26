/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "1300px": "1300px",
        "1030px": "1030px",
        "1000px": "1000px",
        "640px": "640px",
        "990px": "990px",
        "600px": "600px",
        "400px": "400px",
        "390px": "390px",
        "356px": "356px",
        "340px": "340px",
      },
      fontFamily: {
        "sf-400": ["sf-normal", "sans-serif"],
        "sf-500": ["sf-medium", "sans-serif"],
        "sf-600": ["sf-medium-600", "sans-serif"],
        "sf-700": ["sf-bold", "sans-serif"],
        "poppins-500": ["poppins-medium", "sans-serif"],
        "poppins-600": ["poppins-semibold", "sans-serif"],
        "poppins-700": ["poppins-bold", "sans-serif"],
        "poppins-800": ["poppins-extrabold", "sans-serif"],
        "poppins-900": ["poppins-black", "sans-serif"],
        "poppins-400": ["poppins-normal", "sans-serif"],
      },
    },
  },
  plugins: [],
};
