/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "desk-light": "url('/images/bg-desktop-light.jpg')",
        "desk-dark": "url('/images/bg-desktop-dark.jpg')",
        "mobile-light": "url('/images/bg-mobile-light.jpg')",
        "mobile-dark": "url('/images/bg-mobile-dark.jpg')",
      },
      colors:{
        // gadient color
        "g1": "hsl(192, 100%, 67%)",
        "g2": "hsl(280, 87%, 65%)"
      }
    },
  },
  plugins: [],
}