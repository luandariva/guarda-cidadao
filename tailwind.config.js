<<<<<<< HEAD
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

=======
﻿/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#059669',
      },
      borderRadius: {
        'button': '8px',
      },
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
}
>>>>>>> 6f51858cfaf39ec5ad390b82c742ca0350dbe786
