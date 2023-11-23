/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {paper: '#faf3e7'},
    extend: {
      backgroundImage: {
        'mainpage': "url('./background.png')",
        'projects': "url('./projects.png')",
        'contact': "url('./contact.png')",
      },
      fontFamily: {
        "MedievalSharp": ['Regular']
      }
    },
  },
  plugins: [],
}

