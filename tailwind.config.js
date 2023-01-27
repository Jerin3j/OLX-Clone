/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'theme-color': '#002f34',
        'whitesmoke': '#f5f5f5',
      },
      width:{
         '68': '17rem /* 272 px */',
         '600': ' 37.5rem /* 600px */',
         
      },
    },
  },
  plugins: [],
}
