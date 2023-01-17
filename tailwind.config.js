/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'theme-color': '#002f34'
      },
      width:{
         '68': '17rem /* 272 px */',
         
      },
    },
  },
  plugins: [],
}
