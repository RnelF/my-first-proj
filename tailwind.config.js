/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "custom-width-1": "500px",
        "custom-width-2": "450px",
        "custom-width-3": "350px",
        "custom-width-4": "1024px",
      },
      screens: {
        em: "350px",
        smallest: "450px",
        smaller: "550px",
        pointZero: "10px",
      },
    },
  },
  plugins: [],
};
