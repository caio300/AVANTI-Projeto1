/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#005CFF',
        purplePrimary: '#6220C1',
        grayPrimary: '#E7E7EA',
        graySecondary: '#DDDDDD',
        grayTertiary: '#DEDEDE',
        grayQuaternary: '#F5F5F5',
        grayScale: '#303030',
        grayQuinto: '#656565',
        greenPrimary: '#5EC0BE'
      },
      fontFamily: {
        nunitoSans: ['Nunito Sans', 'sans-serif'],
        nunito : ['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [],
}

