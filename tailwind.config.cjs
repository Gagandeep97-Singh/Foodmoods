/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        display:['Ubuntu', 'sans-serif'],
        heading:['Permanent Marker',' cursive'],
        third:['Itim', 'cursive']
      },

      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-15%)",
          },
        },
      },
      animation: {
        'marquee': 'marquee 15s linear infinite'
      },
      
    },
    
    colors:{
      green:"#d1fae5",
      greenstrong:"#10b981",
      firstwhite:"#f9fafb",
      secondwhite:"#f3f4f6",
      border:"rgb(209 213 219)"
    }
  },
  plugins: [],
}
