/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      'max-width': '1920px',
      center: true,
      padding: {
        DEFAULT: '1rem', // Default padding for all breakpoints
        sm: '1rem',      // Padding for sm screens and up
        md: '1rem',      // Padding for md screens and up
        lg: '1rem',      // Padding for lg screens and up
        xl: '1rem',      // Padding for xl screens and up
      },
    },



    extend: {
      backgroundImage: {
        headerBg1: "url('/assets/images/sliderbg1.png')",
        headerBg2: "url('/assets/images/sliderbg2.png')"
        // buttonPlay: "url('/assets/icons/playIcon.png')",
      },
      // screens: {

      //   'sm': '601px', // Custom small screen size
      //   'md': '768px', // Custom medium screen size
      //   'lg': '993px', // Custom large screen size
      //   'xl': '1201px', // Custom extra large screen size
      //   '2xl': '1440px', // Custom double extra large screen size
      //   // Add more custom sizes if needed
      // },


    },
    fontFamily: {
      Poppins: ["Poppins", 'sans-serif'],
      Barlow: ["Barlow", 'sans-serif'],
      Lato:["Lato","sans-serif"],
      'barlow-extrabold': ['Barlow-ExtraBold', 'sans-serif'],
      'barlow-800': ['Barlow-Bold', 'sans-serif'],
      Apple: ['-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif']
    },


  },
  plugins: [],
};
