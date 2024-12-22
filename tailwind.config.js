/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      brightness: {
        0: '0'
      },

      fontSize: {
        13: '0.813rem',
        15: '0.938rem',
        32: '2rem',
        40: '2.5rem',
        62: '4rem',
        100: '6.25rem',
      },

      fontFamily: {
        livvic: 'Livvic'
      },

      colors: {
        army_green: '#014E56',
        custom_orange: '#F67E7E',
        dark_green: '#002529',
        deep_green: '#2C6269',
        ocean_blue: '#79C8C7',
        space_green: '#012F34',
        border_stokes: '#C4FFFE',
        lighter_green: '#004047'
      },
      height: {
        72: '72px',
        102: '102px',
        200: '200px',
        281: '281px',
        360: '360px',
        520: '368px',
        667: '667px',
        1564: '3560px'
      },

      inset: {
        26: '6.5rem',
        96.5: '25rem',
        96.6: '29.5rem',
        96.65: '34rem',
        96.7: '37rem',
        97: '40rem',
        98: '50rem'
      },
      lineHeight: {
        48: '48px',
        56: '56px',
        100: '100px'
      },
      padding: {
        81: '21rem',
        96.5: '28.5rem',

      },

      translate: {
        97: '40rem'
      },
      width: {

        50: '50px',
        72: '72px',
        104: '104px',
        107: '107px',
        110: '110px',
        123: '123px',
        162: '162px',
        153: '153px',
        240: '240px',
        255: '255px',
        281: '281px',
        327: '327px',
        350: '350px',
        360: '360px',
        445: '445px',
        497: '497px',
        515: '515px',
        542: '542px',
        573: '573px',
        635: '635px',
        689: '500px',
        730: '730px',
        768: '768px',
        1110: '1110px',
        1200: '1200px',
        1440: '1440px'

        
      }
    },
  },
  plugins: [],
}

