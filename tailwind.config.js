/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
   extend: {
    screen:{
       sm: '640px',
      // => @media (min-width: 640px) {...}

      md: '760px',
      // => @media (min-width: 760px) {...}

      lg: '1024px',
      // => @media (min-width: 1024px) {...}

      xl: '1280px',
      // => @media (min-width: 1280px) {...}

      '2xl': '1536px',
      // => @media (min-width: 1536px) {...}
      
    }
    },
      width: {
       leftWidth:'20%',
       rightWidth:'80%',
       buttonsW:'769px',
       inputW:'500px'
       
       
      },
      height: {
       inputH:'300px'
      },
      colors: {
       rightBg:'#f2f4f7',
       textP:'gray',
       leftBg:'white',
       carActiveBg:'#f9f5ff',
       textCol:'red'
      },
    },
    plugins: [],
  }
  

