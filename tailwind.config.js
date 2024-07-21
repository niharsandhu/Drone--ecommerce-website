/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  lineHeight: {
      'extra-tight': '0.8', // custom line height
    }},
    screens: {
      'xl': {'max': '1280px'},
      'lg': {'max': '991px'},
      'md': {'max': '767px'},
      'sm': {'max': '550px'},
      'xsm': {'max': '375px'},
    },
  },
  plugins: [],
}
